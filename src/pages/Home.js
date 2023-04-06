import React from 'react';
import Footer from './components/Footer';
import Button from './components/Button';
import Posts from './components/Posts';
import Layout from './Layout';
import WorldMap from './components/WorldMap';
import './pages.css';


const Home = () => {
    return     <div className="Container">
      
    <Posts/>
    {/* <Body1/>
    <Posts/>
    <Body2/> */}
    <Footer/>
    <WorldMap/>

  </div>;
  };
  
  export default Home;