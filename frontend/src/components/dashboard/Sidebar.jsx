import classNames from 'classnames'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineLogout } from 'react-icons/hi'
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants'
import logo from "../../assets/logo.svg";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../constants";


const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 my-1 hover:bg-[#3835ED] hover:no-underline active:bg-[#3835ED] hover:text-white rounded-sm text-base'

export default function Sidebar() {

	const navigate = useNavigate();
	const handleLogout = () => {
	  // Clear tokens from localStorage
	  localStorage.removeItem(ACCESS_TOKEN);
	  localStorage.removeItem(REFRESH_TOKEN);
  
	  // Redirect to login page
	  navigate("/login");
	};


	return (
		<div className="bg-white w-60 pr-10 pl-6 flex flex-col text-[16px] mr-1">
			<a href="/home">
			<div className="flex items-center gap-2 px-1 py-8">
				<img className="h-16 w-12 mr-2" src={logo} alt="Logo" />
                <span className="font-['UNDERRATED'] text-xl font-extrabold">NOFAIL</span>
			</div>
			</a>			
			<h2 className='font-[700] text-[#6C757D] text-[12px]'>GENERAL</h2>
			<div className="py-2 flex flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<h2 className='font-[700] text-[#6C757D] text-[12px] mt-4 mb-2'>SUPPORT</h2>
			<div className="flex flex-col gap-0.5 pt-2">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>


			<button
				onClick={handleLogout}
				className={classNames(
				linkClass,
				"cursor-pointer text-red-500 mt-[8rem] flex items-center gap-2 border-none bg-transparent hover:bg-[#3835ED] hover:text-white"
				)}
					>
				<span className="text-xl">
				<HiOutlineLogout />
				</span>
				Logout
			</button>

			{/* <div className={classNames(linkClass, 'cursor-pointer text-red-500 mt-[8rem]')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
			</div> */}
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	const isActive = pathname === `/dashboard/${link.path}` || pathname === link.path || pathname.startsWith(`/dashboard/${link.path}`);

	return (
		<Link
		to={link.path.startsWith('/') ? link.path : `/dashboard/${link.path}`}
		className={classNames(
		  isActive ? 'bg-[#3835ED] text-white font-[700]' : 'text-[#212529] ',
		  linkClass		)}
		  >
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
