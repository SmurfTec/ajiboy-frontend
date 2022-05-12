import { alpha } from '@material-ui/core/styles';

const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const palette = {
  type: 'light',
  primary: {
    main: '#4F4E4D',
    light: '#A8A8A8 ',
    lighter: '#EDEDED ',
  },
  text: {
    primary: '#111',
    secondary: '#3E3E3E',
    //   disabled: '#637381',
  },
  secondary: {
    main: '#e0760b',
    light: '#F79C5A',
    lighter: '#FDF7F2',
    lighterr: '#D5D5D5 ',
  },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  info: { ...INFO },
};

export default palette;
