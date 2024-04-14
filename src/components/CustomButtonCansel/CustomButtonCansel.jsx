import { CustomBtn } from "./CustomButtonCansel.styled";

export default function CustomButtonCansel({ className, label, onClick, width }) {
  return (
    <CustomBtn className={className} onClick={onClick} type="submit" width={width} >
      {label}
    </CustomBtn>
  );
}