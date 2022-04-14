import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import LogoSVG from '../SVGs/LogoSVG';
import HamburgerSVG from '../SVGs/HamburgerSVG';
import CloseSVG from '../SVGs/CloseSVG';

import classes from './MobileHeader.module.css';

function MobileHeader({ setMobileNavActive }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [fixedHeader, setFixedHeader] = useState(false);

  useEffect(() => {
    const setStickyHeader = () => {
      if (window.scrollY >= 96) {
        return setFixedHeader(true);
      }

      return setFixedHeader(false);
    };

    window.addEventListener('scroll', setStickyHeader);

    return () => window.removeEventListener('scroll', setStickyHeader);

  }, []);

  const handleMenu = () => {
    setMenuIsOpen(prevState => !prevState);
    setMobileNavActive(prevState => !prevState);
  };

  const linkClass = `${classes['nav-link']}`;
  const activeClasses = `${classes['nav-link']} ${classes['nav-link--active']}`;

  return (
    <header className={`${classes['header']} ${fixedHeader && classes['header-fixed']}`}>
      <div className={classes['header-content-container']}>
        <Link to="/" className={classes['logo']}>
          <LogoSVG />
        </Link>
        {
          menuIsOpen ? (
            <CloseSVG className={classes['menu-icon']} handleClick={handleMenu} />
          ) : (
            <HamburgerSVG className={classes['menu-icon']} handleClick={handleMenu} />
          )
        }
        <nav className={`${classes['navigation']} ${menuIsOpen && classes['navigation--open']}`}>
          <ul>
            <li className={classes['nav-item']}>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => isActive ? activeClasses : linkClass}>Portfolio</NavLink>
            </li>
            <li className={classes['nav-item']}>
              <NavLink to="/about" className={({ isActive }) => isActive ? activeClasses : linkClass}>About Us</NavLink>
            </li>
            <li className={classes['nav-item']}>
              <NavLink to="/contact" className={({ isActive }) => isActive ? activeClasses : linkClass}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;