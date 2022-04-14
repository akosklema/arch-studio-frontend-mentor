import { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import LogoSVG from '../SVGs/LogoSVG';

import classes from './Header.module.css';

function Header() {
  const [fixedHeader, setFixedHeader] = useState(false);

  const navigate = useNavigate();

  const linkClass = `${classes['nav-link']}`;
  const activeClasses = `${classes['nav-link']} ${classes['nav-link--active']}`;

  useEffect(() => {
    const setStickyHeader = () => {
      if (window.scrollY >= 146) {
        return setFixedHeader(true);
      }

      return setFixedHeader(false);
    };

    window.addEventListener('scroll', setStickyHeader);

    return () => window.removeEventListener('scroll', setStickyHeader);

  }, []);

  return (
    <header className={`${classes['header']} ${fixedHeader && classes['header-fixed']}`}>
      <div className={classes['nav-container']}>
          {/* <Link to="/">
            <LogoSVG type="dark" className={classes['logo']} />
          </Link> */}
          <LogoSVG type="dark" className={classes['logo']} onClick={() => navigate('/')} />
        
          <nav className={classes['navigation']}>
            <ul>
              <li className={classes['nav-item']}>
                <NavLink
                  to="portfolio"
                  className={({ isActive }) => isActive ? activeClasses : linkClass}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className={classes['nav-item']}>
              <NavLink
                  to="about"
                  className={({ isActive }) => isActive ? activeClasses : linkClass}
              >
                About Us
              </NavLink>
              </li>
              <li className={classes['nav-item']}>
                <NavLink
                    to="contact"
                    className={({ isActive }) => isActive ? activeClasses : linkClass}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
};

export default Header;