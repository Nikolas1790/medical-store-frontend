import { useLocation } from 'react-router-dom';
import {  LogoAccaunt, LogoImgResricted, LogoLink } from "./Logo.styled";
import { selectToken } from '../../redux/auth/selectorAuth';
import { useSelector } from 'react-redux';

import logoRestricted from '../../img/logo/logo-restricted.png';
import logoRestricted2x from '../../img/logo/logo-restricted@2x.png';
import logoPrivate from '../../img/logo/logo-private.png';
import logoPrivate2x from '../../img/logo/logo-private@2x.png';

export default function Logo() {
  const location = useLocation();
  const page = location.pathname === '/login';
  const isToken = useSelector(selectToken);
  const redirectPath = isToken ? '/dashboard' : '/login';
  
  return (           
    <LogoLink to={redirectPath}>
      {page ? (
        <>
          <picture>
            <source srcSet={`${logoRestricted2x} 2x`}  media="(min-resolution: 192dpi)"  />
            <LogoImgResricted src={logoRestricted} alt="logo" />
          </picture>  
          <p>E-Pharmacy</p>
        </>
      ) : (
        <div>
          <picture>
            <source srcSet={`${logoPrivate2x} 2x`}  media="(min-resolution: 192dpi)"  />
            <LogoAccaunt src={logoPrivate} alt="logo" />
          </picture>  
        </div>
      )}
    </LogoLink > 
  );
};