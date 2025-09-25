import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import LoadingSpinner from './LoadingSpinner';
import Footer from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Maximize2, X, ChevronLeft, ChevronRight, Menu, ChevronUp, Sparkles } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const videoRef = useRef(null);
    const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const services = [
            {
                id: "singapore",
                title: "Singapour",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828934/BEFORE-SINGAPOUR_v8clvw.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03495_e8qbuw.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484904/DSC03536_yjfi4x.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484901/DSC03506_mcroc7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03510_q8110i.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484917/DSC03547_e5toei.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484899/IMG_5789_m32okx.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740484900/DSC03495_e8qbuw.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692085/singapore_1_rdvr8u.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741562250/singapore_2_scnowd.mp4"
                ],
                description: "Urban elegance meets timeless luxury in our iconic Singapore-inspired celebration settings."
            },
            {
                id: "luxury-jungle",
                title: "Luxury Jungle",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828940/BEFORE-JUNGLE_tljfx9.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350708/6U2A6331_mwnj4t.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800//v1740485067/6U2A6336_jnttus.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350669/6U2A6349_p4yvjg.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350562/6U2A6389_du7zcd.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350616/6U2A6499_wo7l8f.jpg"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350711/6U2A6506_vjbtve.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741829693/jungle_vofikn.mp4",
                type: "wedding",
                category: "wedding",
                description: "Bold tropical elegance merges with refined sophistication in our captivating jungle-inspired designs."
            },
            {
                id: "Butterfly",
                title: "Butterfly",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-BUTTERFLY_hfcck3.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781012/Butterfly_makrem_four_sesonss0_lciiua.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781013/Butterfly_makrem_four_sesons2_olmw0b.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781013/Butterfly_makrem_four_sesonsi0_zj8v3s.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781015/Butterfly_makrem_four_sesonsz1_uytafn.jpg",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741781012/Butterfly_makrem_four_sesonss0_lciiua.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741781023/Butterfly_makrem_four_seasons_vtmax8.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741781033/Butterfly_makrem_four_sesons_lic6r7.mp4"
                ],
                type: "wedding",
                category: "Butterfly",
                description: "Bold tropical elegance merges with refined sophistication in our captivating jungle-inspired designs."
            },
            {
                id: "GrassLand",
                title: "GrassLand",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562397/pict_13_p4beg3.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562378/pict_218_n2t8ze.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562400/pict_245_xlgvf6.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611440/pic5_inxg94.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611439/pic4_uq7vvg.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611440/pic5_inxg94.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741611305/decor_2_xezkyj.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741562494/reeel_couple_gj7eam.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783813/reception_msa5vo.mp4"
                ],

                type: "wedding",
                category: "GrassLand",
                description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

            },
            {
                id: "Blue-Dream",
                title: "Blue-Dream",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828938/BEFORE-BLUE-DREAM_x9sfrh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739539/096A6636_sq1ajs.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739538/096A6545_qm7iol.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739533/096A5200_nffknf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739532/096A4430_upjaqb.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739532/096A4461_ivl1zs.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739532/096A5214_aogbib.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739534/096A3961_mtxcmx.jpg",
                ],
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783565/Blue_Dream_khawla_1_fhmoio.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783610/Blue_Dream_wedding_khawla_2_fkpogn.mp4"
                ],

                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741739534/096A3961_mtxcmx.jpg",
                type: "wedding",
                category: "Blue Dream",
                description: "A timeless celebration of tradition and grandeur, where heritage and romance shine in perfect harmony."
            },

            {
                id: "Sol & Luna",
                title: "Sol & Luna",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828936/BEFORE-SOL-AND-LUNA_qqonwh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565155/sol_edmu3w.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol3_ya8lat.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol5_jh0cfh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol6_n8d84m.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611856/sol4_pt56bm.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741611877/sol2_sfaop9.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565144/sol3_ya8lat.jpg",
                type: "wedding",
                category: "Sol & Luna",
                description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

            },
            {
                id: "camellia-flower",
                title: "Camellia  Flower",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-CAMELIA-FLOWER_yourd4.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239961/096A5602_chdi7e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239954/096A5577_j4x39o.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239953/096A5622_zsrg84.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239902/096A7580_u0rrbt.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5784_hjchor.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5722_xnwe1m.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483899/096A5762_zpbska.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741783875/Shakouch_Image_Camelia_flower13_scywlx.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741783873/Tamer_Image_Camelia_flower136_wh67bh.jpg",


                ],
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740578059/decoration_tamer_hosni_fgwofx.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784046/Camelia_flower_tamerhosni_iznccd.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784028/Camellia_TAMER_xxq9d4.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783995/Camelia_flower_Shakouch_t4nzoh.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741783813/reception_msa5vo.mp4",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740239854/096A5586_wurt3g.jpg",
                type: "wedding",
                category: "full-service",
                description: "Delicate blooms arranged with exquisite artistry to create an atmosphere of subtle, refined romance."

            },
            {
                id: "reflection",
                title: "Reflection",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-REFLECTION_vjaje2.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/DSC01545_znanob.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350903/DSC01713_t49xsp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350983/DSC01581_u00pwf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350915/_86A7357_gyin82.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740350918/DSC01682_kw1vf7.jpg",
                video: [
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740351005/burjelarab_dtwiai.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784789/burj_elarabb_1_jd6gzv.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784772/burj_el_arab_2_fh7vsd.mov",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784699/burj_el_arab_3_kdzvyb.mp4"

                ],
                type: "wedding",
                category: "reflection",
                description: "Mirrored elements create an illusion of endless elegance, amplifying the magic of your celebration."

            },
            {
                id: "bvlgari",
                title: "Bvlgari",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828933/BEFORE-BVLGARY_yuprxc.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348917/DSC09512_ppodvj.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348887/DSC07995_bfohzx.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348885/DSC07946_tll1uh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348864/DSC08202_r1d7wf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348835/DSC07965_shuuwb.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348826/DSC07931_kmknho.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348798/DSC07991_tp5u9i.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348782/DSC09440_e4uxpl.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348769/DSC08033_rmj5wk.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348762/DSC08297_frlcim.jpg"
                ],
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762992/bvlgari_qgfej2.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740691205/bvlgari_2_apukn9.mp4"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740348769/DSC08033_rmj5wk.jpg",
                type: "wedding",
                category: "bvlgari",
                description: "Opulent materials and precision craftsmanship create a sensory experience of uncompromising luxury."

            },


            {
                id: "ihg-event-arabie-saoudite",
                title: "IHG Event - Arabie Saoudite",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397953/ADY00108_itczh3.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397956/ADY00251_r07ngh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397955/ADY00080_ga4hcf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397954/ADY00085_i6i70s.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397953/ADY00092_zwif0q.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740397952/ADY00111_xwua64.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740398194/ADY00244_dmzzqk.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740398194/ADY00216_ngkaji.jpg"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740354115/a_yrejrq.jpg",
                type: "corporate",
                category: "ihg-event",
                description: "Modern Arabian grandeur infused with sophisticated hospitality for truly memorable corporate gatherings."

            },
            {
                id: "ihg-event-doha",
                title: "IHG Event - Doha",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353876/11-48_xqmn0f.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353871/11-135_jr2ret.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353855/11-9_fdjlp1.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353840/11-101_vdontj.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353821/11-69_u3yjme.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353764/11-18_tfjhgi.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353764/11-6_zmlmig.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353759/11-71_brtfof.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353729/11-5_sgzmnr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353712/11-49_fsouhk.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353673/11-39_adiezk.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353638/11-23_mg9car.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353605/11-127_jbp4ss.jpg"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740353855/11-9_fdjlp1.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740757317/IHG_Event-Retif_mrzzj8.mp4",
                type: "corporate",
                category: "ihg-event",
                description: "Qatari-inspired elegance with innovative design elements elevating the corporate experience."

            },
            {
                id: "les-jardins-romains",
                title: "Les Jardins Romains",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828937/BEFORE-JARDIN-ROMAIN_qgokm0.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155051/1-9_t4rwpc.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155035/1-2_ev59ii.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155020/1-3_brr4gk.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155003/1-8_ldhysv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154982/1-4_pe6rov.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154854/1-6_ejxdnd.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154827/1-5_s1kklu.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740154766/1-7_w2jdfb.jpg"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740155051/1-9_t4rwpc.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740692225/JARDIN_D_EDEN_omnefq.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741785066/Jardin_Romain_ox9shj.mp4"
                ],
                type: "wedding",
                category: "mosaique",
                description: "Classical Roman aesthetics reimagined with contemporary sensibilities for a timeless celebration."

            },
            {
                id: "valley-flower",

                title: "Valley Flower",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828937/BEFORE-VALLEY-FOWER_ou4cjp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352397/--3_ysa7yi.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352395/DSC09415_krsd2e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352364/--42_rkvyxa.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352350/--6_igndgp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352344/--13_pslwnf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352343/--27_yhbqht.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352292/--10_ndru9g.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565150/5_rnvwqn.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741563100/4_oardf6.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741563100/3_pnacbt.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741563100/5_ojns9f.jpg",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740352399/--11_oll416.jpg",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741610957/Vid_3_mjwx2i.mov",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741610922/Vid_2_ewyage.mov",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741785131/Valley_flower_deco_222_meddeb_reel_zgxtbw.mov"
                ],
                type: "wedding",
                category: "valleyflower",
                description: "Sweeping floral landscapes creating a captivating valley of blooms for your extraordinary day."

            },


            {
                id: "shade",
                title: "Shade",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828936/BEFORE-SHADE_kc976u.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351496/526A1032_afr90p.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351476/526A1058_lhh4ny.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351476/526A1067_jg3pep.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351368/526A2817_f7mkit.jpg"
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740351496/526A1032_afr90p.jpg",

                type: "wedding",
                category: "shade",
                description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

            },
            {
                id: "eden-garden",
                title: "Eden Garden",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828937/BEFORE-EDEN-GARDEN_bcufdq.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483928/-103__i3cc5e.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483928/-114__amu7uf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483926/-107__aut7jy.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483926/-104__eqa8td.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483925/-100__ikfasm.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-105__hf3giu.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-112__dnpw4p.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-99__aogrbz.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740759870/image00011_dfkiqf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740759881/image00010_lrefgz.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740759881/image00012_lao4kf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562101/545461_xm6css.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562103/545464_o1dshk.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562104/1-756_uockpu.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741562109/545467_u3wzgl.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1741784279/Jardin_d_eden_2_xvh3ch.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1741784277/Jardin_d_eden1_giapnn.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/v1741784275/Jardin_d_eden_3_el4wsw.jpg"

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740483922/-112__dnpw4p.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740764169/videeooo_ez8gb1.mp4",
                type: "wedding",
                category: "eden",
                description: "Sophisticated interplay of light and shadow creating dramatic ambiance and unforgettable moments."

            },
            {
                id: "porsche-event",
                title: "Porshe Event",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/184-sur-355_bqysac.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/290-sur-355_l5fk2q.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779867/11-sur-355_-_1_cxkczv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779868/201-sur-355_q4pad4.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779869/4-sur-355_ypzyer.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779871/323-sur-355_-_2_oykjij.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779871/134-sur-355_etciph.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779872/20-sur-355_mo4pwa.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779875/28-sur-355_cjon9m.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779872/325-sur-355_pdk3td.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779875/225-sur-355_m59gxl.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779876/94-sur-355_bwbarv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779876/26-sur-355_-_1_f3n9br.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741779876/30-sur-355_rdc1ob.jpg",

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740435837/34-sur-355_zmstii.jpg",
                type: "corporate",
                video: ["https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741780060/Porsche_2_uszo3r.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741780836/Porsche_1_h07j71.mp4"
                ],
                category: "porsche-event",
                description: "Precision engineering meets exceptional design in our automotive-inspired corporate experiences."

            },
            {
                id: "Golden Minaret",
                title: "Golden Minaret",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741828938/BEFORE-MOROCCO_dogago.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0010_m0jqtr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490588/IMG-20250225-WA0018_eyjt4p.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490588/IMG-20250225-WA0019_ozaika.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0007_s79i8t.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0020_lg2otd.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0009_ybkrw1.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490589/IMG-20250225-WA0005_llvs7x.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490590/IMG-20250225-WA0012_xlf08o.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490594/IMG-20250225-WA0013_yumikp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490594/IMG-20250225-WA0011_aacq76.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565156/7_epagsi.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565156/2_umnrgf.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565155/9_ucvmjt.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565155/8_eont8i.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565154/14_jhu8aa.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565154/6_gadjfj.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565153/5_syl0z6.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565153/13_f3s6ci.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565153/10_mxwmfr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565152/12_ecotbz.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741565151/11_piirrm.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784335/Morrocco3_rbtdcv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784338/Morrocooo_hb0tcr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784345/Morroco1_wnm5ba.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784342/Morrocoo0_nnl7to.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784346/Morrocoo40_nmiovw.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741784348/Morrocoo0240_mwcxjh.jpg"

                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740490590/IMG-20250225-WA0012_xlf08o.jpg",
                video: [
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740762495/Morroco_zwhm2u.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784449/Morocco_gopro_1_sg12ht.mp4",
                    "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741784387/Drone_jbesy3.mp4",
                ],
                type: "wedding",
                category: "White Rose",
                description: "A timeless celebration of tradition and grandeur, where heritage and romance shine in perfect harmony."


            },
            {
                id: "Jullanar",
                title: "Jullanar",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741736136/j2_e5j1cv.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1741736136/j_f1m8ow.jpg"
                ],
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1741562354/jullanar_qo7mmu.mp4",
                type: "corporate",
                category: "Jullanar",
                description: "Precision engineering meets exceptional design in our automotive-inspired corporate experiences."

            },
            {
                id: "ihg-kuwait",
                title: "IHG Kuwait",
                photos: [
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765431/7X7A4989_lyjxo9.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765466/7X7A4746_hyohld.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765551/7X7A4843_eracgq.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765620/7X7A4741_u5gysl.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765858/7X7A4735_i8z7hh.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765881/7X7A4744_gvssrr.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765892/7X7A5070_bwmtzq.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740765945/7X7A4590_hkdxc5.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766002/7X7A4441_qoqs9o.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766017/7X7A4452_kmfprn.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766073/7X7A4514_skygki.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766091/7X7A4454_lgziy7.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766095/7X7A4465_vxambp.jpg",
                    "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766101/7X7A4723_jvdsgm.jpg",
                ],
                thumbnailImage: "https://res.cloudinary.com/dx5y2bzdq/image/upload/f_auto,q_auto,w_800/v1740766101/7X7A4723_jvdsgm.jpg",
                video: "https://res.cloudinary.com/dx5y2bzdq/video/upload/v1740839983/KD_2_1_oion50.mp4",
                type: "corporate",
                category: "kuwait",
                description: "Innovative floral designs and advanced event styling, crafted to transform corporate gatherings at IHG Kuwait into sophisticated, visually stunning experiences."

            }

        ];

        const foundService = services.find(service => service.id === id);

        if (foundService) {
            // Process the service data before setting it in state
            const processedService = processServiceData(foundService);
            setService(processedService);
            setLoading(false);
        } else {
            // Handle not found
            navigate('/');
        }
    }, [id, navigate]);

    useEffect(() => {
        if (videoRef.current && service.videos && service.videos.length > 0) {
            // Reset video when selected video changes
            videoRef.current.load();
            setIsVideoPlaying(false);
        }
    }, [selectedVideoIndex, service]);

    const openFullScreen = (photo) => {
        const index = service.photos.indexOf(photo);
        setCurrentPhotoIndex(index);
        setSelectedPhoto(photo);
    };

    const navigatePhoto = (direction) => {
        if (!service || !service.photos) return;
        
        let newIndex;
        if (direction === 'next') {
            newIndex = (currentPhotoIndex + 1) % service.photos.length;
        } else {
            newIndex = (currentPhotoIndex - 1 + service.photos.length) % service.photos.length;
        }
        
        setCurrentPhotoIndex(newIndex);
        setSelectedPhoto(service.photos[newIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedPhoto) return;
            
            switch (e.key) {
                case 'ArrowLeft':
                    navigatePhoto('prev');
                    break;
                case 'ArrowRight':
                    navigatePhoto('next');
                    break;
                case 'Escape':
                    closeFullScreen();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhoto, currentPhotoIndex]);

    const processServiceData = (serviceData) => {
        const processed = { ...serviceData };

        // Initialize videos array if it doesn't exist
        if (!processed.videos) {
            processed.videos = [];
        }

        // Handle case where video is a string
        if (typeof processed.video === 'string' && processed.videos.length === 0) {
            processed.videos = [processed.video];
        }

        // Handle case where video is already an array
        if (Array.isArray(processed.video) && processed.videos.length === 0) {
            processed.videos = [...processed.video];
        }

        return processed;
    };

    const toggleVideoPlay = () => {
        if (videoRef.current && service.videos && service.videos.length > 0) {
            // Use a flag to prevent rapid play/pause calls
            if (!isVideoPlaying) {
                // Add a small delay to prevent interruption errors
                setTimeout(() => {
                    if (videoRef.current) {
                        videoRef.current.play()
                            .then(() => {
                                setIsVideoPlaying(true);
                            })
                            .catch(err => {
                                console.error("Video play error:", err);
                                setIsVideoPlaying(false);
                            });
                    }
                }, 50);
            } else {
                videoRef.current.pause();
                setIsVideoPlaying(false);
            }
        }
    };

    const closeFullScreen = () => {
        setSelectedPhoto(null);
    };
    const enterFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.mozRequestFullScreen) {
                videoRef.current.mozRequestFullScreen();
            } else if (videoRef.current.msRequestFullscreen) {
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const getThemeDescription = (theme) => {
        const descriptions = {
            "singapore": {
                title: "Urban Elegance",
                description: "Experience the perfect blend of modern sophistication and Asian heritage. Our Singapore theme brings together sleek urban aesthetics with traditional elements, creating a celebration that's both contemporary and culturally rich.",
                features: [
                    "Modern architectural elements",
                    "Luxurious urban setting",
                    "Asian-inspired decor",
                    "State-of-the-art lighting"
                ]
            },
            "luxury-jungle": {
                title: "Tropical Paradise",
                description: "Immerse yourself in a lush, exotic paradise where nature meets luxury. Our jungle theme transforms any venue into a breathtaking tropical oasis, perfect for those seeking an adventurous yet elegant celebration.",
                features: [
                    "Lush tropical foliage",
                    "Waterfall features",
                    "Exotic floral arrangements",
                    "Natural wood elements"
                ]
            },
            "Butterfly": {
                title: "Ethereal Beauty",
                description: "A delicate and romantic theme inspired by the graceful beauty of butterflies. Perfect for creating a dreamy, magical atmosphere that celebrates love and transformation.",
                features: [
                    "Butterfly-inspired decor",
                    "Soft, flowing fabrics",
                    "Delicate lighting effects",
                    "Floral arrangements"
                ]
            },
            "GrassLand": {
                title: "Natural Elegance",
                description: "Celebrate in harmony with nature. Our GrassLand theme brings the beauty of open spaces indoors, creating a fresh and organic atmosphere that's both sophisticated and natural.",
                features: [
                    "Natural grass elements",
                    "Wooden accents",
                    "Fresh floral arrangements",
                    "Natural lighting"
                ]
            },
            "Blue-Dream": {
                title: "Oceanic Elegance",
                description: "Dive into a world of aquatic elegance. Our Blue Dream theme creates a serene and sophisticated atmosphere inspired by the beauty of the ocean.",
                features: [
                    "Ocean-inspired decor",
                    "Blue lighting effects",
                    "Water features",
                    "Marine elements"
                ]
            },
            "Sol & Luna": {
                title: "Celestial Harmony",
                description: "A celebration of the perfect balance between sun and moon. This theme creates a magical atmosphere that combines warmth and mystery in perfect harmony.",
                features: [
                    "Celestial lighting",
                    "Sun and moon motifs",
                    "Starry night effects",
                    "Dramatic contrasts"
                ]
            },
            "camellia-flower": {
                title: "Floral Elegance",
                description: "A celebration of nature's beauty through the delicate camellia flower. This theme brings sophistication and natural elegance to your special occasion.",
                features: [
                    "Camellia flower arrangements",
                    "Soft color palette",
                    "Natural elements",
                    "Elegant lighting"
                ]
            },
            "reflection": {
                title: "Mirrored Elegance",
                description: "Create a world of infinite beauty with our reflection theme. Perfect for those seeking a modern, sophisticated atmosphere with a touch of magic.",
                features: [
                    "Mirrored surfaces",
                    "Water features",
                    "Modern lighting",
                    "Geometric patterns"
                ]
            },
            "bvlgari": {
                title: "Luxury Redefined",
                description: "Experience the epitome of luxury with our Bvlgari-inspired theme. This sophisticated design brings together Italian elegance and modern luxury.",
                features: [
                    "Luxury materials",
                    "Sophisticated lighting",
                    "High-end decor",
                    "Premium finishes"
                ]
            },
            "ihg-event": {
                title: "Corporate Excellence",
                description: "Professional and sophisticated settings for corporate events. Our IHG theme combines business elegance with modern design elements.",
                features: [
                    "Professional lighting",
                    "Modern decor",
                    "Corporate branding",
                    "State-of-the-art AV"
                ]
            },
            "les-jardins-romains": {
                title: "Roman Gardens",
                description: "Step into the elegance of ancient Rome with our Roman Gardens theme. Perfect for those seeking classical beauty with a modern twist.",
                features: [
                    "Roman architectural elements",
                    "Classical sculptures",
                    "Lush gardens",
                    "Traditional lighting"
                ]
            },
            "valley-flower": {
                title: "Valley of Flowers",
                description: "A celebration of nature's beauty in a valley setting. This theme creates a fresh and vibrant atmosphere perfect for any occasion.",
                features: [
                    "Floral arrangements",
                    "Natural elements",
                    "Soft lighting",
                    "Valley-inspired decor"
                ]
            },
            "shade": {
                title: "Dramatic Contrasts",
                description: "A theme that plays with light and shadow to create dramatic and sophisticated settings. Perfect for those seeking a bold and elegant atmosphere.",
                features: [
                    "Dramatic lighting",
                    "Contrasting elements",
                    "Modern decor",
                    "Geometric patterns"
                ]
            },
            "eden-garden": {
                title: "Garden of Eden",
                description: "Experience paradise on earth with our Garden of Eden theme. A perfect blend of natural beauty and sophisticated design.",
                features: [
                    "Lush gardens",
                    "Water features",
                    "Natural lighting",
                    "Elegant decor"
                ]
            },
            "porsche-event": {
                title: "Automotive Excellence",
                description: "A celebration of automotive luxury and precision. Our Porsche theme brings together speed, elegance, and sophistication.",
                features: [
                    "Automotive elements",
                    "Modern lighting",
                    "Luxury materials",
                    "Dynamic design"
                ]
            },
            "Golden Minaret": {
                title: "Arabian Nights",
                description: "Experience the magic of Arabian nights with our Golden Minaret theme. A perfect blend of traditional elegance and modern luxury.",
                features: [
                    "Arabian decor",
                    "Golden accents",
                    "Traditional lighting",
                    "Luxury materials"
                ]
            }
        };

        return descriptions[theme] || {
            title: "Custom Theme",
            description: "A unique and personalized theme designed specifically for your event.",
            features: [
                "Custom decor",
                "Personalized lighting",
                "Unique elements",
                "Tailored design"
            ]
        };
    };

    if (loading || !service) {
        return (
            <>
                <NavBar />
                <div className="flex justify-center items-center min-h-screen">
                    <LoadingSpinner />
                </div>
            </>
        );
    }

    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
                <AnimatePresence>
                    {loading || !service ? (
                        <div className="flex justify-center items-center min-h-screen">
                            <LoadingSpinner />
                        </div>
                    ) : (
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
                            {/* Hero Section with Parallax Effect - Mobile Responsive */}
                            <motion.div 
                                className="relative h-[40vh] sm:h-[60vh] mb-8 sm:mb-16 rounded-3xl overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm" />
                                <img 
                                    src={service.thumbnailImage} 
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 sm:p-8">
                                    <motion.h1 
                                        className="text-3xl sm:text-5xl md:text-7xl font-serif italic mb-4 sm:mb-6 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {service.title}
                                    </motion.h1>
                                    <motion.p 
                                        className="text-base sm:text-xl max-w-3xl mx-auto text-gray-300 font-medium px-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>
                            </motion.div>

                            {/* Main Content Grid - Mobile Responsive */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                                {/* Left Column - Video Section */}
                                <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                                    {/* Video Player - Mobile Responsive */}
                                    {service.videos && service.videos.length > 0 && (
                                        <motion.div
                                            className="backdrop-blur-xl bg-white/5 rounded-3xl p-4 sm:p-6 border border-white/10"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <div className="relative group w-full">
                                                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                                    <video
                                                        ref={videoRef}
                                                        className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl object-cover"
                                                        controls
                                                        onClick={toggleVideoPlay}
                                                    >
                                                        <source src={service.videos[selectedVideoIndex]} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                    
                                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 rounded-2xl" />
                                                    
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="flex items-center space-x-4">
                                                            <button
                                                                onClick={toggleVideoPlay}
                                                                className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
                                                            >
                                                                {isVideoPlaying ? (
                                                                    <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                                                ) : (
                                                                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                                                )}
                                                            </button>
                                                            <button
                                                                onClick={enterFullScreen}
                                                                className="p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
                                                            >
                                                                <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {service.videos.length > 1 && (
                                                    <div className="flex justify-center mt-4 sm:mt-6 space-x-3 sm:space-x-4">
                                                        {service.videos.map((_, index) => (
                                                            <button
                                                                key={index}
                                                                onClick={() => setSelectedVideoIndex(index)}
                                                                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                                                                    index === selectedVideoIndex
                                                                        ? 'bg-purple-500 scale-125'
                                                                        : 'bg-white/30 hover:bg-white/50'
                                                                }`}
                                                            />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Photo Gallery - Mobile Responsive */}
                                    <motion.div
                                        className="relative bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        {/* Decorative Elements with Animation */}
                                        <motion.div 
                                            className="absolute inset-0"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                        >
                                            <motion.div 
                                                className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-transparent"
                                                initial={{ width: 0 }}
                                                animate={{ width: "50%" }}
                                                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                            />
                                            <motion.div 
                                                className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-l from-blue-500 to-transparent"
                                                initial={{ width: 0 }}
                                                animate={{ width: "50%" }}
                                                transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                                            />
                                            <motion.div 
                                                className="absolute top-0 right-0 w-1 h-1/2 bg-gradient-to-b from-purple-500 to-transparent"
                                                initial={{ height: 0 }}
                                                animate={{ height: "50%" }}
                                                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                            />
                                            <motion.div 
                                                className="absolute bottom-0 left-0 w-1 h-1/2 bg-gradient-to-t from-blue-500 to-transparent"
                                                initial={{ height: 0 }}
                                                animate={{ height: "50%" }}
                                                transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                                            />
                                        </motion.div>

                                        <div className="relative p-4 sm:p-6">
                                            {/* Gallery Header - Mobile Responsive */}
                                            <motion.div 
                                                className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5, duration: 0.6 }}
                                            >
                                                <motion.div 
                                                    className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-0"
                                                    initial={{ x: -20 }}
                                                    animate={{ x: 0 }}
                                                    transition={{ delay: 0.6, duration: 0.6 }}
                                                >
                                                    <motion.div 
                                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
                                                        initial={{ scale: 0, rotate: -180 }}
                                                        animate={{ scale: 1, rotate: 0 }}
                                                        transition={{ delay: 0.7, duration: 0.6, type: "spring", bounce: 0.4 }}
                                                    >
                                                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                                    </motion.div>
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.8, duration: 0.6 }}
                                                    >
                                                        <h2 className="text-2xl sm:text-3xl font-serif italic text-white">
                                                            Photo Gallery
                                                        </h2>
                                                        <p className="text-gray-400 text-xs sm:text-sm">Explore our collection of premium moments</p>
                                                    </motion.div>
                                                </motion.div>
                                                <motion.div 
                                                    className="flex items-center space-x-2 sm:space-x-3"
                                                    initial={{ x: 20 }}
                                                    animate={{ x: 0 }}
                                                    transition={{ delay: 0.9, duration: 0.6 }}
                                                >
                                                    <span className="text-sm text-gray-400">Total Photos</span>
                                                    <motion.span 
                                                        className="px-4 py-2 rounded-full bg-white/5 text-white font-medium border border-white/10"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ delay: 1, duration: 0.6, type: "spring", bounce: 0.4 }}
                                                    >
                                                        {service.photos.length}
                                                    </motion.span>
                                                </motion.div>
                                            </motion.div>
                                            
                                            {/* Gallery Grid with Staggered Animation */}
                                            <motion.div 
                                                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                                                variants={{
                                                    hidden: { opacity: 0 },
                                                    show: {
                                                        opacity: 1,
                                                        transition: {
                                                            staggerChildren: 0.1,
                                                            delayChildren: 0.3
                                                        }
                                                    }
                                                }}
                                                initial="hidden"
                                                animate="show"
                                            >
                                                {service?.photos?.map((photo, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="group relative overflow-hidden rounded-2xl cursor-pointer"
                                                        onClick={() => openFullScreen(photo)}
                                                        variants={{
                                                            hidden: { opacity: 0, y: 20 },
                                                            show: { opacity: 1, y: 0 }
                                                        }}
                                                        whileHover={{ 
                                                            scale: 1.02,
                                                            transition: { duration: 0.3 }
                                                        }}
                                                    >
                                                        <motion.div 
                                                            className="aspect-[16/9] w-full"
                                                            whileHover={{ scale: 1.1 }}
                                                            transition={{ duration: 0.5 }}
                                                        >
                                                            <img
                                                                src={photo}
                                                                alt={`${service.title} - Photo ${index + 1}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </motion.div>
                                                        
                                                        {/* Photo Overlay with Animation */}
                                                        <motion.div 
                                                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                                                            initial={{ opacity: 0 }}
                                                            whileHover={{ opacity: 1 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <motion.div 
                                                                className="absolute bottom-0 left-0 right-0 p-6"
                                                                initial={{ y: 20 }}
                                                                whileHover={{ y: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <div className="flex items-center justify-between">
                                                                    <motion.div 
                                                                        className="space-y-2"
                                                                        initial={{ x: -20 }}
                                                                        whileHover={{ x: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <div className="flex items-center space-x-2">
                                                                            <motion.div 
                                                                                className="w-2 h-2 rounded-full bg-purple-500"
                                                                                initial={{ scale: 0 }}
                                                                                whileHover={{ scale: 1 }}
                                                                                transition={{ duration: 0.3 }}
                                                                            />
                                                                            <span className="text-white font-medium text-lg">
                                                                                Photo {index + 1}
                                                                            </span>
                                                                        </div>
                                                                        <span className="text-gray-300 text-sm block">
                                                                            Click to view full size
                                                                        </span>
                                                                    </motion.div>
                                                                    <motion.div 
                                                                        className="flex items-center space-x-3"
                                                                        initial={{ x: 20 }}
                                                                        whileHover={{ x: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                    >
                                                                        <motion.span 
                                                                            className="px-4 py-2 rounded-full bg-white/10 text-white text-sm flex items-center space-x-2 border border-white/20"
                                                                            whileHover={{ 
                                                                                scale: 1.05,
                                                                                backgroundColor: "rgba(255, 255, 255, 0.2)"
                                                                            }}
                                                                            transition={{ duration: 0.3 }}
                                                                        >
                                                                            <Maximize2 className="w-4 h-4" />
                                                                            <span>View</span>
                                                                        </motion.span>
                                                                    </motion.div>
                                                                </div>
                                                            </motion.div>
                                                        </motion.div>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right Column - Service Details */}
                                <div className="space-y-8">
                                    {/* Service Info Card */}
                                    <motion.div
                                        className="backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 }}
                                    >
                                        <h3 className="text-xl font-serif italic text-white mb-4">Service Details</h3>
                                        <div className="space-y-6">
                                            <div className="flex items-center space-x-3">
                                                <Sparkles className="w-5 h-5 text-purple-400" />
                                                <span className="text-gray-300">Type: {service.type}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Sparkles className="w-5 h-5 text-purple-400" />
                                                <span className="text-gray-300">Category: {service.category}</span>
                                            </div>
                                            
                                            {getThemeDescription(service.id) && (
                                                <div className="mt-6 space-y-4">
                                                    <h4 className="text-lg font-medium text-white">{getThemeDescription(service.id).title}</h4>
                                                    <p className="text-gray-300">{getThemeDescription(service.id).description}</p>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                                        {getThemeDescription(service.id).features.map((feature, index) => (
                                                            <div key={index} className="flex items-center space-x-2">
                                                                <Sparkles className="w-4 h-4 text-purple-400" />
                                                                <span className="text-gray-300">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Contact Section */}
                                    <motion.div
                                        className="backdrop-blur-xl bg-white/5 rounded-3xl p-6 border border-white/10"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 }}
                                    >
                                        <h3 className="text-xl font-serif italic text-white mb-4">Interested?</h3>
                                        <p className="text-gray-300 mb-4">
                                            Contact us to learn more about this service and how we can make your event extraordinary.
                                        </p>
                                        <button
                                            onClick={() => navigate('/contact')}
                                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                                        >
                                            Get in Touch
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    )}
                </AnimatePresence>

                {/* Full Screen Photo Viewer with Enhanced Animations */}
                <AnimatePresence>
                    {selectedPhoto && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    closeFullScreen();
                                }
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                {/* Decorative Elements with Animation */}
                                <motion.div 
                                    className="absolute inset-0"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <motion.div 
                                        className="absolute top-0 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-transparent"
                                        initial={{ width: 0 }}
                                        animate={{ width: "50%" }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                    />
                                    <motion.div 
                                        className="absolute bottom-0 right-0 w-1/2 h-1 bg-gradient-to-l from-blue-500 to-transparent"
                                        initial={{ width: 0 }}
                                        animate={{ width: "50%" }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                    />
                                </motion.div>

                                <motion.div 
                                    className="relative w-full h-full flex items-center justify-center"
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.img
                                        src={selectedPhoto}
                                        alt="Full Screen"
                                        className="max-w-full max-h-full object-contain"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    
                                    {/* Navigation Buttons with Enhanced Animations */}
                                    <motion.div 
                                        className="absolute inset-0 flex items-center justify-between px-12"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                    >
                                        <motion.button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigatePhoto('prev');
                                            }}
                                            className="p-4 rounded-full bg-white/10 border border-white/20 group"
                                            whileHover={{ 
                                                scale: 1.1,
                                                backgroundColor: "rgba(255, 255, 255, 0.2)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronLeft className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
                                        </motion.button>
                                        
                                        <motion.button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigatePhoto('next');
                                            }}
                                            className="p-4 rounded-full bg-white/10 border border-white/20 group"
                                            whileHover={{ 
                                                scale: 1.1,
                                                backgroundColor: "rgba(255, 255, 255, 0.2)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ChevronRight className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                                        </motion.button>
                                    </motion.div>

                                    {/* Top Controls with Animation */}
                                    <motion.div 
                                        className="absolute top-6 right-6 flex items-center space-x-4"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4, duration: 0.5 }}
                                    >
                                        <motion.div 
                                            className="px-6 py-3 rounded-full bg-black/50 text-white text-lg border border-white/10"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {currentPhotoIndex + 1} / {service.photos.length}
                                        </motion.div>
                                        <motion.button
                                            onClick={closeFullScreen}
                                            className="p-3 rounded-full bg-white/10 border border-white/20"
                                            whileHover={{ 
                                                scale: 1.1,
                                                backgroundColor: "rgba(255, 255, 255, 0.2)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6 text-white" />
                                        </motion.button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll to Top Button */}
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="fixed bottom-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
                        >
                            <ChevronUp className="w-6 h-6 text-white" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
            <Footer />
        </>
    );
};

export default ServiceDetail;