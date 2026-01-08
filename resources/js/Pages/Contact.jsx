import { Link, Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Contact({ auth }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <Head title="Renthouse - Find Rentals in Dutse" />

            {/* Main Background Wrapper */}
            <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-orange-500 selection:text-white">

                {/* Navbar */}
                <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold tracking-tight text-orange-600">Renthouse</span>
                    </div>

                    {/* Auth Navigation */}
                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="font-semibold text-gray-600 hover:text-orange-600 transition"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="font-bold text-gray-600 hover:text-orange-600 text-[18px] transition"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className=" sm:inline-block px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-gray-800 transition"
                                >
                                    Sign up 
                                </Link>
                            </>
                        )}
                    </div>
                </nav>

                {/* Hero Section */}
                <main className="flex flex-col items-center justify-center text-center px-6 mt-16 sm:mt-24 max-w-4xl mx-auto">
                    
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge / Tagline */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                                #1 Property Listing in Dutse
                            </span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1 
                            variants={itemVariants} 
                            className="md:text-6xl sm:text-4xl text-4xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
                        >
                            We make managing your rentals <span className="text-orange-600">easier than ever.</span>
                        </motion.h1>

                        {/* Subtext Paragraph */}
                        <motion.p 
                            variants={itemVariants} 
                            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            Find Houses, Shops, and Hotels for Rent in Dutse — Fast & Easy.
                            Your one-stop platform for discovering reliable rentals across Dutse.
                            Search verified listings from trusted property owners and agents, all in one place.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition shadow-lg shadow-orange-500/30"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href={route('register')}
                                    className="px-8 py-4 bg-orange-500 text-white rounded-xl mb-8 font-bold text-lg hover:bg-orange-600 transition shadow-lg shadow-orange-500/30"
                                >
                                    Get Started
                                </Link>
                            )}
                                                            <Link
                                    href={route('register')}
                                    className="px-8 py-4 bg-gray-50 border border-gray-300 text-orange-600 rounded-xl mb-8 font-bold text-lg hover:bg-orange-200 transition"
                                >
                                    Register as a Landord
                                </Link>
                        </motion.div>
                    </motion.div>

                </main>

                {/* Decorative background element (Optional subtle blur) */}
                <div className="fixed top-0 left-0 -z-10 w-full h-full bg-white">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-200/30 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/20 rounded-full blur-[100px]" />
                </div>
            </div>
        </>
    );
}