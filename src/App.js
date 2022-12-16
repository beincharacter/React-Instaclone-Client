import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './componants/Landing-page/landing_page';
import Postview from './componants/Postview/postview';
import Post from './componants/Post/post';

 
function App() {
  

  return (
    <>
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='postviews' element={<Postview/>} />
            <Route path='postviews/post' element={<Post/>} />

          </Routes>
        </BrowserRouter>
      </div>
      

      
    </>
  );
}
 
export default App;