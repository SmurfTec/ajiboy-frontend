import React, { useEffect, useMemo, useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress,
} from '@material-ui/core';

import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './AuthStyles';
import useStyles from 'styles/commonStyles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import UseToggle from 'hooks/useToggleInput';
import ConfirmDialogBox from 'Dialogs/ConfirmDialogBox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, socialLogin } from 'store/slices/Auth/extraReducers';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const SignUp = () => {
  const classes_g = useStyles();
  const classes = styles();
  const [isCancelOpen, toggleCancelOpen] = UseToggle(false);
  const [showPass, togglePass] = UseToggle(true);
  const [code, setCode] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const parsedQuery = useMemo(() => {
    return queryString.parse(location.search);
  }, [location.search]);
  console.log('parsedQuery', parsedQuery);

  useEffect(() => {
    if (parsedQuery) {
      setCode(parsedQuery.code);
    }
  }, [parsedQuery]);

  const responseGoogle = async (response) => {
    console.log(response);
    if (response.error) return;
    const { name, email, imageUrl } = response.profileObj;
    console.log(`email`, email);

    dispatch(
      socialLogin({
        name,
        email,
        socialType: 'google',
        photo: imageUrl,
      })
    );
  };

  const { isLoggedIn, loading } = useSelector((st) => st.auth);

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email()
      .required('email is required'),
    password: yup
      .string(' Enter your password')
      .min(8)
      .required('password is required'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: validationSchema,

    validateOnChange: true, //*  validate the field onChange
    validateOnBlur: false, //*  will give the accurate error

    onSubmit: (values) => {
      formik.setSubmitting(true);
      // setTimeout(() => {
      //   formik.resetForm();
      // }, 10000);
    },
  });
  const handleFormikChange = (e) => {
    formik.handleChange(e);
    formik.handleBlur(e);
  };

  const handleSubmit = () => {
    const { email, password, passwordConfirm } = formik.values;
    dispatch(signUp({ email, password, passwordConfirm, code }));
    toggleCancelOpen();
  };

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  const handleClickShowPassword = () => {
    // console.log('showPass', showPass);
    togglePass();
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Box className={classes.body}>
        <Box className={classes.inputs}>
          <TextField
            id='outlined-basic'
            placeholder='Enter Your email address'
            variant='outlined'
            type='email'
            name='email'
            value={formik.values.email}
            onChange={handleFormikChange}
            error={
              formik.touched.email && Boolean(formik.errors.email)
            }
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    edge='end'
                  >
                    {formik.values.email &&
                      Object.keys(formik.errors).length <= 0 && (
                        <DoneIcon color='success' />
                      )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id='outlined-basic'
            placeholder='Enter Your password'
            variant='outlined'
            type={showPass ? 'password' : 'text'}
            name='password'
            value={formik.values.password}
            onChange={handleFormikChange}
            error={
              formik.touched.password &&
              Boolean(formik.errors.password)
            }
            helperText={
              formik.touched.password && formik.errors.password
            }
            onBlur={formik.handleBlur}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id='outlined-basic'
            placeholder='Enter Confirm password'
            variant='outlined'
            type={showPass ? 'password' : 'text'}
            name='passwordConfirm'
            value={formik.values.passwordConfirm}
            onChange={handleFormikChange}
            passwordConfirm
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={
              formik.touched.passwordConfirm &&
              Boolean(formik.errors.passwordConfirm)
            }
            helperText={
              formik.touched.passwordConfirm &&
              formik.errors.passwordConfirm
            }
            onBlur={formik.handleBlur}
          />
        </Box>
        {/* <Box className={classes.forgot}>
          <Button
            variant='standard'
            style={{ textDecoration: 'underline', fontWeight: 500 }}
            to='/forgotPassword'
            component={Link}
          >
            Forgot Your Password ?
          </Button>
        </Box> */}
        <Typography variant='subtitle1'>OR</Typography>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLECLIENT_ID}
          buttonText='Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          icon={false}
          render={(renderProps) => (
            <Button
              variant='contained'
              color='primary'
              style={{
                backgroundColor: '#E3E3E3',
                border: '2px solid #A3A3A3',
                marginTop: '2rem',
                color: '#111',
                cursor: 'pointer',
              }}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              startIcon={<GoogleIcon className={classes.icons} />}
            >
              Google
            </Button>
          )}
        />
        {/* <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLECLIENT_ID}
          buttonText='Google'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          icon={false}
          render={(renderProps) => (
            // <Button
            //   variant='contained'
            //   color='primary'
            //   style={{
            //     backgroundColor: '#E3E3E3',
            //     border: '2px solid #A3A3A3',
            //     marginTop: '2rem',
            //     color: '#111',
            //     cursor: 'pointer',
            //   }}
            //   onClick={renderProps.onClick}
            //   disabled={renderProps.disabled}
            //   startIcon={<GoogleIcon className={classes.icons} />}
            // >
            //   Google
            // </Button>
            <Button
              variant='contained'
              size='large'
              startIcon={<GoogleIcon className={classes.icons} />}
              style={{
                backgroundColor: '#E3E3E3',
                border: '2px solid #A3A3A3',
              }}
            >
              Google
            </Button>
          )}
        /> */}
        {/* <Button
          variant='contained'
          size='large'
          startIcon={<GoogleIcon className={classes.icons} />}
          style={{
            backgroundColor: '#E3E3E3',
            border: '2px solid #A3A3A3',
          }}
        >
          Google
        </Button> */}
        <Button
          startIcon={<AppleIcon className={classes.icons} />}
          variant='contained'
          size='large'
          style={{
            backgroundColor: '#E3E3E3',
            border: '2px solid #A3A3A3',
          }}
        >
          Apple
        </Button>
        <Button
          variant='contained'
          size='large'
          className={`${classes.signupBtn} ${classes_g.greenBtn}`}
          style={{ fontWeight: 'bold' }}
          disabled={
            !formik.dirty ||
            !formik.isValid ||
            formik.isSubmitting ||
            Object.values(formik.values).some(
              (x) => x === null || x === ''
            )
          }
          onClick={handleSubmit}
        >
          {loading ? (
            <CircularProgress size={25} color='inherit' />
          ) : (
            'Sign Up'
          )}
        </Button>
      </Box>
      {loading === false && (
        <ConfirmDialogBox
          open={isCancelOpen}
          toggleDialog={toggleCancelOpen}
          title={
            'Congrats for signing up to BOTTE, You have 2 bonus Points  Now you can send / courier parcels -enjoy'
          }
        />
      )}
    </Box>
  );
};

export default SignUp;
