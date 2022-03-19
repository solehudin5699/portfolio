import React from 'react';
import { Link } from 'react-scroll';

function FAB() {
  const [open, setOpen] = React.useState(false);
  const sections = [
    {
      id: 'header',
      label: 'Home',
    },
    {
      id: 'about',
      label: 'About',
    },
    {
      id: 'projects',
      label: 'Projects',
    },
    {
      id: 'contact',
      label: 'Contact',
    },
    {
      id: 'footer',
      label: 'Connect',
    },
  ];
  return (
    <div className="fab__container">
      <div
        onClick={() => setOpen(!open)}
        style={{ zIndex: '10' }}
        className="fab__btn-open"
      >
        <div className={open ? 'hamburger-menu open-menu' : 'hamburger-menu'}>
          <div />
          <div />
          <div />
        </div>
      </div>
      {sections.reverse().map((item, idx) => (
        <Link to={item.id} smooth duration={200}>
          <div
            className="fab__menu"
            style={{
              transform:
                open &&
                `rotate(${22.5 * idx}deg)   translateY(${(50 / 4) * idx}px)`,
              width: open && '175px ',
              borderRadius: open && '10px',
            }}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FAB;
