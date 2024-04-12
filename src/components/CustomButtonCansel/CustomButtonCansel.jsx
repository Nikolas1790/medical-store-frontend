import { CustomBtn } from "./CustomButtonCansel.styled";

export default function CustomButtonCansel({ className, label, onClick, icon, width }) {
  return (
    <CustomBtn className={className} onClick={onClick} type="submit" width={width} >
      {label}
    </CustomBtn>
  );
}