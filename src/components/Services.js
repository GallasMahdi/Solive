import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper, WandSparkles, Diamond, Star } from 'lucide-react'; // Assuming you're using Lucide icons
import { useTranslation } from 'react-i18next';


const Services = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeType, setActiveType] = useState('wedding');
    const {t} = useTranslation();
    const services = [
      
        {
            id: "bvlgari",
            title: "Bvlgari",
           
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762992/bvlgari_qgfej2.mp4",
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348769/DSC08033_rmj5wk.jpg",
            type: "wedding",
            category: "bvlgari",
            description: "Opulent materials and precision craftsmanship create a sensory experience of uncompromising luxury."

        },


        {
            id: "ihg-event-arabie-saoudite",
            title: "IHG Event - Arabie Saoudite",
         
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740354115/a_yrejrq.jpg",
            type: "corporate",
            category: "ihg-event",
            description: "Modern Arabian grandeur infused with sophisticated hospitality for truly memorable corporate gatherings."

        },
        {
            id: "ihg-event-doha",
            title: "IHG Event - Doha",
         
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353855/11-9_fdjlp1.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740757317/IHG_Event-Retif_mrzzj8.mp4",
            type: "corporate",
            category: "ihg-event",
            description: "Qatari-inspired elegance with innovative design elements elevating the corporate experience."

        },
        {
            id: "les-jardins-romains",
            title: "Les Jardins Romains",
          
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155051/1-9_t4rwpc.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692225/JARDIN_D_EDEN_omnefq.mp4",
            type: "wedding",
            category: "mosaique",
            description: "Classical Roman aesthetics reimagined with contemporary sensibilities for a timeless celebration."

        },
        {
            id: "valley-flower",

            title: "Valley Flower",
            
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352399/--11_oll416.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740763886/1reel_meddeb_2k_lgbbhg.mp4",
            type: "wedding",
            category: "valleyflower",
            description: "Sweeping floral landscapes creating a captivating valley of blooms for your extraordinary day."

        },

        {
            id: "shade",
            title: "Shade",
           
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351496/526A1032_afr90p.jpg",

            type: "wedding",
            category: "shade",
            description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

        },
        {
            id: "eden-garden",
            title: "Eden Garden",
          
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-112__dnpw4p.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740764169/videeooo_ez8gb1.mp4",

            type: "wedding",
            category: "eden",
            description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

        },
        {
            id: "Sol & Luna",
            title: "Sol & Luna",
           
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol3_ya8lat.jpg",
            type: "wedding",
            category: "Sol & Luna",
            description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

        },
        {
            id: "GrassLand",
            title: "GrassLand",
        
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611440/pic5_inxg94.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741611305/decor_2_xezkyj.mp4",

            type: "wedding",
            category: "GrassLand",
            description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

        },
        {
            id: "porsche-event",
            title: "Porshe Event",
           
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435837/34-sur-355_zmstii.jpg",
            type: "corporate",
            category: "porsche-event",
            description: "Precision engineering meets exceptional design in our automotive-inspired corporate experiences."

        },
        {
            id: "Jullanar",
            title: "Jullanar",
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741736136/j_f1m8ow.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762495/Morroco_zwhm2u.mp4",
            type: "corporate",
            category: "Jullanar",
            description: "Precision engineering meets exceptional design in our automotive-inspired corporate experiences."

        },
        {
            id: "Golden Minaret",
            title: "Golden Minaret",
            
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490590/IMG-20250225-WA0012_xlf08o.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762495/Morroco_zwhm2u.mp4",
            type: "wedding",
            category: "Golden Minaret",
            description: "A timeless celebration of tradition and grandeur, where heritage and romance shine in perfect harmony."


        },
        {
            id: "singapore",
            title: "Singapour",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692085/singapore_1_rdvr8u.mp4", // Add this line
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740226071/DSC03534_tqnwqw.jpg",
            type: "wedding",
            category: "ceremony",
            description: "Urban elegance meets timeless luxury in our iconic Singapore-inspired celebration settings."

        },
        {
            id: "luxury-jungle", // Already provided
            title: "Luxury Jungle",
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
            type: "wedding",
            category: "jungle",
            description: "Bold tropical elegance merges with refined sophistication in our captivating jungle-inspired designs."

        },
        {
            id: "camellia-flower",
            title: "Camellia  Flower",
        
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740578059/decoration_tamer_hosni_fgwofx.mp4",
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
            type: "wedding",
            category: "full-service",
            description: "Delicate blooms arranged with exquisite artistry to create an atmosphere of subtle, refined romance."

        },
        {
            id: "reflection",
            title: "Reflection",
           
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740763125/burjelarab_f10smw.mp4",
            type: "wedding",
            category: "reflection",
            description: "Mirrored elements create an illusion of endless elegance, amplifying the magic of your celebration."

        },
        {
            id: "Blue-Dream",
            title: "Blue-Dream",
            
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739534/096A3961_mtxcmx.jpg",
            type: "wedding",
            category: "Blue Dream",
            description: "A timeless celebration of tradition and grandeur, where heritage and romance shine in perfect harmony."



        },
        {
            id: "Butterfly",
            title: "Butterfly",
          
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781013/Butterfly_makrem_four_sesonsi0_zj8v3s.jpg",
           
            type: "wedding",
            category: "Butterfly",
            description: "Bold tropical elegance merges with refined sophistication in our captivating jungle-inspired designs."
        },
      
        {
            id: "ihg-kuwait",
            title: "IHG Kuwait",
    
            thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766101/7X7A4723_jvdsgm.jpg",
            video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740839983/KD_2_1_oion50.mp4",
            type: "corporate",
            category: "kuwait",
            description: "Innovative floral designs and advanced event styling, crafted to transform corporate gatherings at IHG Kuwait into sophisticated, visually stunning experiences."

        },


    ];


    return (
        <div id="services" className="my-3 py-0">
            {/* Services Header */}
            <h2 className="my-4 text-center text-4xl text-gray-900 font-serif italic tracking-tight">
                {t('Our Prestigious Services')}
            </h2>
            <div className="flex justify-center">
                <div className="w-36 border-b-8 border-gray-500 transform transition-all duration-700 hover:scale-110"></div>
            </div>

            {/* Luxury Event Type Filter */}
            <div className="flex justify-center mt-10">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2 max-w-2xl w-full mx-4 transform transition-all duration-700 hover:scale-105">
                    <div className="flex flex-col sm:flex-row sm:space-x-3 w-full space-y-4 sm:space-y-0">
                        <button
                            onClick={() => {
                                setActiveType('wedding');
                                setActiveCategory('all');
                            }}
                            className={`flex-1 px-8 py-5 rounded-lg font-serif text-xl tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 ${activeType === 'wedding'
                                ? 'bg-gray-800 text-white shadow-2xl scale-105'
                                : 'bg-white text-gray-800 hover:bg-[#F1F1F1]'}`}
                        >
                            Weddings
                        </button>
                        <button
                            onClick={() => {
                                setActiveType('corporate');
                                setActiveCategory('all');
                            }}
                            className={`flex-1 px-8 py-5 rounded-lg font-serif text-xl tracking-wide transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 ${activeType === 'corporate'
                                ? 'bg-gray-800 text-white shadow-2xl scale-105'
                                : 'bg-white text-gray-800 hover:bg-[#F1F1F1]'}`}
                        >
                            Corporate Events
                        </button>
                    </div>
                </div>
            </div>


            {/* Services Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {services
                    .filter(service => activeType === 'all' || service.type === activeType)
                    .map((service, index) => (
                        <Link
                            to={`/service/${service.id}`}
                            key={index}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
                        >
                            {/* Display only the thumbnailImage */}
                            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
                                {service.thumbnailImage && (
                                    <img
                                        src={service.thumbnailImage}
                                        alt={`${service.title} thumbnail`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 text-center"
                                        loading="lazy"
                                    />
                                )}

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                            </div>

                            {/* Title and description */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                <h3 className="font-serif italic text-xl sm:text-2xl text-white tracking-wider text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {service.title}
                                </h3>

                                <div className="w-12 h-1 bg-pink-200 mt-2 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <p className="text-gray-200 mt-2 sm:mt-3 text-xs sm:text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 line-clamp-2 sm:line-clamp-3">
                                    {service.description || "Elevate your experience with our meticulously crafted service."}
                                </p>

                                {/* Video indicator at the end of the card */}
                                {service.video && (
                                    <div className="flex items-center mt-3 space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-xs text-white font-medium">Watch video</span>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};


export default Services;