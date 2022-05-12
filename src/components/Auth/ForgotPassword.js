import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Typography,
  Checkbox,
  Button,
  CircularProgress,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import * as yup from 'yup';
import { useFormik } from 'formik';
import FormTextField from '../common/FormikTextFields/FormTextField';
import styles from 'styles/FormStyles';
import useStyles from 'styles/commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from 'store/slices/Auth/extraReducers';

const ForgotPassword = () => {
  const classes = styles();
  const classes_g = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isLoggedIn } = useSelector((st) => st.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object({
      email: yup
        .string('Enter your email')
        .email()
        .required('Email is required'),
    }),
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: (values) => {
      dispatch(forgotPassword(values)).then(() => {
        formik.setSubmitting(false);
      });
    },
  });

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  return (
    <Box className={clsx(classes_g.backWrapper)} justifyContent='center'>
      <Box className='overlay' position='absolute' />
      <div className={clsx(classes.root, classes.loginWrapper)}>
        <Box>
          <Typography variant='h3' color='primary' gutterBottom={true}>
            Forgot Password
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            gutterBottom={true}
            sx={{ textAlign: 'justify' }}
          >
            Please enter the email address associated with your account and
            we'll email you a link to reset your password.
          </Typography>
        </Box>

        <FormTextField
          name='email'
          type='email'
          placeholder='Email'
          {...formik}
        />

        <Button
          variant='contained'
          color='secondary'
          onClick={formik.handleSubmit}
          disabled={
            loading || !formik.dirty || !formik.isValid || formik.isSubmitting
          }
        >
          {loading ? (
            <CircularProgress size={25} color='inherit' />
          ) : (
            'Reset Password'
          )}
        </Button>

        <Box
          mt={1}
          display='flex'
          justifyContent='center'
          sx={{ columnGap: '1em' }}
        >
          <Typography variant='body1' color='textPrimary'>
            Already have account?{' '}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            <NavLink to='/auth/login '>Login</NavLink>
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default ForgotPassword;
