import { Routes, Route } from 'react-router-dom';
import DetailOne from '../pages/DetailOne';

// pages
import Main from "../pages/Main";
import LogIn from "../pages/LogIn";
// import SignUp from "../pages/SignUp";
// import Recruit from "../pages/Recruit";
// import Place from "../pages/Place";
// import Review from "../pages/Review";
// import Add1 from "../pages/Add1";
// import Add2 from "../pages/Add2";
// import Detail1 from "../pages/Detail1";
// import Detail2 from "../pages/Detail2"; 
// import Mypage from "../pages/MyPage";
// import ProfileManager from "../pages/ProfileManager";
// import BookMark from "../pages/BookMark";
// import ChatList from "../pages/ChatList";
// import MainChat from "../pages/MainChat";

function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={< DetailOne/>} />
      <Route  path="/login" element={< LogIn />} />
      {/* <Route  path="/signup" element={< SignUp />} />     
      <Route  path="/recruit" element={< Recruit />} /> 
      <Route  path="/place" element={< Place />} /> 
      <Route  path="/review" element={< Review />} /> 
      <Route  path="/add1" element={< Add1 />} />
      <Route  path="/add2" element={< Add2 />} />
      <Route  path="/detail1" element={< Detail1 />} />
      <Route  path="/detail2" element={< Detail2 />} />
      <Route  path="/mypage" element={< Mypage />} />
      <Route  path="/manager" element={< ProfileManager />} />
      <Route  path="/bookmark" element={< BookMark />} />
      <Route  path="/chatlist" element={< ChatList />} />
      <Route  path="/mainchat" element={< MainChat />} /> */}
    </Routes>
    </>
  );
}

export default App;
