import Logo from "components/Logo/Logo";
import sprite from '../../img/sprite.svg';
import { Divider, HeaderBlock, HeaderContainer, HeaderMainInf, HeaderText, HeaderTextBlock, HeaderTitle } from "./Header.styled";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/auth/operationsAuth";
import { toast } from "react-toastify";
import Sidebar from "components/Sidebar/Sidebar";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/login');
    } catch (error) {
      console.log(error)
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
            <HeaderText>Dasboard</HeaderText>
            <Divider />
            <HeaderText>vendor@gmail.com</HeaderText>
          </HeaderTextBlock>
        </HeaderMainInf>

        <button onClick={handleButtonClick}>
          <svg width={44} height={44}>
            <use href={`${sprite}#icon-logout`} />
          </svg>
        </button>

     
      </HeaderBlock>
    </HeaderContainer>
  );
};
