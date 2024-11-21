import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineChartSquareBar,
	HiCash,
	HiTruck,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'inventory',
		label: 'Inventory',
		path: 'inventory',
		icon: <HiOutlineCube />
	},
	{
		key: 'shop',
		label: 'Shop',
		path: 'shop',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'orders',
		label: 'Sales Orders',
		path: 'orders',
		icon: <HiCash />
	},
	{
		key: 'cashflow',
		label: 'Cashflow',
		path: 'cashflow',
		icon: <HiTruck />
	},
	{
		key: 'reports',
		label: 'Reports',
		path: 'reports',
		icon: <HiOutlineChartSquareBar />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'help',
		label: 'Help',
		path: 'help',
		icon: <HiOutlineQuestionMarkCircle />
	},
	{
		key: 'settings',
		label: 'Settings',
		path: 'settings',
		icon: <HiOutlineCog />
	},
]
