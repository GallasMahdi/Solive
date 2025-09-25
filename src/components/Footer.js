import { FileDown } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import LogoWhite from '../images/LogoWhite.svg'; // Make sure the path is correct

const Footer = () => {
    return (
        <footer className="bg-[#272e02] text-white py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

                    {/* Logo Block */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={LogoWhite} alt="Logo" className="h-16 object-contain mb-3"/>

                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            <Link to="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                                <FaInstagram size={18} />
                            </Link>
                            <Link to="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                                <FaFacebook size={18} />
                            </Link>
                            <Link to="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                                <FaTwitter size={18} />
                            </Link>
                            <Link to="#" className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110">
                                <FaLinkedin size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col">
                        <h6 className="text-white font-semibold text-md mb-2 uppercase tracking-wider">Quick Links</h6>
                        <ul className="space-y-1">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-all duration-300 text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/story" className="text-gray-300 hover:text-white transition-all duration-300 text-sm">
                                    Story
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-300 hover:text-white transition-all duration-300 text-sm">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information + Map */}
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="flex-1 space-y-1 text-gray-300 text-xs mb-3 md:mb-0">
                            <p>Huilerie Chelbi de Huile dʼOlive</p>
                            <p>Sisseb, Kairouan – Tunisia</p>
                            <p>Phone: +216 21 226 653</p>
                            <p>Email: <a href="mailto:huileriechelbi@gmail.com" className="hover:text-white">huileriechelbi@gmail.com</a></p>
                        </div>

                        {/* Google Map */}
                        <div className="flex-1 w-full h-32 rounded-lg overflow-hidden shadow-lg border border-[#1b4600] hover:border-[#1f5800] transition-all duration-300 mt-3 md:mt-0 md:ml-4">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.409066121721!2d10.0786!3d35.6746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125ed43955c70d3b%3A0x2f13b3aa3d5c7fbc!2sHuilerie%20Chelbi!5e0!3m2!1sen!2stn!4v1690000000000!5m2!1sen!2stn"
                                loading="lazy"
                                title="Map location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* PDF Download Section */}
                <div className="mt-6 border-t border-[#1b4600] pt-4 text-center">
                    <a
                        href="/2kpd.pdf"
                        download="2k-Brochure.pdf"
                        className="inline-flex items-center px-3 py-1.5 bg-[#1b4600] hover:bg-[#1f5800] rounded-lg text-xs font-medium transition-all duration-300 group shadow-md hover:shadow-lg"
                    >
                        <FileDown
                            size={16}
                            className="mr-2 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                        Download Brochure
                    </a>
                </div>

                {/* Bottom Section */}
                <div className="mt-4 border-t border-[#1b4600] pt-2 flex flex-col-reverse md:flex-row items-center justify-between gap-2">
                    <p className="text-gray-400 text-xs tracking-wide">
                        © {new Date().getFullYear()} Huilerie Chelbi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
