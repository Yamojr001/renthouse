// FILE: resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.jsx
// This is the final version with the full KYC form.

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    // Add all new fields to the useForm hook
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        nin: user.nin || '',
        dob: user.dob || '',
        nationality: user.nationality || '',
        address_street: user.address_street || '',
        address_city: user.address_city || '',
        address_state: user.address_state || '',
        address_country: user.address_country || '',
        id_type: user.id_type || '',
        id_number: user.id_number || '',
        id_document: null, // For the file input
    });

    const submit = (e) => {
        e.preventDefault();
        // Use post for forms with files, Inertia handles the PATCH method via _method
        post(route('profile.update'), {
            forceFormData: true,
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">KYC / Profile Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile and identity information. This is required for verification.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                {/* --- Personal Details --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div><InputLabel htmlFor="name" value="Full Name" /><TextInput id="name" className="mt-1 block w-full" value={data.name} onChange={(e) => setData('name', e.target.value)} required /></div>
                    <div><InputLabel htmlFor="email" value="Email" /><TextInput id="email" type="email" className="mt-1 block w-full" value={data.email} onChange={(e) => setData('email', e.target.value)} required /></div>
                    <div><InputLabel htmlFor="phone" value="Phone Number" /><TextInput id="phone" type="tel" className="mt-1 block w-full" value={data.phone} onChange={(e) => setData('phone', e.target.value)} /></div>
                    <div><InputLabel htmlFor="dob" value="Date of Birth" /><TextInput id="dob" type="date" className="mt-1 block w-full" value={data.dob} onChange={(e) => setData('dob', e.target.value)} /></div>
                </div>

                {/* --- Address Details --- */}
                <div className="mt-6">
                    <h3 className="text-md font-medium text-gray-800">Address</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="sm:col-span-2"><InputLabel htmlFor="address_street" value="Street Address" /><TextInput id="address_street" className="mt-1 block w-full" value={data.address_street} onChange={(e) => setData('address_street', e.target.value)} /></div>
                        <div><InputLabel htmlFor="address_city" value="City" /><TextInput id="address_city" className="mt-1 block w-full" value={data.address_city} onChange={(e) => setData('address_city', e.target.value)} /></div>
                        <div><InputLabel htmlFor="address_state" value="State / Province" /><TextInput id="address_state" className="mt-1 block w-full" value={data.address_state} onChange={(e) => setData('address_state', e.target.value)} /></div>
                        <div className="sm:col-span-2"><InputLabel htmlFor="address_country" value="Country" /><TextInput id="address_country" className="mt-1 block w-full" value={data.address_country} onChange={(e) => setData('address_country', e.target.value)} /></div>
                    </div>
                </div>

                {/* --- Identity Verification --- */}
                <div className="mt-6">
                     <h3 className="text-md font-medium text-gray-800">Identity Verification</h3>
                     <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <InputLabel htmlFor="id_type" value="ID Type" />
                            <select id="id_type" value={data.id_type} onChange={(e) => setData('id_type', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                                <option value="">Select an ID type</option>
                                <option value="NIN">National Identity Number (NIN)</option>
                                <option value="Passport">Passport</option>
                                <option value="Drivers License">Driver's License</option>
                            </select>
                        </div>
                         <div>
                            <InputLabel htmlFor="id_number" value="ID Number" />
                            <TextInput id="id_number" className="mt-1 block w-full" value={data.id_number} onChange={(e) => setData('id_number', e.target.value)} />
                        </div>
                        <div className="sm:col-span-2">
                             <InputLabel htmlFor="id_document" value="Upload ID Document (PDF, JPG, PNG)" />
                             <input type="file" id="id_document" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" onChange={(e) => setData('id_document', e.target.files[0])} />
                             <InputError className="mt-2" message={errors.id_document} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 mt-6">
                    <PrimaryButton disabled={processing}>Save All Information</PrimaryButton>
                    <Transition show={recentlySuccessful} enter="transition ease-in-out" enterFrom="opacity-0"><p className="text-sm text-gray-600">Saved.</p></Transition>
                </div>
            </form>
        </section>
    );
}