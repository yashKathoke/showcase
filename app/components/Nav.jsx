import Link from "next/link"
import { getServerSession } from "next-auth"
import options from "../api/auth/[...nextauth]/options"
import { UserIcon, HomeIcon, FolderIcon, ArrowRightOnRectangleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

const Nav = async () => {
    const session = await getServerSession(options)

    return (
        <header className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                Yash Kathoke
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <NavLink href="/" icon={<HomeIcon className="h-5 w-5" />}>
                                Home
                            </NavLink>
                            <NavLink href="/projects" icon={<FolderIcon className="h-5 w-5" />}>
                                Projects
                            </NavLink>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        {session ? (
                            <>
                                <span className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Welcome, {session.user.name}
                                </span>
                                <NavLink href="/api/auth/signout?callbackUrl=/" icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}>
                                    Logout
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink href="/login" icon={<ArrowLeftOnRectangleIcon className="h-5 w-5" />}>
                                    Login
                                </NavLink>
                                <NavLink href="/signup" icon={<UserIcon className="h-5 w-5" />}>
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <MobileMenuButton />
                    </div>
                </div>
            </nav>

            <MobileMenu session={session} />
        </header>
    )
}

const NavLink = ({ href, children, icon }) => (
    <Link
        href={href}
        className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition duration-150 ease-in-out"
    >
        {icon}
        <span className="ml-2">{children}</span>
    </Link>
)

const MobileMenuButton = () => (
    <button
        type="button"
        className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-controls="mobile-menu"
        aria-expanded="false"
    >
        <span className="sr-only">Open main menu</span>
        <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    </button>
)

const MobileMenu = ({ session }) => (
    <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/projects">Projects</MobileNavLink>
            {session ? (
                <>
                    <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">
                        Welcome, {session.user.name}
                    </span>
                    <MobileNavLink href="/api/auth/signout?callbackUrl=/">Logout</MobileNavLink>
                </>
            ) : (
                <>
                    <MobileNavLink href="/login">Login</MobileNavLink>
                    <MobileNavLink href="/signup">Sign Up</MobileNavLink>
                </>
            )}
        </div>
    </div>
)

const MobileNavLink = ({ href, children }) => (
    <Link
        href={href}
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    >
        {children}
    </Link>
)

export default Nav

