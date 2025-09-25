import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const NavLinks = () => {
  const { t } = useTranslation();

  return (
    <>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/#home">
        {t("Home")}
      </HashLink>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/#story">
        {t("Story")}
      </HashLink>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/#products">
        {t("Portfolio")}
      </HashLink>
      <HashLink className="font-serif text-gray-100 hover:text-white text-xl" smooth to="/contact">
        {t("Contact Us")}
      </HashLink>
    </>
  )
}

export default NavLinks;
