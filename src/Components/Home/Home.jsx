import React, { useContext, useState } from 'react';
import Header from '../Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';
import Corousel from './Carousel/Corousel';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Achievement from './Achievement/Achievement';
import AuthProvider, { AuthContext } from '../Providers/AuthProvider';
import SectionTitle from '../Title/SectionTitle';

const Home = () => {
  const {user}=useContext(AuthContext)
  console.log(user)
  const [derkmode,setDerkmode]=useState(false)
  
    return (
        <div id='home'>
          
          <Corousel></Corousel>
          <SectionTitle heading={"Popular Classes"}></SectionTitle>
          <PopularClasses></PopularClasses>
          <SectionTitle heading={"Popular Instructors"}></SectionTitle>

          <PopularInstructors></PopularInstructors>
          <SectionTitle heading={"Student Achievement"}></SectionTitle>

          <Achievement></Achievement>
        </div>
    );
};

export default Home;