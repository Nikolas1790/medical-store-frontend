import Logo from "components/Logo/Logo";
import sprite from '../../img/sprite.svg';
import { BtnLogout, Divider, HeaderBlock, HeaderContainer, HeaderMainInf, HeaderText, HeaderTextBlock, HeaderTitle } from "./Header.styled";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operationsAuth";
import { toast } from "react-toastify";
import Sidebar from "components/Sidebar/Sidebar";
import { getPageName } from "components/Utils/utils";
// import BtnAddEditSuppliers from "components/BtnAddEditSuppliers/BtnAddEditSuppliers";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.auth.user.email); 
  const location = useLocation(); // Получаем текущий путь
  const pageName = getPageName(location.pathname);

  const handleButtonClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/login');
    } catch (error) {
      // console.log(error)
      toast.error("Log out failed. Something went wrong.");
    }
  };  

  return (
    <HeaderContainer>
      <HeaderBlock>
        <Sidebar />

        <Logo />
        <HeaderMainInf>
          <HeaderTitle>Medicine store</HeaderTitle>
          <HeaderTextBlock>
            <HeaderText>{pageName}</HeaderText>
            <Divider />
            <HeaderText>{email}</HeaderText>
          </HeaderTextBlock>
        </HeaderMainInf>
        <BtnLogout onClick={handleButtonClick}>
          <svg width={44} height={44}>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </BtnLogout>
     
      </HeaderBlock>
    </HeaderContainer>
  );
};