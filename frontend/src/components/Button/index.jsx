import React from 'react';
import './stylesheet.scss';
import { classes } from '../../common/utils';
import { Link } from 'react-router-dom';

export default function Button({ className, critical, secondary, to, onClick, ...restProps }) {
  const combinedClassName = classes('Button', critical && 'critical', secondary && 'secondary', className);
  return to ? (
    <Link className={combinedClassName} to={to} {...restProps}/>
  ) : (
    <div className={combinedClassName} onClick={onClick} {...restProps}/>
  );
}
