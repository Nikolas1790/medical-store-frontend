import { FilterIcon } from "components/Utils/utils";
import { CustomBtn } from "./CustomButton.styled";

export default function CustomButton({ className, label, onClick, icon }){
  return (
    <CustomBtn className={className} onClick={onClick} type="submit" >
      {icon && <FilterIcon />} 
      {label}
    </CustomBtn>
  );
};