import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface IHeader {
  menus: { [key: string]: any }[];
}

const Header: React.FC<IHeader> = ({ menus }) => {
  const [menu, setMenu] = useState('메뉴1');

  return (
    <>
      <div className="header">ACCOUNT BOOK</div>
      <div className="menus">
        {menus.map((m, i) => (
          <Link key={i} to={m.path} style={{ textDecoration: 'none' }}>
            <div
              className="menu"
              onClick={(e) => {
                setMenu(m.name);
              }}
              style={{
                backgroundColor: m.name === menu ? 'gray' : 'lightgray',
              }}
              key={i}
            >
              {m.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
