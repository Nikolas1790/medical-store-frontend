import {  Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import sprite from '../../img/sprite.svg';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operationsAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Container, ContextContainer, ElementsSvg, EyeSvg, FormConteiner, FormField, FormFieldConteiner, FormFields, LoginContainer, Title, TitleContainer, TitleSpan, WhitePill } from './LoginAndRegister.styled';
import Logo from 'components/Logo/Logo';
import whiteRoundPill from '../../img/whiteRoundPill/white-round-pill.png';
import whiteRoundPill2x from '../../img/whiteRoundPill/white-round-pill@2x.png';
import CustomButton from 'components/CustomButton/CustomButton';

const initialValues = {
  name: '',
  email: '',
  password: '',
};
  
const schema = Yup.object({
  name: Yup.string().required('Required').min(2, "The name must have at least 2 letters"),
  email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address').required('Required'),
  password: Yup.string().required('Required').min(7, "Password must be at least 7 characters"),
});





export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };  
  
  const handleSubmit = async (values) => {
    try {
      await dispatch(register(values)).unwrap();
      navigate('/recommended');
    } catch (error) {
      if (error === "Request failed with status code 409") {
        toast.error("User with this email already exists.");
      } else {
        toast.error("Registration failed. Please try again later.");
      }
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
          <picture>
            <source srcSet={`${whiteRoundPill2x} 2x`}  media="(min-resolution: 192dpi)"  />
            <WhitePill src={whiteRoundPill} alt="logo" />
          </picture> 
            <Title>Your medication, delivered Say goodbye to all <TitleSpan>your healthcare</TitleSpan> worries with us</Title>
          </TitleContainer>

        <Formik  initialValues = {initialValues} validationSchema={schema} onSubmit={handleSubmit} >
          {({ errors, touched }) => (
            <Form>
              <FormFields>  
                <FormConteiner>  

                  <FormFieldConteiner>
                    <FormField
                      id="name" 
                      name="name" 
                      type="name" 
                      placeholder="Nik Ovson" 
                      error={errors.name && touched.name ? "true" : "false" } 
                      paddingleft="65px"
                      style={{
                        borderColor: touched.name && errors.name ? "red" : 
                                     touched.name && !errors.name ? "green" : "defaultColor",
                      }}
                    />
                      {/* {touched.name && (
                        errors.name ? (
                          <TopRightSvg width={20} height={20}>
                            <use href={`${sprite}#icon-pajamas_error`} />
                          </TopRightSvg>
                        ) : (
                          <TopRightSvg width={20} height={20}>
                            <use href={`${sprite}#icon-check-ok`} />
                          </TopRightSvg>
                        )
                      )}
                     {touched.name && !errors.name && <SecureMessage>Name is secure</SecureMessage>}
                    <ErrorMessageStyled name="name" component='div' /> */}
                  </FormFieldConteiner>
                    
                  <FormFieldConteiner>
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
                      )}
                     {touched.email && !errors.email && <SecureMessage>Email is secure</SecureMessage>}
                    <ErrorMessageStyled name="email" component='div' /> */}
                  </FormFieldConteiner>
          
                  <FormFieldConteiner>
                    <FormField 
                      id="password" 
                      name="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="********" 
                      paddingleft="86px"
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
                    )}

                     {touched.password && !errors.password && <SecureMessage>Password is secure</SecureMessage>}
                    <ErrorMessageStyled name="password" component='div'/> */}

                  </FormFieldConteiner>

                </FormConteiner>     
                <CustomButton label="Register" />
              </FormFields>                    
            </Form>
          )}
        </Formik>
        </ContextContainer>
      </LoginContainer>
    </Container>
  );
}