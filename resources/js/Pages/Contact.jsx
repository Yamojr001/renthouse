import React from 'react';
import { motion } from 'framer-motion'; 
import { Mail, Phone, MapPin } from 'lucide-react'; 
import Footer from '@/Components/Footer';
import Logo from '../../images/Logo.png';

const brandOrange = 'bg-[#FF4500]'; 

const ContactUsPage = () => {
  // Animation variant for the main content to fade in
  const mainVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
    
    return (
    <>
    <section className="min-h-screen bg-gray-50 py-24 md:py-32 font-jakartaSans " id='contact'>
        <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center mt-[-50px] mb-7 items-center space-x-[-20px]">
          <img src={Logo} alt="RentHouse Logo" className="h-12 w-20 relative ml-[-30px] " />
          <span className="text-[#222222] text-3xl font-extrabold tracking-tighter">
            RentHouse
          </span>
        </div>
       
                

        {/* Header - Animated Entrance */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={mainVariants}
            className="text-5xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 "
          >
            Contact Us
          </motion.h1>
          
            <div className="flex justify-center mb-6">
            <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }} // Expands to 100px wide
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-orange-500 rounded-full" 
            style={{ maxWidth: '200px' }} // Ensures it doesn't expand past this width if motion fails
            ></motion.div>
            </div>
                             

                  
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={{...mainVariants, transition: { delay: 0.2, duration: 0.8 }}}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
          >
            We're here to help you manage your rentals easier than ever. Send us a message or find our office location below.
          </motion.p>
        </div>


        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 bg-white rounded-2xl shadow-2xl p-6 md:p-12">
            
            {/* 1. Contact Form (Left Side) */}
            <div className="w-full lg:w-7/12">
                <h2 className="text-3xl font-bold text-black mb-6">Register as a Landlord</h2>
                <form className="space-y-6">
                    
                    {/* Input Field Group */}
                    <input 
                        type="text" 
                        placeholder="Your Full Name"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition duration-300"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email Address"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition duration-300"
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition duration-300"
                    />
                    <input 
                        type="text"
                        placeholder="Address"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition duration-300"
                    />
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full px-8 py-4 rounded-xl ${brandOrange} text-white font-bold text-lg shadow-lg hover:bg-[#FF6A1F] transition duration-300 transform hover:scale-[1.01]`}
                    >
                        Submit Message
                    </button>
                </form>
            </div>

            {/* 2. Contact Information & Map (Right Side) */}
            <div className="w-full lg:w-5/12 space-y-8 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-3xl font-bold text-black mb-4">Contact Details</h2>

                {/* Info Items */}
                <div className="space-y-5">
                    <div className="flex items-start">
                        <MapPin size={24} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-gray-800 font-semibold">Our Office</p>
                            <p className="text-gray-600">NO. 97 Nasriyya Plaza, Startup Jigawa, Dutse Jigawa State, Nigeria</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <Phone size={24} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-gray-800 font-semibold">Call Us</p>
                            <p className="text-gray-600">(+234) 903-2266-149</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start">
                        <Mail size={24} className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-gray-800 font-semibold">Email Us</p>
                            <p className="text-gray-600 hover:text-orange-500 transition duration-300 cursor-pointer">startupjigawaltd@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-40 bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                    <MapPin size={50} className="text-gray-500 opacity-50" />
                    <span className="absolute text-sm text-gray-700 font-medium">Jigawa State, Nigeria</span>
                </div>
            </div>

        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactUsPage;