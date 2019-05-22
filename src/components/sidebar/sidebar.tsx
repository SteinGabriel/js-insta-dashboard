import * as React from 'react';

interface IAppProps {}

interface IMenu {
  icon: string;
  title: string;
}

const menu: IMenu[] = [
  { icon: 'exemple icon 1', title: 'Dashboard' },
  { icon: 'exemple icon 2', title: 'Settings' }
];

function Sidebar(props: IAppProps) {
  return (
    <React.Fragment>
      <ul>
        {menu.map((menu: IMenu, index: number) => (
          <li key={index}>{menu.title}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Sidebar;
