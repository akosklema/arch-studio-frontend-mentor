import { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import useDevice from '../hooks/useDevice';

import Header from '../components/UI/Header';
import MobileHeader from '../components/UI/MobileHeader';
import Footer from '../components/UI/Footer';
import MobileFooter from '../components/UI/MobileFooter';
import Backdrop from '../components/UI/Backdrop';

import classes from './PageLayout.module.css';

function PageLayout() {
  const [pageName, setPageName] = useState('');
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const device = useDevice();

  return (
    // <div className={classes['layout-container']}>
    <Fragment>
      {device === 'mobile' &&
        <Fragment>
          <MobileHeader setMobileNavActive={setMobileNavActive} />
          {mobileNavActive && <Backdrop />}
        </Fragment>
      }
      <div className={classes['page-container']}>
        {device !== 'mobile' && (
          <Fragment>
            <motion.div
              className={classes['page-flag']}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={classes['page-flag-line']}></p>
              <p>
                {pageName}
              </p>
            </motion.div>
            <Header />
          </Fragment>)
        }

        <Outlet context={setPageName} />
      </div>
      {
          device === 'mobile' ? (
            <MobileFooter />
          ) : (
            <Footer />
          )
        }
    {/* </div> */}
    </Fragment>
  );
};

export default PageLayout;