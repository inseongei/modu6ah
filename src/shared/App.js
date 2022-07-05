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
import WelcomeModal from '../modal/WelcomeModal';
import EditModalOne from '../modal/EditModalOne';



function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<DetailTwo />} />
      <Route  path="/login" element={< LogIn />} />
      <Route  path="/signup" element={< SignUp />} />     
      <Route  path="/recruit" element={< Recruit />} /> 
      <Route  path="/place" element={< Place />} /> 
      <Route  path="/review" element={< Review />} /> 
      <Route  path="/addone" element={< AddOne />} />
      <Route  path="/addtwo" element={< AddTwo />} />
      <Route  path="/detailone" element={< DetailOne />} />
      <Route  path="/detailtwo" element={< DetailTwo />} />
      <Route  path="/mypage/:roomId" element={< MyPage />} />
      <Route  path="/mypage" element={< MyPage />} />
      <Route  path="/manager" element={< ProfileManager />} />
      <Route  path="/bookmark" element={< BookMark />} />
      <Route  path="/chatlist" element={< ChatList />} />
      <Route  path="/mainchat" element={< MainChat />} /> 
        {/* 이쪽 모달은 추후에 삭제 예정 */}
      <Route  path="/welcome" element={< WelcomeModal />} /> 
      <Route  path="/edit" element={< EditModalOne />} /> 

    </Routes>
    </>
  );
}

export default App;
