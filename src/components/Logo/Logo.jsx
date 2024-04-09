import { useLocation } from 'react-router-dom';
import {  LogoAccaunt, LogoImgResricted, LogoLink } from "./Logo.styled";
import logoPrivate from "../../img/logo/logo-private.png"
import logoRestricted from "../../img/logo/logo-restricted.png"
import { selectToken } from '../../redux/auth/selectorAuth';
import { useSelector } from 'react-redux';

export default function Logo() {
  const location = useLocation();
  const page = location.pathname === '/login';
  const isToken = useSelector(selectToken);
  const redirectPath = isToken ? '/dashboard' : '/login';
  
  return (           
    <LogoLink to={redirectPath}>
      {page ? (
        <>
          <LogoImgResricted src={logoRestricted} alt="logo" />
          <p>E-Pharmacy</p>
        </>
      ) : (
        <div>
          <LogoAccaunt src={logoPrivate} alt="logo" />
        </div>
      )}
    </LogoLink > 
  );
};