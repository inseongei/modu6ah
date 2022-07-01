import { Routes, Route } from 'react-router-dom';

// pages
import LogIn from "../pages/LogIn";
import DetailOne from "../pages/DetailOne"
import SignUp from "../pages/SignUp";
import Recruit from "../pages/Recruit";
import Place from "../pages/Place";
import Review from "../pages/Review";
import AddOne from "../pages/AddOne";
import AddTwo from "../pages/AddTwo";
import DetailTwo from "../pages/DetailTwo"; 
import MyPage from "../pages/MyPage";
import ProfileManager from "../pages/ProfileManager";
import BookMark from "../pages/BookMark";
import ChatList from "../pages/ChatList";
import MainChat from "../pages/MainChat";
import Main from '../pages/Main'


function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Main/>} />
      <Route  path="/login" element={< LogIn />} />
      <Route  path="/signup" element={< SignUp />} />     
      <Route  path="/recruit" element={< Recruit />} /> 
      <Route  path="/place" element={< Place />} /> 
      <Route  path="/review" element={< Review />} /> 
      <Route  path="/AddOne" element={< AddOne />} />
      <Route  path="/addtwo" element={< AddTwo />} />
      <Route  path="/DetailTwo" element={< DetailTwo />} />
      <Route  path="/mypage" element={< MyPage />} />
      <Route  path="/manager" element={< ProfileManager />} />
      <Route  path="/bookmark" element={< BookMark />} />
      <Route  path="/chatlist" element={< ChatList />} />
      <Route  path="/mainchat" element={< MainChat />} /> 
    </Routes>
    </>
  );
}

export default App;
