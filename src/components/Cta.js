import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Assest17 from '../images/Assest17.svg'; // Background image


const Cta = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full flex items-center justify-center cta"
      style={{
        background: 'linear-gradient(135deg, #fff6e3, #ffffff, #22560120)', // soft cream to white with subtle green overlay
        color: '#000000', // black text for contrast
      }}
    >
      
      <div className="mx-8 w-full h-auto text-center lg:text-left py-16 px-12 flex lg:justify-between items-center">
        <div className="w-full flex flex-col lg:flex-row lg:justify-around">
          {/* Short Story Text */}
          <div className="mb-8 lg:mb-0 max-w-3xl">
            <p className="text-3xl md:text-5xl font-sans mb-6">{t('Why Choose Solivera')}</p>
            <p className="text-lg md:text-xl leading-relaxed">
              {t(
                "Solivera delivers premium olive oil crafted with passion, tradition, and sustainability — bringing the finest flavors straight to your table."
              )}
            </p>
          </div>

          {/* Contact Button */}
          <div className="w-full lg:w-72 pt-6 lg:mx-12 flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="bg-transparent border border-black hover:bg-black hover:text-white text-black justify-center text-center rounded-lg px-10 py-3 flex items-center group"
            >
              {t('Contact')}
              <svg
                className="w-5 h-5 ml-1 group-hover:translate-x-2 duration-500 ease-in"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
