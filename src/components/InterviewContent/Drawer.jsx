import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import React, { useState } from 'react';
import { classes } from '../../common/utils';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';

export default function Drawer({ className, title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={classes('Drawer', collapsed && 'collapsed', className)}>
      <div className="drawer-header" onClick={() => setCollapsed(!collapsed)}>
        {title}
        <FontAwesomeIcon fixedWidth icon={collapsed ? faChevronUp : faChevronDown}/>
      </div>
      <div className="drawer-body">
        {children}
      </div>
    </div>
  );
}
