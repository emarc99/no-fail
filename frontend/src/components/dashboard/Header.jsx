import { Popover, Transition, PopoverPanel, PopoverButton } from '@headlessui/react'
import { HiOutlineSearch, HiOutlineChatAlt } from 'react-icons/hi'
import classNames from 'classnames'
import { Fragment } from 'react'
import bellnotify from "../../assets/bell.svg";

export default function Header() {
	

	return (
		<div className="bg-white h-16 px-8 py-12 flex items-center border-b border-[#F0F1F3] justify-between">
			<div className="relative">
				<HiOutlineSearch fontSize={20} className="text-[#858D9D] absolute top-1/2 left-3 -translate-y-1/2" />
				<input
					type="text"
					placeholder="Search product, supplier, order"
					className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
				/>
			</div>
			<div className="flex items-center gap-2 mr-2">
				<Popover className="relative">
					{({ open }) => (
						<>
							<PopoverButton
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<HiOutlineChatAlt fontSize={24} />
							</PopoverButton>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Messages</strong>
										<div className="mt-2 py-1 text-sm">This is messages panel.</div>
									</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
				<Popover className="relative">
					{({ open }) => (
						<>
							<PopoverButton
								className={classNames(
									open && 'bg-gray-100',
									'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
								)}
							>
								<img src={bellnotify} alt="" className='w-[20px]'/>
							</PopoverButton>
							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
									<div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
										<strong className="text-gray-700 font-medium">Notifications</strong>
										<div className="mt-2 py-1 text-sm">This is notification panel.</div>
									</div>
								</PopoverPanel>
							</Transition>
						</>
					)}
				</Popover>
				
			</div>
		</div>
	)
}
