import React from 'react';
import { makeStyles } from '@material-ui/core';
import MyCustomLogoFull from './logo/EssityWhite.png';
import LogoColor from './logo/essity_logo_small.svg';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 80,
    marginLeft: 40,
  },
  path: {
    fill: '#7df3e1',
  },
  transition: {
    transition: 'all 0.3s',
  }
});
const LogoFull = () => {
  const classes = useStyles();

  return <img src={MyCustomLogoFull} alt="Logo" className={classes.svg} />;
};

export default LogoFull;
