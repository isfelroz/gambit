import { resolveHref } from '@/sanity/lib/utils'
import type { MenuItem, HeaderPayload } from '@/types'
import Link from 'next/link'

interface HeaderProps {
	data: HeaderPayload
}
export default function Header(props: HeaderProps) {
	const { data } = props
	const menuItems = data?.menu || ([] as MenuItem[])
	console.log(menuItems)
	return (
		<header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<a href="/" className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="mr-3 h-6 sm:h-9"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							{data.title}
						</span>
					</a>

					<div
						className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2"
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							{menuItems &&
								menuItems.map((menuItem, key) => {
									const href =
										menuItem._type == 'external'
											? menuItem.link
											: resolveHref(menuItem?.reference?._type, menuItem?.reference?.slug)
									if (!href) {
										return null
									}
									return (
										<Link
											key={key}
											className={`text-lg hover:text-black md:text-xl ${
												menuItem?._type === 'home' ? 'font-extrabold text-black' : 'text-gray-600'
											}`}
											href={href}
										>
											{menuItem.label}
										</Link>
									)
								})}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
