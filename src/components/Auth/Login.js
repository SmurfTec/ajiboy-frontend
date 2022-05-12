import React, { useEffect } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  CircularProgress,
} from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import AppleIcon from '@mui/icons-material/Apple';
import styles from './AuthStyles';
import useStyles from 'styles/commonStyles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as yup from 'yup';
import UseToggle from 'hooks/useToggleInput';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, socialLogin } from 'store/slices/Auth/extraReducers';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const classes_g = useStyles();
  const classes = styles();
  const [showPass, togglePass] = UseToggle(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    validateOnChange: true, //*  validate the field onChange
    validateOnBlur: false, //*  will give the accurate error

    onSubmit: (values) => {
      formik.setSubmitting(true);
      setTimeout(() => {
        formik.resetForm();
      }, 10000);
    },
  });
  const handleFormikChange = (e) => {
    formik.handleChange(e);
    formik.handleBlur(e);
  };

  useEffect(() => {}, [formik.values, formik.errors]);

  const handleSubmit = () => {
    const { email, password } = formik.values;
    dispatch(login({ email, password }));
    // toggleCancelOpen();
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

  //* Google Login

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

  return (
    <Box>
      <Box className={classes.body}>
        <Box style={{ padding: '0rem 1.5rem 0rem' }}>
          <Typography variant='body2'>
            By continuing, you are setting up a new account and agree
            to our
            <Link
              to='/conditions'
              style={{
                textDecoration: 'underline',
                color: '#000',
                verticalAlign: 'unset',
              }}
            >
              Terms and Policies.
            </Link>{' '}
            Don’t worry we will never share your data or post anything
            on your behalf.
          </Typography>
        </Box>
        {/* <Button
          variant='contained'
          size='large'
          startIcon={<GoogleIcon className={classes.icons} />}
          style={{
            backgroundColor: '#E3E3E3',
            border: '2px solid #A3A3A3',
            marginTop: '2rem',
          }}
        >
          Google
        </Button> */}
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

        <Typography variant='subtitle1'>OR</Typography>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            rowGap: 14,
          }}
        >
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
              formik.touched.password &&
              Boolean(formik.errors.password)
            }
            helperText={
              formik.touched.password && formik.errors.password
            }
            onBlur={formik.handleBlur}
          />
        </Box>
        <Box className={classes.forgot}>
          <Button
            variant='standard'
            style={{ textDecoration: 'underline', fontWeight: 500 }}
            to='/forgotPassword'
            component={Link}
          >
            Forgot Your Password ?
          </Button>
        </Box>
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
            'Log In'
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
