import React from 'react';
import './stylesheet.scss';
import { classes } from '../../common/utils';
import { Link } from 'react-router-dom';

// pass href or onClick
export default function Button({ className, to, onClick, ...restProps }) {
  return to ? (
    <Link className={classes('Button', className)} to={to} {...restProps}/>
  ) : (
    <div className={classes('Button', className)} onClick={onClick} {...restProps}/>
  );
}
