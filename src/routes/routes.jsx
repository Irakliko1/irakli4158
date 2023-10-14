import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/mainpage/mainpage';
import Authorization from '../pages/login/authorization';
import Error from '../component/error/error';
import Signup from '../component/signup/signup';
import Filter from '../component/filter/filter';
import Mycart from '../pages/mycart';
import Prodactview from '../pages/productview';
import OutletMain from './outlet';
import RequireAuth from '../component/requireAuth/requireAuth';



const Routs = () => {
  return (
    <Routes>
      <Route path='/' element={<OutletMain/>}>
        <Route path="/" element={<Mainpage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Signup/>}/>
        <Route path="/productview/:id" element={<Prodactview/>} />
        <Route element={<RequireAuth/>}>
          <Route path="/addcart" element={<Mycart/>} />
        </Route>
        <Route path="/filter" element={<Filter/>} />
        <Route path="/*" element={<Error/>}  />
      </Route>
    </Routes>
  );
};

export default Routs;
