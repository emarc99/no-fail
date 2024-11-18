import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
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
		key: 'orders',
		label: 'Sales Orders',
		path: 'orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'transactions',
		label: 'Cashflow',
		path: 'cashflow',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'reports',
		label: 'Reports',
		path: 'reports',
		icon: <HiOutlineUsers />
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
