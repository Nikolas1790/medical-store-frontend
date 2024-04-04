import { FilterIcon } from "components/Utils/utils";
import { CustomBtn } from "./CustomButton.styled";

export default function CustomButton({ className, label, onClick, icon, width }){
  return (
    <CustomBtn className={className} onClick={onClick} type="submit" width={width} >
      {icon && <FilterIcon />} 
      {label}
    </CustomBtn>
  );
};