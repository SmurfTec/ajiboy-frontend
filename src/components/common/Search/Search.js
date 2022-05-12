import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import clsx from 'clsx';
import { useTextInput, useToggleInput } from 'hooks';
import globalStyles from 'styles/commonStyles';
// import { useThemeContext } from 'Components/theme';
import useManyInputs from 'hooks/useManyInputs';
import styles from './SearchStyles';
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const From = [
  'All',
  'Bangladesh',
  'India',
  'Kenya',
  'Nigeria',
  'Philippines',
  'Romania',
  'Spain',
  'UK',
];
const To = [
  'All',
  'Bangladesh',
  'India',
  'Kenya',
  'Nigeria',
  'Philippines',
  'Romania',
  'Spain',
];
const UK = ['UK'];

const Type = [
  'All',
  'Books and documents',
  'Electronic/electrical devices',
  'Clothing',
  'Jewelry/Ornaments',
  'Perfumes/fashion accessories',
  'Dried/canned food',
  'keys/utensils',
  'cosmetics',
];

const Weight = [
  '0-1',
  '1-2',
  '2-3',
  '3-4',
  '4-5',
  '5-6',
  '6-7',
  '7-8',
  '8-9',
  '9-10',
  '0-10',
];

export default function Search({ submitForm }) {
  const classes = styles();
  const classes_g = globalStyles();

  const navigate = useNavigate();
  const location = useLocation();

  const initialState = {
    from: 'All',
    to: 'UK',
    deliveryDate: '',
    packageType: 'All',
    weightLimit: '0-10',
  };

  const [
    inputState,
    handleTxtChange,
    ,
    changeInput,
    ,
    setInputstate,
  ] = useManyInputs(initialState);

  const handleInput = (e) => {
    // console.log('Name', e.target.name);
    // console.log('Value', e.target.value);

    if (e.target.name === 'from' && e.target.value !== 'UK') {
      changeInput('to', 'UK');
    }

    if (e.target.name === 'from' && e.target.value === 'UK') {
      changeInput('to', 'All');
    }

    changeInput(e.target.name, e.target.value);
  };

  useEffect(() => {
    console.log('STATE', inputState);
  }, [inputState]);

  const handleSearch = (e) => {
    e.preventDefault();
    // * if search is empty , navigate to '/' from '/search='blabla'
    const { from, to, deliveryDate, packageType, weightLimit } =
      inputState;
    if (!from && !to && !deliveryDate && !packageType && !weightLimit)
      navigate(location.pathname);
    else {
      if (!deliveryDate) {
        navigate(
          `?from=${from}&to=${to}&packageType=${packageType}&weightLimit=${weightLimit}`
        );
      }
      if (!weightLimit) {
        navigate(
          `?from=${from}&to=${to}&deliveryDate=${deliveryDate}&packageType=${packageType}`
        );
      }
      if (!deliveryDate && !weightLimit) {
        navigate(`?from=${from}&to=${to}&packageType=${packageType}`);
      }
      if (from && to && deliveryDate && packageType && weightLimit) {
        navigate(
          `?from=${from}&to=${to}&deliveryDate=${deliveryDate}&packageType=${packageType}&weightLimit=${weightLimit}`
        );
      }
    }
    // * navigate to '/' from '/search='blabla'
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <Box className={clsx(classes.container)}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant='body2' className={classes.typo}>
              Search Delivery Request from Sender
            </Typography>
            <Box
              className={classes.flexs}
              style={{
                rowGap: 10,
              }}
            >
              <TextField
                id='from'
                select
                type='search'
                placeholder='From'
                name='from'
                value={inputState.from}
                onChange={handleInput}
                SelectProps={{
                  native: true,
                }}
                variant='standard'
                InputProps={{
                  disableUnderline: true,
                }}
              >
                {From.map((option, index) => (
                  <option key={index} value={option}>
                    {option} :
                  </option>
                ))}
              </TextField>
              <TextField
                id='to'
                select
                name='to'
                placeholder='To'
                value={inputState.to}
                onChange={handleInput}
                SelectProps={{
                  native: true,
                }}
                variant='standard'
                InputProps={{
                  disableUnderline: true,
                }}
              >
                {inputState.from === 'UK'
                  ? To.map((option, index) => (
                      <option key={index} value={option}>
                        {option} :
                      </option>
                    ))
                  : UK.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}

                {/* {countries.map((option, index) => (
                  <option key={index} value={option}>
                    {option === 'UK'
                      ? countries.filter((el) => el.name !== 'UK')
                      : [{ name: 'UK' }]}
                  </option>
                ))} */}
              </TextField>
              <TextField
                id='Delivery Date'
                type='date'
                placeholder='Delivery Date'
                name='deliveryDate'
                value={inputState.deliveryDate}
                onChange={handleInput}
                variant='standard'
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <TextField
                id='packageType'
                select
                placeholder='Package Type'
                name='packageType'
                value={inputState.packageType}
                onChange={handleInput}
                SelectProps={{
                  native: true,
                }}
                variant='standard'
                InputProps={{
                  disableUnderline: true,
                }}
              >
                {Type.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </TextField>
              <TextField
                id='weightLimit'
                select
                placeholder='WeightLimit'
                name='weightLimit'
                value={inputState.weightLimit}
                onChange={handleInput}
                SelectProps={{
                  native: true,
                }}
                variant='standard'
                InputProps={{
                  disableUnderline: true,
                }}
              >
                {Weight.map((option, index) => (
                  <option key={index} value={option}>
                    {option} kg
                  </option>
                ))}
              </TextField>
              <Button
                variant='contained'
                size='medium'
                className={classes.greenButton}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
}
