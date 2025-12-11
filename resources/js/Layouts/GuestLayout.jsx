import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50">
            <div>
                <h1 className='text-3xl lg:text-4xl md:text-4xl m-2 text-orange-500 tracking-tighter font-bold justify-start'>Renthouse</h1>
            </div>

            <div className="w-4/5 sm:max-w-md mt-6 px-6 py-4 border-t-4 border-orange-500 bg-white shadow-2xl overflow-hidden shadow-orange-500/30 rounded-xl sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
