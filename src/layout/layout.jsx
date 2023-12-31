import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './layout.css'
import Routes from '../routes/routes';
import Mainheader from '../component/header/main_header/main_header';
import Footer from '../component/footer/footer';


const Layout = () => {
  const location = useLocation();
  const hideMainAndFooter = location.pathname === '/authorization' || location.pathname === '/registration';

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location.pathname])

  return (
    <div className='layout_container'>

      {!hideMainAndFooter && <Mainheader />}
      <Routes />

      {!hideMainAndFooter && <Footer />}
    </div>
  );
}

export default Layout;