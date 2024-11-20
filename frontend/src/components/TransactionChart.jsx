import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		"Stock Out": 4000,
		"Stock In": 2400
	},
	{
		name: 'Feb',
		"Stock Out": 3000,
		"Stock In": 1398
	},
	{
		name: 'Mar',
		"Stock Out": 2000,
		"Stock In": 9800
	},
	{
		name: 'Apr',
		"Stock Out": 2780,
		"Stock In": 3908
	},
	{
		name: 'May',
		"Stock Out": 1890,
		"Stock In": 4800
	},
	{
		name: 'Jun',
		"Stock Out": 2390,
		"Stock In": 3800
	},
	{
		name: 'July',
		"Stock Out": 3490,
		"Stock In": 4300
	},
	{
		name: 'Aug',
		"Stock Out": 2000,
		"Stock In": 9800
	},
	{
		name: 'Sep',
		"Stock Out": 2780,
		"Stock In": 3908
	},
	{
		name: 'Oct',
		"Stock Out": 1890,
		"Stock In": 4800
	},
	{
		name: 'Nov',
		"Stock Out": 2390,
		"Stock In": 3800
	},
	{
		name: 'Dec',
		"Stock Out": 3490,
		"Stock In": 4300
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[25rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1 w-full">
			<strong className="text-gray-700 font-medium pl-3 py-4">Stock Report</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={800}
						height={500}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Stock In" fill="#04B4FC" />
						<Bar dataKey="Stock Out" fill="#6C11D9" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
