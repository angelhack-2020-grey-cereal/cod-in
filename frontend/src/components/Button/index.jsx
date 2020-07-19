import React from 'react';
import './stylesheet.scss';
import { classes } from '../../common/utils';
import { Link } from 'react-router-dom';

export default function Button({ className, disabled, critical, secondary, to, onClick, ...restProps }) {
  const combinedClassName = classes('Button', critical && 'critical', secondary && 'secondary', disabled && 'disabled', className);
  return to ? (
    <Link className={combinedClassName} to={disabled ? undefined : to} {...restProps}/>
  ) : (
    <div className={combinedClassName} onClick={disabled ? undefined : onClick} {...restProps}/>
  );
}
