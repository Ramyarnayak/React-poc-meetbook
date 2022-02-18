// Libraries
import { Fab } from '@material-ui/core';
import { Share } from 'react-feather';
import React from "react"
// Components
import  Footer  from './../marginals/Footer';

// Utils
import  FABClick  from './../../utils/fabClick';

const Layout = ({
  children,
  footerClassName,
  enableFab = false,
  shareArray,
}) => (
  <>
    {children}

    {/* <Footer className={footerClassName || ''} /> */}

    {enableFab && (
      <Fab
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', right: '1rem', bottom: '1rem' }}
        onClick={() => FABClick(shareArray)}
      >
        <Share />
      </Fab>
    )}
  </>
);

export default Layout;
