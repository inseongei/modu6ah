import React from "react";
import styled from "styled-components";
import Header from "../../components/main/Header";
import { useNavigate } from "react-router-dom";
import { GetMyPageAxios } from "../../redux/modules/Data";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ProfileInsert = () => {
  const nickname = localStorage.getItem("nickname");
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

  const fileName = (e) => {
    encodeFileToBase64(e.target.files[0]);
  };






  const onSubmit = async (e) => {
    e.preventDefault();

    let files = e.target.profile_files.files;
    let formData = new FormData();

    formData.append("profileUrl", files[0]);
    formData.append("myComment", insert.current.value);


    await axios
      .put(
        "http://dlckdals04.shop/api/mypage/update",
        formData,
        { headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` } }
      )
      .then((res) => {
        console.log(res)
        navigate("/manager/" + nickname);
        localStorage.setItem("profileUrl", res.data.profileUrl);
      })
      .catch((err) => console.log(err));
  };

  if (!MyPage) {
    return <div></div>;
  }
  return (
    <>

      <Header />
      <Profile>

        <div className="ProfileContainer">
          <div className="title">프로필수정</div>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="ProfileInfo">
            <div className="ProfileImg">
              <div className="ProfileImgTwo">
                <img
                  className="img"
                  src={imageSrc === "" ? MyPage.mypageGet.profileUrl : imageSrc}
                  alt="사진"
                />
              </div>

              <div>

                <input
                  type="file"
                  name="profile_files"
                  ref={fileInput}
                  onChange={fileName}
                />
              </div>

            </div>
            

            <div className="TwoBox">
              <div>
                <span> 닉네임 </span>
                <div className="inputBox">{MyPage.mypageGet.nickname}</div>
              </div>
              <div>
                <span> 이메일 </span>
                <div className="inputBox">{MyPage.mypageGet.email}</div>
              </div>

              <div>
                <span> 소개란 </span>
                <div>
                  <input
                    type="text"
                    className="inputBigBox"
                    placeholder="나를 소개해주세요 !"
                    ref={insert}
                  />
                </div>

              </div>

              

              <div className="btn">
                <button
                  onClick={() => {
                    navigate("/manager");
                  }}
                >
               
                  취소
                </button>
                <button type="submit"> 수정 완료</button>
              </div>

            </div>
            
          </div>
        </form>

        </div>
        

      </Profile>
    </>
  );
};

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92vh;

  .ProfileContainer {
    width: 55%;
    height: 80vh;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 38px;
  }

  .ProfileInfo {
    display: flex;
    justify-content: center;
    padding: 50px;
  }

  .ProfileImg {
    width: 170px;
    height: 170px;
    margin-right: 60px;
  }

  .inputBox {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    width: 22vw;
    height: 40px;
    background: #f5f5f5;
    margin-bottom: 15px;
    padding: 7px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    display: inline-block;
    margin-bottom: 15px;
  }

  .inputBigBox {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    width: 22vw;
    padding: 40px;
    margin: 0px;
    background: #f5f5f5;
  }

  .btn {
    width: 100%;
    margin-top: 20px;
    text-align: right;
    display: flex;
    justify-content: space-around;
  }

  input {
    margin-top: 15px;
  }

  .btn > button {
    background: #3c3c3c;
    border-radius: 30px;
    width: 35%;
    height: 35px;
    border: none;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  img {
    width: 170px;
    height: 170px;
    background-size: cover;
  }
`;

export default ProfileInsert;
