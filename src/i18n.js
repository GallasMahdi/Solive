import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: {
      // Existing translations
      "About": "About",
      "Services": "Services",
      "Portfolio": "Portfolio",
      "Contact Us": "Contact Us",
      "Creating Your Perfect": "Creating Your Perfect",
      "Event Day": "Event Day",
      "Transform your dream wedding into reality with our expert planning services. We handle every detail with precision and care, ensuring your special day is exactly as you've always imagined.": "Transform your dream wedding into reality with our expert planning services. We handle every detail with precision and care, ensuring your special day is exactly as you've always imagined.",
      "Schedule Consultation": "Schedule Consultation",
      "Venue Selection": "Venue Selection",
      "Happy Couples": "Happy Couples",
      "Expert Planners": "Expert Planners",
      "Years Experience": "Years Experience",
      
      // Add these missing translations
      "Elegant Ceremonies": "Elegant Ceremonies",
      "Perfect Venues": "Perfect Venues",
      "Beautiful Decorations": "Beautiful Decorations",
      "Memorable Moments": "Memorable Moments",
      "Previous image": "Previous image",
      "Next image": "Next image",
      "Go to image {{number}}": "Go to image {{number}}"
    }
  },
  fr: {
    translation: {
      // Existing translations
      "About": "À propos",
      "Services": "Services",
      "Portfolio": "Portfolio",
      "Contact Us": "Contactez-nous",
      "Creating Your Perfect": "Créer votre parfait",
      "Event Day": "Jour de l'événement",
      "Transform your dream wedding into reality with our expert planning services. We handle every detail with precision and care, ensuring your special day is exactly as you've always imagined.": "Transformez votre mariage de rêve en réalité avec nos services de planification experts. Nous gérons chaque détail avec précision et soin, garantissant que votre journée spéciale soit exactement comme vous l'avez imaginée.",
      "Schedule Consultation": "Planifier une consultation",
      "Venue Selection": "Sélection du lieu",
      "Happy Couples": "Couples heureux",
      "Expert Planners": "Planificateurs experts",
      "Years Experience": "Années d'expérience",
      "Step into the future of automotive luxury at the exclusive Porsche Macan Electric Reveal Event. This one-of-a-kind event brings together the perfect fusion of advanced technology and high-end design, showcasing the innovative features of the Porsche Macan Electric, a bold new step in the world of electric vehicles.": "Entrez dans le futur du luxe automobile lors de l'événement exclusif de révélation de la Porsche Macan Électrique. Cet événement unique réunit la technologie de pointe et un design haut de gamme, mettant en valeur les caractéristiques innovantes de la Porsche Macan Électrique, une nouvelle étape audacieuse dans le monde des véhicules électriques.",
       "Porsche Macan Electric": "Porsche Macan Électrique",
       "Reveal Event": "Événement de révélation",
      "Creating Your Perfect Event Day": "Créer votre jour d'événement parfait",
      "Luxury is in every detail, and perfection is our signature.": "Le luxe est dans chaque détail, et la perfection est notre signature.",
      "we redefine elegance by transforming your vision into an unforgettable masterpiece. With an unwavering commitment to excellence, we create exquisite experiences that reflect your unique story.": "Nous redéfinissons l'élégance en transformant votre vision en chef-d'œuvre inoubliable. Avec un engagement indéfectible envers l'excellence, nous créons des expériences exquises qui reflètent votre histoire unique.",
      "Elevating Dreams into Reality": "Élever les rêves en réalité",
      "At": "Chez",
      "Our team of expert planners and designers meticulously curate every detail, ensuring that your event is not just a celebration, but a work of art. From intimate gatherings to grand celebrations, we bring your dreams to life with unparalleled creativity and precision.":"Notre équipe d'organisateurs et de designers experts s'occupe minutieusement de chaque détail, faisant de votre événement plus qu'une simple célébration, une véritable œuvre d'art. Des réunions intimes aux grandes célébrations, nous donnons vie à vos rêves avec une créativité et une précision inégalées.",
      "Our Strategic Partners": "Nos partenaires stratégiques",
      "Your Dream Wedding, Curated to Perfection": "Votre mariage de rêve, organisé à la perfection",
      "Experience luxury and elegance like never before. Let us craft a breathtaking celebration that tells your unique story.":"Vivez une expérience de luxe et d'élégance inédite. Laissez-nous créer une célébration époustouflante qui racontera votre histoire unique.",
      "Our Last Project":" Notre dernier projet",
      "2k Events is a premier event management company based in the United Arab Emirates and Tunisia, offering top-notch services in wedding planning, decoration, and catering. Specializing in creating memorable events, they provide a wide range of tailored services for weddings, corporate functions, and private celebrations.":"2k Events est une agence événementielle de premier plan basée aux Émirats arabes unis et en Tunisie. Elle propose des services haut de gamme en matière d'organisation, de décoration et de restauration de mariages. Spécialisée dans la création d'événements mémorables, elle propose une large gamme de services sur mesure pour les mariages, les événements d'entreprise et les célébrations privées.",
      // Add these missing translations
      "Elegant Ceremonies": "Cérémonies Élégantes",
      
        "Where": "Là où",
        "Luxury": "le Luxe",
        "Meets": "rencontre",
        "Timeless Elegance": "l'Élégance Intemporelle",
        "Redefining celebrations with unparalleled sophistication.": "Redéfinir l’art de la célébration avec une sophistication inégalée.",
        "Book Your Consultation": "Réserver votre consultation",
        "About Us": "À propos de nous",
      
      
      "Perfect Venues": "Lieux Parfaits",
      "Our Prestigious Services":" Nos Services Prestigieux",
      "Beautiful Decorations": "Belles Décorations",
      "Memorable Moments": "Moments Mémorables",
      "Previous image": "Image précédente",
      "Next image": "Image suivante",
      "Go to image {{number}}": "Image {{number}}"
    }
  }
};

i18n
  .use(LanguageDetector)  // Add this line
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {  // Add these detection options
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    debug: true // Add this to see detailed logs

  });

export default i18n;