import Logo from "components/Logo/Logo";
import * as Yup from 'yup';
import { Container, ContextContainer, ElementsSvg, FormContainer, FormConteiner, FormField, FormFieldConteiner, FormFieldLabel, FormFields, LoginContainer, Title, TitleContainer, TitleSpan, WhitePill } from "./RegisterAndLogin.styled";
import whitePill from "../../img/whiteRoundPill/white-round-pill.png"
import sprite from '../../img/sprite.svg';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logIn } from "../../redux/auth/operationsAuth";
import {  Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom";

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
        <ElementsSvg width={464} height={345}>
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
                    <FormFieldLabel htmlFor="email">Email address</FormFieldLabel>
                    <FormField 
                      id="email"
                      name="email" 
                      type="email" 
                      placeholder="nik@google.com" 
                      error={errors.email && touched.email ? "true" : "false" } 
                      paddingleft="53px"
                      style={{
                        borderColor: touched.email && errors.email ? "red" : 
                                     touched.email && !errors.email ? "green" : "defaultColor",
                      }}
                    />
                    {/* {touched.email && (
                      errors.email ? (
                        <TopRightSvg width={20} height={20}>
                          <use href={`${sprite}#icon-pajamas_error`} />
                        </TopRightSvg>
                      ) : (
                        <TopRightSvg width={20} height={20}>
                          <use href={`${sprite}#icon-check-ok`} />
                        </TopRightSvg>
                      )
                    )} */}
                    {/* {touched.email && !errors.email && <SecureMessage>Email is secure</SecureMessage>}
                    <ErrorMessageStyled name="email" component='div' /> */}
                  </FormFieldConteiner>
          
                  <FormFieldConteiner>
                    <FormFieldLabel htmlFor="password">Password</FormFieldLabel>
                    <FormField
                     id="password" 
                     name="password" 
                     type={showPassword ? "text" : "password"} 
                     placeholder="********" error={errors.password && touched.password ? "true" : "false"} 
                     paddingleft="86px"
                     style={{
                      borderColor: touched.password && errors.password ? "red" : 
                                   touched.password && !errors.password ? "green" : "defaultColor",
                    }}
                   />
          
                    {/* {errors.password && touched.password ? (
                      <TopRightSvg width={20} height={20}>
                        <use href={`${sprite}#icon-pajamas_error`} />
                      </TopRightSvg>
                    ) : !errors.password && touched.password ? (
                      <TopRightSvg width={20} height={20}>
                        <use href={`${sprite}#icon-check-ok`} />
                      </TopRightSvg>
                    ) : showPassword ? (
                      <TopRightSvg width={20} height={20} onMouseDown={(e) => {
                        e.preventDefault(); 
                        togglePasswordVisibility();
                      }}>
                        <use href={`${sprite}#icon-eye`} />
                      </TopRightSvg>
                    ) : (
                      <TopRightSvg width={20} height={20} onMouseDown={(e) => {
                        e.preventDefault(); 
                        togglePasswordVisibility();
                      }}>
                        <use href={`${sprite}#icon-eye-off`} />
                      </TopRightSvg>
                    )} */}

                     {/* {touched.password && !errors.password && <SecureMessage>Password is secure</SecureMessage>}
                    <ErrorMessageStyled name="password" component='div' /> */}

                  </FormFieldConteiner>
                </FormConteiner>     

                {/* <SubmitBlockLogin />                     */}
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