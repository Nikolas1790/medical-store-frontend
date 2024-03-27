import { CustomBtn } from "./CustomButton.styled";

export default function CustomButton({ className, label, onClick }){
  return (
    <CustomBtn className={className} onClick={onClick} type="submit" >
      {label}
    </CustomBtn>
  );
};