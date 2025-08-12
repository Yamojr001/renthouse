import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { 
    FaTachometerAlt, FaPlusCircle, FaHome, FaCalendarCheck, 
    FaBuilding, FaUserCog, FaSignOutAlt 
} from 'react-icons/fa';

// This is a NavLink component for our sidebar. It receives the full route path.
const SidebarNavLink = ({ href, active, children }) => (
    <Link
        href={href}
        className={`flex items-center p-4 text-base font-normal rounded-lg transition duration-75 group ${
            active ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
        }`}
    >
        {children}
    </Link>
);

export default function SidebarLayout({ user, header, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* --- Off-canvas Sidebar --- */}
            <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:translate-x-0 md:relative`}>
                <div className="flex items-center justify-center h-16 border-b border-gray-700">
                    {/* The Link for the brand logo also needs to use the route() helper */}
                    <Link href={route('dashboard')} className="text-2xl font-bold text-white">RentHouse</Link>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-2">
                    {/* --- THIS IS THE CRITICAL FIX: All hrefs now use route() --- */}
                    <SidebarNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <FaTachometerAlt className="mr-3" /> Dashboard
                    </SidebarNavLink>
                    <SidebarNavLink href={route('properties.index')} active={route().current('properties.index')}>
                        <FaBuilding className="mr-3" /> Properties
                    </SidebarNavLink>

                    {/* --- Landlord Links --- */}
                    {user.role === 'landlord' && (
                        <>
                            <SidebarNavLink href={route('my-properties.index')} active={route().current('my-properties.index')}>
                                <FaHome className="mr-3" /> My Properties
                            </SidebarNavLink>
                            <SidebarNavLink href={route('properties.create')} active={route().current('properties.create')}>
                                <FaPlusCircle className="mr-3" /> Add Property
                            </SidebarNavLink>
                            {/* Example for a future link */}
                            {/* <SidebarNavLink href={route('booking-requests.index')} active={route().current('booking-requests.index')}><FaCalendarCheck className="mr-3" /> Booking Requests</SidebarNavLink> */}
                        </>
                    )}
                    
                    <hr className="my-2 border-gray-600" />
                    
                    <SidebarNavLink href={route('profile.edit')} active={route().current('profile.edit')}>
                        <FaUserCog className="mr-3" /> Profile Settings
                    </SidebarNavLink>
                    <Link href={route('logout')} method="post" as="button" className="w-full text-left flex items-center p-4 text-base font-normal text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white group">
                         <FaSignOutAlt className="mr-3" /> Logout
                    </Link>
                </nav>
            </aside>

            {/* --- Main Content --- */}
            <div className="flex-1 flex flex-col">
                <header className="flex items-center justify-between h-16 bg-white border-b border-gray-200 px-4 md:hidden">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none focus:text-gray-700">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                    <h2 className="text-xl font-semibold">{header}</h2>
                    <div></div> {/* This is a spacer */}
                </header>
                
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}