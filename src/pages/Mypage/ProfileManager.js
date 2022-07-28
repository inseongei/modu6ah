import React from "react";
import styled from "styled-components";
import Header from "../../components/main/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetMyPageAxios } from "../../redux/modules/Data";
import ChatIcon from '../../components/main/ChatIcon'
import Footer from '../../components/main/Footer'

const ProfileManager = () => {
  // 사용 변수들 지정
  const Mynickname = localStorage.getItem("nickname");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { nickname } = useParams();
  const MyPage = useSelector((state) => state.Data.state);

  // 프로필 관리 리렌더링 될때 해당 파라미터값의 닉네임으로 재렌더링 시켜줌
  React.useEffect(() => {
    dispatch(GetMyPageAxios(nickname));
  }, []);

  // 마이페이지 화면 뷰
  if (!MyPage) {
    return <div> 값이 없음</div>;
  }
  return (
    <>
      <Header />
      <Profile>
        <div className="ProfileContainer">
          <div className="TitleMain">
           <span className="Myprofile"> 마이 프로필</span>
           <span className="title">프로필 관리</span> 
          </div>
          <div className="ProfileInfo">
            <div className="ProfileImg">
              <img src={MyPage.mypageGet.profileUrl} alt="사진" />
            </div>
            <div>
              <div className="TwoBox">
                <span> 닉네임 </span>
                <div className="inputBox">{MyPage.mypageGet.nickname}</div>
              </div>
              <div className="TwoBox">
                <span> 이메일 </span>
                <div className="inputBox">{MyPage.mypageGet.email}</div>
              </div>

              <div className="TwoBox">
                <span> 자기소개 </span>
                <div className="inputBigBox">{MyPage.mypageGet.myComment}</div>
              </div>

              <div className="ThisBtn">
                {Mynickname !== MyPage.mypageGet.nickname ? null : (
                  <button onClick={() => {
                    navigate("/profileinsert/" + Mynickname);
                  }}>
                    수정하기
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <ChatIcon/>
      </Profile>
      <Footer/>
    </>
  );
};

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92vh;
  background: #FAFAFA;
  font-family:"NanumGothic";

  .ProfileContainer {
    width: 55%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .Myprofile{
    color: #A8A8A8;
    font-family: 'Nanum Gothic', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
  .title {
    font-family: 'Nanum Gothic', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .ProfileInfo {
    display: flex;
    justify-content: center;
    padding: 50px;
    width: 624px;
    height: 668px;
    background-color: #fff;
    border: 1px solid #E4E4E4;
    border-radius: 10px;
  }

  .TitleMain{
    width:624px;
    display: flex;
    flex-direction:column;
  }

  .ProfileImg {
    width: 170px;
    height: 170px;
    margin-right: 60px;
  }
  .inputBox {
    border: 1px solid #A8A8A8;
    border-radius: 10px;
    width: 315px;
    height: 44px;
    background: #fff;
    margin-bottom: 15px;
    padding: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }
  .TwoBox > span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    display: inline-block;
    margin-bottom: 10px;
    font-family: 'Nanum Gothic', sans-serif;
  }
  .inputBigBox {
    border: 1px solid #A8A8A8;
    border-radius: 10px;
    width: 315px;
    height: 266px;
    background: #fff;
    padding: 7px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }
  .ThisBtn {
    width: 100%;
    margin-top: 20px;
    text-align: right;
  }
  .ThisBtn > button {
    background: #3c3c3c;
    border-radius: 30px;
    width: 150px;
    height: 40px;
    border: none;
    color: #fff;
    font-family: 'NanumGothic';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Nanum Gothic', sans-serif;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-size: cover;
  }
  a {
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: none;
  }
`;

export default ProfileManager;
