import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import React from 'react';
import { classes } from '../../common/utils';

export default function Drawer({ className, title, children }) {
  return (
    <div className={classes('Drawer', className)}>
      <div className="drawer-header">
        {title}
        <FontAwesomeIcon fixedWidth icon={faChevronDown}/>
      </div>
      <div className="drawer-body">
        {children}
      </div>
    </div>
  );
}
