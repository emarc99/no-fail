import { Menu, Transition, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import avatar from "../assets/avatar.png";
import dots from "../assets/icon-wrapper-h.svg";
import pc from "../assets/macbk.png";
import iphone from "../assets/iphone.png";
// import hit from "../assets/hitbox.svg";
import product from "../assets/product.svg";
import supplier from "../assets/supplier.svg";
import exportp from "../assets/export.svg";


export default function Rightbar() {
    const navigate = useNavigate()


	return (
		<div className="w-80  ml-4 flex flex-col text-[16px] ">
            <div className='bg-white flex justify-between items-center pl-10 mb-2 pb-2 pr-5'>
                <div className="flex py-4">
                    <Menu as="div" className="relative">
                        <div>
                            <MenuButton className="flex text-sm focus:outline-none">
                                <span className="sr-only">Open user menu</span>
                                <img src={avatar} alt="" className='w-12' />
                            </MenuButton>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem>
                                    {({ active }) => (
                                        <div
                                            onClick={() => navigate('/profile')}
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        >
                                            Your Profile
                                        </div>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <div
                                            onClick={() => navigate('/settings')}
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        >
                                            Settings
                                        </div>
                                    )}
                                </MenuItem>
                                <MenuItem>
                                    {({ active }) => (
                                        <div
                                            className={classNames(
                                                active && 'bg-gray-100',
                                                'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                            )}
                                        >
                                            Sign out
                                        </div>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Transition>
                    </Menu>
                    <div className="flex ml-3">
                        <p className='text-[16px] font-medium'>
                        Business Name
                        <span className='text-[12px] font-medium text-[#5C6F88] block'>Admin</span>
                        </p>
                    </div>
                </div>
                <img src={dots} alt="" className='w-[34px] py-[8px] px-2 border-[#CED4DA] border rounded-md'/>
            </div>

            <div className='pt-6 pl-11 bg-white pr-6 mb-2 text-[16px] font-medium'>
                <p className='mb-3'>Quick Actions</p>
                <div className='flex justify-between pb-3 text-[#5C6F88]'>
                    <div className='flex flex-col gap-y-4'>  
                        <div className='flex'><img src={product} alt="" className='mr-3'/> <a href="">Add Product</a></div> 
                        <div className='flex'><img src={supplier} alt="" className='mr-3'/> <a href="">Add Supplier</a></div> 
                        <div className='flex'><img src={exportp} alt="" className='mr-3'/> <a href="">Export</a></div>
                    </div>
                    <div className='text-[12px]'>
                        <p>ctrl + p</p>
                        <p>ctrl + q</p>
                        <p>ctrl + s</p>
                    </div>
                </div>
            </div>

            <div className='pt-6 pl-11 bg-white pr-6 text-[12px] font-medium'>
                <p className='mb-6  text-[16px]'>Recent Activity</p>
                <div className='flex flex-col justify-between items-start pb-3 gap-y-4 text-[#5C6F88]'>   
                    <p className='mb-3 text-[12px] font-medium'>Restocked 6 Products</p> 
                    <div className='flex items-center  gap-x-2 text-[10px] font-[400] w-full justify-start '>
                        <img src={pc} alt="" /> <a href="#">  Macbook Pro</a> 
                        <p className='self-center justify-self-end'>       -      1 m ago</p>
                    </div>
                    <p className='mb-3 text-[12px] font-medium'>Restocked 6 Products</p>
                    <div className='flex items-center gap-x-2 text-[10px] font-[400]'>
                        <img src={iphone} alt="" /> <a href="#">  Iphone 14 pro</a>
                        <p className='self-center justify-self-end'>       -      12 m ago</p>
                    </div>
                    <p className='mb-3 text-[12px] font-medium'>Restocked 6 Products</p>
                    <div className='flex items-center gap-x-2 text-[10px] font-[400]'>
                        <img src={pc} alt="" /> <a href="#">  Zoom75</a>
                        <p className='self-center justify-self-end'>       -      23 m ago</p>
                    </div>
                    <p className='mb-3 text-[12px] font-medium'>Restocked 6 Products</p>
                    <div className='flex items-center gap-x-2 text-[10px] font-[400]'>
                        <img src={pc} alt="" /> <a href="#">  Airpods Pro</a>
                        <p className='self-center justify-self-end'>       -      53 m ago</p>
                    </div>
                    <p className='mb-3 text-[12px] font-medium'>Restocked 6 Products</p>
                    <div className='flex items-center gap-x-2 mb-6 text-[10px] font-[400]'>
                        <img src={pc} alt="" /> <a href="#">  Samsung Galaxy Fold</a>
                        <p className='self-center justify-self-end'>       -      1 h ago</p>
                    </div>
                </div>
            </div>

        </div>

    )
}