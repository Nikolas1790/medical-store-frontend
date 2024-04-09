import Logo from "components/Logo/Logo";
import * as Yup from 'yup';
import { Container, ContextContainer, ElementsSvg, EyeSvg, FormContainer, FormConteiner, FormField, FormFieldConteiner, FormFields, LoginContainer, Title, TitleContainer, TitleSpan, WhitePill } from "./LoginAndRegister.styled";
import whitePill from "../../img/whiteRoundPill/white-round-pill.png"
import sprite from '../../img/sprite.svg';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logIn } from "../../redux/auth/operationsAuth";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import CustomButton from "components/CustomButton/CustomButton";

const initialValues = {
  email: '',
  password: '',
};
  
const schema = Yup.object({
  email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(7, "Password must be at least 7 characters"),
});

export default function Login() {  
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  

  const handleSubmit = async (values) => {
    try {
      await dispatch(logIn(values)).unwrap();
      navigate('/dashboard');
    } catch (error) {
      toast.error("Please check the Mail and Password.");
    }    
  }

  return (
    <Container>
      <LoginContainer>
        <ElementsSvg >
          <use href={`${sprite}#icon-elements`} />
        </ElementsSvg>
        <Logo />
        <ContextContainer>
          <TitleContainer>
            <WhitePill src={whitePill} alt="tablet" />
            <Title>Your medication, delivered Say goodbye to all <TitleSpan>your healthcare</TitleSpan> worries with us</Title>
          </TitleContainer>

          <FormContainer>
            <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >
              {({ errors, touched }) => (
                <Form>
                  <FormFields>  
                    <FormConteiner>           
                      <FormFieldConteiner>
                        <FormField 
                          id="email"
                          name="email" 
                          type="email" 
                          placeholder="Email address" 
                          error={errors.email && touched.email ? "true" : "false" } 
                          style={{
                            borderColor: touched.email && errors.email ? "red" : 
                                         touched.email && !errors.email ? "green" : "defaultColor",
                          }}
                        />
                      </FormFieldConteiner>
                        
                      <FormFieldConteiner>
                        <FormField
                         id="password" 
                         name="password" 
                         type={showPassword ? "text" : "password"} 
                         placeholder="Passwor" error={errors.password && touched.password ? "true" : "false"} 
                        
                         style={{
                          borderColor: touched.password && errors.password ? "red" : 
                                       touched.password && !errors.password ? "green" : "defaultColor",
                        }}
                       />

                        {showPassword ? (
                          <EyeSvg width={18} height={18} onMouseDown={(e) => {
                            e.preventDefault(); 
                            togglePasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye`} />
                          </EyeSvg>
                        ) : (
                          <EyeSvg width={18} height={18} onMouseDown={(e) => {
                            e.preventDefault(); 
                            togglePasswordVisibility();
                          }}>
                            <use href={`${sprite}#icon-eye-off`} />
                          </EyeSvg>
                        )}
                      </FormFieldConteiner>
                    </FormConteiner>     
                    <CustomButton label="Log in" />
                  </FormFields>                    
                </Form>
              )}
            </Formik>
          </FormContainer>
        </ContextContainer>
      </LoginContainer>
    </Container>
  );
}