import sales1 from "../assets/sales.svg";
import sales2 from "../assets/sales1.svg";
import sales3 from "../assets/sales2.svg";
import sales4 from "../assets/sales3.svg";

export default function DashboardStatsGrid() {
	return (
		<div className=" bg-[#F4F5FC] px-7 pt-5 pb-5 border-[#CED4DA] border">
			<h2 className='text-[16px] font-[500] mb-3'>
			Sales Summary
			</h2>
			<div className='flex gap-2'>
				<BoxWrapper>
					<div className=" flex items-center  justify-center">
						<img src={sales2} alt="" className='h-12 w-12' />
					</div>
					<div className="pl-4">
						<span className="text-[12px] text-gray-500 font-medium">143.3k</span>
						<p className="text-[12px] text-gray-500 font-medium">Today&apos;s Sale</p>
					</div>
				</BoxWrapper>
				<BoxWrapper>
					<div className=" flex items-center  justify-center">
						<img src={sales3} alt="" className='h-12 w-12' />
					</div>
					<div className="pl-4">
						<span className="text-[12px] text-gray-500 font-medium">$ 250,423</span>
						<p className="text-[12px] text-gray-500 font-medium">Yearly Total Sales</p>
					</div>
				</BoxWrapper>
				<BoxWrapper>
					<div className=" flex items-center  justify-center">
						<img src={sales1} alt="" className='h-12 w-12' />
					</div>
					<div className="pl-4">
						<span className="text-[12px] text-gray-500 font-medium">$68.9k</span>
						<p className="text-[12px] text-gray-500 font-medium">Net Income</p>
					</div>
				</BoxWrapper>
				<BoxWrapper>
					<div className=" flex items-center  justify-center">
						<img src={sales4} alt="" className='h-12 w-12' />
					</div>
					<div className="pl-4">
						<span className="text-[12px] text-gray-500 font-medium">343</span>
						<p className="text-[12px] text-gray-500 font-medium">Products</p>
					</div>
				</BoxWrapper>
			</div>
			
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
