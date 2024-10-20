import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen bg-custom-gradient py-[30px] 2xl:py-[50px] px-[5%]'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
