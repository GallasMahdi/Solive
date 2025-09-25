import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import emailjs from '@emailjs/browser';
import Notiflix from 'notiflix';
import { motion } from 'framer-motion';
import { Mail, Phone, Users, MapPin, Building2, Sparkles, ArrowRight, User, Box, Globe } from 'lucide-react';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [country, setCountry] = useState('');
    const [quantity, setQuantity] = useState('');
    const [oilType, setOilType] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);
    const [countryCode, setCountryCode] = useState('+216'); // Default Tunisia

    const countryCodes = [
        { code: '+216', label: '🇹🇳 Tunisia' },
        { code: '+971', label: '🇦🇪 UAE' },
        { code: '+1', label: '🇺🇸 USA / Canada' },
        { code: '+33', label: '🇫🇷 France' },
        { code: '+34', label: '🇪🇸 Spain' },
        // Add more countries as needed
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const clearErrors = () => setErrors([]);
    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setCountry('');
        setQuantity('');
        setOilType('');
        setMessage('');
    };

    const validateForm = () => {
        const newErrors = {};
        if (!firstName.trim()) { newErrors.firstName = 'First name is required'; }
        if (!lastName.trim()) { newErrors.lastName = 'Last name is required'; }
        if (!email.trim()) { newErrors.email = 'Email is required'; }
        if (!phone.trim()) { newErrors.phone = 'Phone number is required'; }
        if (!company.trim()) { newErrors.company = 'Company is required'; }
        if (!country.trim()) { newErrors.country = 'Country is required'; }
        if (!quantity.trim()) { newErrors.quantity = 'Quantity is required'; }
        if (!oilType.trim()) { newErrors.oilType = 'Type of olive oil is required'; }
        if (!message.trim()) { newErrors.message = 'Message is required'; }

        if (Object.keys(newErrors).length > 0) {
            Object.values(newErrors).forEach(err =>
                Notiflix.Notify.failure(err, {
                    position: 'right-top',
                    distance: '30px',
                    fontSize: '18px',
                    width: '400px',
                    cssAnimationStyle: 'zoom',
                    cssAnimationDuration: 400,
                    timeout: 3000,
                    useIcon: true,
                    borderRadius: '12px',
                })
            );
            setErrors(newErrors);
            return false;
        }

        setErrors([]);
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Sending...';

        const templateParams = {
            to_email: 'contact@olivecompany.com',
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            phone_number: countryCode + phone,
            company: company,
            country: country,
            quantity: quantity,
            oil_type: oilType,
            message: message,
            reply_to: email,
        };

        emailjs.send(
            'service_c1xz4dh',
            'template_olive',
            templateParams,
            'user_exampleKey'
        ).then(() => {
            document.getElementById('submitBtn').disabled = false;  
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            clearInput();
            Notiflix.Report.success('Success', 'Your inquiry has been sent!', 'Okay');
        }).catch(() => {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            Notiflix.Report.failure('Error', 'Failed to send your inquiry. Please try again.', 'Okay');
        });
    };

    return (
        <div className="min-h-screen bg-[#fff6e3] text-black overflow-hidden">
            <NavBar />

            <section id="form" className="py-16 sm:py-32 px-4 sm:px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="backdrop-blur-xl bg-white/60 rounded-3xl p-8 sm:p-12 border border-white/10"
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-8 text-center text-black"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Request Your Olive Oil Supply
                        </motion.h2>

                        <form onSubmit={sendEmail} className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className="block text-sm font-medium text-black mb-2">First Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            placeholder="Enter your first name"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                        />
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-black mb-2">Last Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            placeholder="Enter your last name"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                        />
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-black mb-2">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                    />
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                </div>
                            </div>

                            <div className="relative flex">
                                <label className="block text-sm font-medium text-black mb-2 w-full">Phone</label>
                                <div className="relative flex w-full">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="w-24 pl-9 pr-2 py-3 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black appearance-none"
                                    >
                                        {countryCodes.map((c) => (
                                            <option key={c.code} value={c.code}>{c.code}</option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                        placeholder="Enter your phone number"
                                        className="w-full pl-4 pr-4 py-3 bg-white border-l-0 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                    />
                                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className="block text-sm font-medium text-black mb-2">Company</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Company name"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                        />
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-black mb-2">Country</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            placeholder="Country of export"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                        />
                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className="block text-sm font-medium text-black mb-2">Quantity (liters)</label>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            placeholder="Enter quantity"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                        />
                                        <Box className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-sm font-medium text-black mb-2">Olive Oil Type</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={oilType}
                                            onChange={(e) => setOilType(e.target.value)}
                                            placeholder="E.g., Extra Virgin, Virgin"
                                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500"
                                        />
                                        <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium text-black mb-2">Message / Details</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Any additional details..."
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black placeholder-gray-500 min-h-[150px]"
                                />
                            </div>

                            <div className="text-center">
                                <motion.button
                                    type="submit"
                                    id="submitBtn"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg text-white font-medium uppercase tracking-wider hover:from-green-600 hover:to-yellow-600 transition-all"
                                >
                                    Send Inquiry
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
