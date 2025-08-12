// FILE: resources/js/Components/PropertyCard.jsx

import { Link } from '@inertiajs/react';
import { FaBed, FaBath, FaMapMarkerAlt } from 'react-icons/fa';

export default function PropertyCard({ property }) {
    // A placeholder for the favorite button logic
    const handleFavorite = (e) => {
        e.preventDefault();
        alert(`Toggling favorite for property ID: ${property.id}`);
        // Here we will later add the Inertia/AJAX call to a favorite toggle route
    };
    
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <Link href={route('properties.show', property.id)}> {/* We will create this route later */}
                <div className="relative">
                    <img 
                        // A placeholder image logic
                        src={property.image_path || `https://via.placeholder.com/400x300.png?text=${property.title.replace(/\s/g, '+')}`} 
                        alt={property.title} 
                        className="w-full h-56 object-cover" 
                    />
                    {/* Favorite Button */}
                    <button onClick={handleFavorite} className="absolute top-2 right-2 bg-white rounded-full p-2 leading-none">
                        <FaHeart className={property.is_favorited ? 'text-red-500' : 'text-gray-400'} />
                    </button>
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-800 truncate">{property.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                        <FaMapMarkerAlt className="mr-2" />
                        {property.city}, {property.state}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-lg font-extrabold text-blue-600">
                            ${Number(property.price).toLocaleString()}
                            <span className="text-xs font-normal text-gray-500"> / {property.price_period}</span>
                        </p>
                        <div className="flex space-x-4 text-sm text-gray-600">
                            <span className="flex items-center"><FaBed className="mr-1" /> {property.bedrooms}</span>
                            <span className="flex items-center"><FaBath className="mr-1" /> {property.bathrooms}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}