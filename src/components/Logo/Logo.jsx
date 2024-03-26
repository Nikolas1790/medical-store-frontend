import { useLocation } from 'react-router-dom';
import {  LogoImgResricted, LogoLink } from "./Logo.styled";
import logoPrivate from "../../img/logo/logo-private.png"
import logoRestricted from "../../img/logo/logo-restricted.png"

export default function Logo() {
  const location = useLocation();
  const page = location.pathname === '/login';
  // console.log(location.pathname)
  return (           
    <LogoLink  to="/login">
      {page ? (
        <>
          <LogoImgResricted src={logoRestricted} alt="logo" />
          <p>E-Pharmacy</p>
        </>
      ) : (
        <div>
          <img src={logoPrivate} alt="logo" />
        </div>
      )}

    </LogoLink > 
  );
};
