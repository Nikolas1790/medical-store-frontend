import CustomButton from "components/CustomButton/CustomButton";
import CustomButtonCansel from "components/CustomButtonCansel/CustomButtonCansel";
import { BtnConteiner, ClosingSymbol, ConteinerClarifyingGuestion, ProductText } from "./ModalClarifyingQuestion.style";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operationsAuth";
import { useNavigate } from "react-router-dom";
import sprite from '../../img/sprite.svg';
import { toast } from "react-toastify";
import { deleteProduct } from "../../redux/ePharmacy/operations";

export default function ModalClarifyingGuestion ({ closeModals, item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = item?.[5];
  const product = item?.[0];

// console.log(item?.[0])
  const dellItem = () => {
    dispatch(deleteProduct(id))
  };  

  const handleButtonClick = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate('/login');
    } catch (error) {
      toast.error("Log out failed. Something went wrong.");
    }
  };  

  return (
    <ConteinerClarifyingGuestion >
      <ClosingSymbol onClick={closeModals}>
        <svg width={26} height={26}>
          <use href={`${sprite}#icon-x`} />
        </svg>   
      </ClosingSymbol>
      {item ? <h2>Delete product</h2> : <h2>Log out</h2>}
    
      <div>
        {item ? <p>Are you sure you want to delete <ProductText>{product}</ProductText>?</p> : <p>Do you really want to leave?</p>}
   
        <BtnConteiner>
          <CustomButton width="163px" label={item ? "Delete" : "Logout"}  type='submit' onClick={item ? dellItem : handleButtonClick}/>
          <CustomButtonCansel width="163px" label="Cansel" onClick={closeModals} />        
        </BtnConteiner>
      </div>
    </ConteinerClarifyingGuestion>
  );
};