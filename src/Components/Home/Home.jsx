import React from 'react';
import Header from '../Common/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';
import Corousel from './Carousel/Corousel';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import Achievement from './Achievement/Achievement';

const Home = () => {
    return (
        <div>
          <Corousel></Corousel>
          <PopularClasses></PopularClasses>
          <PopularInstructors></PopularInstructors>
          <Achievement></Achievement>
        </div>
    );
};

export default Home;