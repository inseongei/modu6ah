import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom';

// pages
import Main from "../pages/Main";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Recruit from "../pages/Recruit";
import Place from "../pages/Place";
import Review from "../pages/Review";
import Add1 from "../pages/Add1";
import Add2 from "../pages/Add2";
import Detail1 from "../pages/Detail1";
import Detail2 from "../pages/Detail2"; 
import Mypage from "../pages/MyPage";
import ProfileManager from "../pages/ProfileManager";
import BookMark from "../pages/BookMark";
import ChatList from "../pages/ChatList";
import MainChat from "../pages/MainChat";

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={< Main/>} />
      <Route exact path="/login" element={< LogIn />} />
      <Route exact path="/signup" element={< SignUp />} />     
      <Route exact path="/recruit" element={< Recruit />} /> 
      <Route exact path="/place" element={< Place />} /> 
      <Route exact path="/review" element={< Review />} /> 
      <Route exact path="/add1" element={< Add1 />} />
      <Route exact path="/add2" element={< Add2 />} />
      <Route exact path="/detail1" element={< Detail1 />} />
      <Route exact path="/detail2" element={< Detail2 />} />
      <Route exact path="/mypage" element={< Mypage />} />
      <Route exact path="/manager" element={< ProfileManager />} />
      <Route exact path="/bookmark" element={< BookMark />} />
      <Route exact path="/chatlist" element={< ChatList />} />
      <Route exact path="/mainchat" element={< MainChat />} />
    </Routes>
    </>
  );
}

export default App;
