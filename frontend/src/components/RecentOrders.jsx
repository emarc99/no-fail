import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers'
import p1 from "../assets/unsplash_1.png";
import p2 from "../assets/unsplash_2.png";
import p3 from "../assets/unsplash_3.png";
import p4 from "../assets/unsplash_4.png";
import p5 from "../assets/unsplash_5.png";
import p6 from "../assets/unsplash_6.png";
const recentOrderData = [
	{
		name: 'Macbook Pro',
		code: '0001',
		price: '$1,250',
		type: '23143',
		quantity: '44',
		image: p1,
		current_order_status: 'DELIVERED',
	},
	{
		name: 'iPhone 14 pro ',
		code: '0002',
		price: '$235',
		type: '23143',
		quantity: '23',
		image: p2,
		current_order_status: 'OUT_OF_STOCK',
	},
	{
		name: 'Zoom75',
		code: '0003',
		price: '$215',
		type: '23143',
		quantity: '22',
		image: p3,
		current_order_status: 'PLACED',
	},
	{
		name: 'Airpods Pro',
		code: '0004',
		price: '$102',
		type: '23143',
		quantity: '52',
		image: p4,
		current_order_status: 'CONFIRMED',
	},
	{
		name: 'Logitech Superlight',
		code: '0005',
		price: '$500',
		type: '23143',
		quantity: '12',
		image: p5,
		current_order_status: 'SHIPPED',
	},
	{
		name: 'Samsung Galaxy Fold',
		code: '0006',
		price: '$35',
		type: '23143',
		quantity: '100',
		image: p6,
		current_order_status: 'OUT_FOR_DELIVERY',
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<div className='flex justify-between  py-6 pr-4 w-full'>
				<strong className="text-gray-700 text-[20px] font-medium">Product List</strong>
				<div className='bg-[#6C11D9] rounded-sm py-2 px-4'>
					<img src="" alt="" />
					<p className='font-[500] text-white text-sm'>Add New Product</p>
				</div>
			</div>
			<div className="border-gray-200 rounded-sm mt-3 w-full">
				<table className="w-full">
					<thead>
						<tr className='text-left bg-[#F4F5FC]  rounded-xl border-spacing-x-20 text-[#5C6F88]'>
							<th className='pl-7'>Name</th>
							<th>Code</th>
							<th>Type</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Image</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.name} className='bg-[#F4F5FC] border-[10px] rounded-xl border-spacing-y-20 border-white' >
								<td className='pl-5'>
									<Link to={`/order/${order.name}`}>{order.name}</Link>
								</td>
								<td>
									<Link to={`/product/${order.code}`}>#{order.code}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.price}`}>{order.type}</Link>
								</td>
								<td>{order.price}</td>
								<td>{order.quantity}</td>
								<td><img src={order.image} alt="" className='my-5' /> </td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
