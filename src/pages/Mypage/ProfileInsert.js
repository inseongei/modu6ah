import React from "react";
import styled from "styled-components";
import Header from "../../components/main/Header";
import { useNavigate } from "react-router-dom";
import { GetMyPageAxios } from "../../redux/modules/Data";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ChatIcon from '../../components/main/ChatIcon'
import Footer from '../../components/main/Footer'
import { BsFillPlusCircleFill } from "react-icons/bs";
import Swal from "sweetalert2";

const ProfileInsert = () => {
  const nickname = localStorage.getItem("nickname");
  const img = localStorage.getItem('profileUrl')
  React.useEffect(() => {
    dispatch(GetMyPageAxios(nickname));
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const insert = React.useRef("");
  const fileInput = React.useRef("");
  const MyPage = useSelector((state) => state.Data.state);
  const [imageSrc, setImageSrc] = React.useState("");

  // 이미지 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };


  // 파일 미리보기
  const fileName = (e) => {
    encodeFileToBase64(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let files = e.target.profile_files.files;
    let formData = new FormData();

    // if(files.length === 0){
    //   formData.append("profileUrl", img);
    //   formData.append("myComment", insert.current.value);
    // } else{

    // }

    formData.append("profileUrl", files[0]);
    formData.append("myComment", insert.current.value);




    await axios
      .put(
        "https://zhaoxilin.shop/api/mypage/update",
        formData,
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
      )
      .then((res) => {
        console.log(res)
        Swal.fire({
          text: `프로필 수정이 완료되었습니다.`,
          icon: "success",
          confirmButtonText: "확인", 
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/manager/" + nickname);
            localStorage.setItem("profileUrl", res.data.profileUrl);
          }
        })
      })
      .catch((err) => 
      Swal.fire({
        text: `프로필 수정 실패.`,
        icon: "error",
        confirmButtonText: "확인", 
      })
      );
  };

  if (!MyPage) {
    return <div></div>;
  }
  return (
    <>
      <Header />
      <Profile>
        <div className="ProfileContainer">
          <div className="TitleMain">
           <span className="Myprofile"> 마이 프로필</span>
           <span className="title">프로필 수정하기</span> 
          </div>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="ProfileInfo">
            <div className="ProfileImg">
            <img className="img"
                  src={imageSrc === "" ? MyPage.mypageGet.profileUrl : imageSrc}
                  alt="사진"
                />
              <input
                id="input-file"
                type="file"
                name="profile_files"
                onChange={fileName}
                style={{display:"none"}}
              />
              <label htmlFor="input-file">
                  <BsFillPlusCircleFill 
                  style={{cursor:"pointer",
                  marginLeft:"67px", marginTop:"20px"}} />
                </label>
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
                <div>
                  <textarea
                    type="text"
                    className="inputBigBox"
                    placeholder="나를 소개해주세요 !"
                    ref={insert}
                  />
                </div>
              </div>

              <div className="ThisBtn">
                <button
                  onClick={() => {
                    navigate("/manager/" + nickname);
                  }} className="btncancel"
                >
               
                  취소
                </button>
                <button type="submit"> 수정 완료</button>
              </div>
            </div>
          </div>
          </form>
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
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Nanum Gothic', sans-serif;
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
    background: #A8A8A8;
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
    width: 315px;
    height: 40px;
    margin-top: 20px;
    text-align: right;
    display: flex;
  }

  .btncancel{
    margin-right: 15px;
  }
  .ThisBtn > button {
    background: #3c3c3c;
    border-radius: 30px;
    width: 150px;
    height: 40px;
    border: none;
    
    color: #fff;
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

export default ProfileInsert;
