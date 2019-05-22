import * as React from 'react';
import Icon from '@material-ui/core/Icon';

interface IAppProps {}

interface IMenu {
  icon: string;
  title: string;
}

const menu: IMenu[] = [
  { icon: 'dashboard', title: 'Dashboard' },
  { icon: 'settings', title: 'Settings' }
];

function Sidebar(props: IAppProps) {
  return (
    <React.Fragment>
      <div id="sidebar-logo">
        <span>InstaBot</span>
      </div>
      <ul>
        {menu.map((menu: IMenu, index: number) => (
          <li key={index}>
            <Icon>{menu.icon}</Icon>
            <span>{menu.title}</span>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Sidebar;
