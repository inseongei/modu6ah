import React, { useState } from "react";

//style
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

//elements & components
import { FaStar } from "react-icons/fa";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import Grid from "../../components/elements/Grid";
import Modal from "../../modal/Map/Modal";
import { BsFillPlusCircleFill } from "react-icons/bs";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlaceComment from "../../components/pages/PlaceComment";
import ChatIcon from '../../components/main/ChatIcon'

function PlaceAdd() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [imageSrc, setImageSrc] = useState([]);
  const [rating, setRating] = useState(0);


  const navigate = useNavigate();


  // axios.Post 버튼
  const onSubmit = async (e) => {

    e.preventDefault();
    e.persist();

    let files = e.target.profile_files.files;
    let formData = new FormData();
    console.log(files)
    // 반복문 돌려서 다중 이미지 처리
    for (let i = 0; i < files.length; i++) {
      formData.append("imageUrl", files[i]);
    }

    // for(const [key,value] of formData.entries()) {
    //   console.log(key, value)
    // }
    // console.log(files.length);

    // 제목,내용,장소,별점 데이터 => 폼데이터 변환
    formData.append("title", title);
    formData.append("content", content);
    formData.append("productType", region);
    formData.append("url", address);

    if (files.length < 4) {
      await axios
        .post("https://zhaoxilin.shop/api/reviews", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          alert("게시글 작성 성공");
          navigate("/Review");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("사진은 3개까지만 가능합니다.");
    }
  };

  // 이미지 미리보기
  const handleImageChange = (e) => {
    const imageLists = e.target.files;
    let imageUrlLists = [...imageSrc];
    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }
    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }
    setImageSrc(imageUrlLists);
  };

  // 이미지 미리보기에서 삭제
  const handleDeleteImage = (id) => {
    setImageSrc(imageSrc.filter((_, index) => index !== id));
  };



  return (
    <>
      <Header />
         <Container>
      <Title>
          <div className="subject">육아템 리뷰</div>
          <div className="page">
            <p>작성하기</p>
          </div>
        </Title>
       
        <Place>
          <div className="place">
          
            <form onSubmit={(e) => onSubmit(e)}>
              <input
              id="input-file"
                type="file"
                name="profile_files"
                multiple="multiple"
                style={{display:"none"}}
                onChange={handleImageChange}
              />

              <div className="imageBox">
                <label for="input-file">
                  <BsFillPlusCircleFill 
                  style={{cursor:"pointer",
                  marginLeft:"40px"}} />
                </label>

                {/* 이미지 미리보기 */}
                {imageSrc.map((image, id) => (
                  <div className="img_box_size" key={id}>
                    <img src={image} alt={`${image}-${id}`} />
                    <div className="img_btn">
                    <button onClick={() => handleDeleteImage(id)}>
                      이미지 삭제</button>
                      </div>
                  </div>
                ))}
              </div>
              <div className="mainBox">
                <div className="card-left">
                  <div className="position">
                    <strong>제목</strong>
                    <input
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <MapSearch>
                    <strong>주소</strong>
                    <SearchInput
                      id="address"
                      className="signup-input-form"
                      type="text"
                      placeholder="주소를 입력해주세요"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </MapSearch>

                  <div className="position">
                    <strong>종류</strong>
                    <input
                      type="text"
                      onChange={(e) => setRegion(e.target.value)}
                    />
                  </div>
                </div>
                <div className="card-right">
                  <textarea onChange={(e) => setContent(e.target.value)} />
                </div>
              </div>
              <Btn>
                <button
                  className="btn"
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  취소
                </button>
                <button className="btn" type="submit">
                  등록하기
                </button>
              </Btn>
            </form>
          </div>
        </Place>
        </Container>
        <ChatIcon/>
      <Footer />
    </>
  );
}

const Title = styled.div`
  padding-top: 40px;
  margin-left: 130px;

  .subject {
    color: #a8a8a8;
  }

  .page {
    font-size: 30px;
    font-weight: 700;
  }
`;

const Container = styled.div`
width: 100%;
background-color: #f5f5f5;
  `;

const Place = styled.div`
width: 1200px;
  height: 950px;

  background: white;

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 50px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  border: 1px solid lightgray;
  border-radius: 10px;
  
  .place {
    width: 100%;
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    padding: 10px;
    margin-left: 70px;
    margin-top: 40px;
  }

  .imageBox {
    min-height: 210px;
    max-height: auto;
    height: 290px;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
  }

  .imageBox > label {
    margin-left: 20px;
  }

  .img {
    width: 200px;
    height: 300px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    margin: 20px 0px 20px 40px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    width: 200px;
    height: 220px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    margin: 10px 0px 15px 40px;
  }

  .img_btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 35px;
  
    .img_box_size {
      padding: 0;
    }
   
    button {
     border-radius:20px;
     background-color: transparent !important;
     border: 1px solid #A8A8A8;
     color: #A8A8A8;
    }
  }

  .images {
    width: 90%;
    height: 5%;
    margin: auto;
  }

  .mainBox {
    display: flex;
    margin-left: 50px;
  }

  .card-left > div > input {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    width: 330px;
    height: 50px;
    margin-left: 20px;
    margin-top: 10px;
    padding-left: 15px;
  }

  .card-right {
    width: 600px;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }

  textarea {
    width: 530px;
    height: 364px;
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 400;
    word-break: normal;
    outline: none;
    resize: vertical; /* 상하만 가능 */
  }

  .position {
    margin: 30px 0px 30px 30px;
  }

  .star {
    display: flex;
    margin-left: 30px;
    margin-top: 35px;

    p {
      display: flex;
      margin-top: 3px;
      margin-left: 2px;
    }
  }

  .star > strong {
    margin-top: 2px;
    margin-right: 15px;
  }
`;

const MapSearch = styled.div`
  margin-left: 30px;
  margin-bottom: 20px;
  display: flex;

  .address_btn {
    margin-top: 22px;
    margin-left: 16px;
    
    button {
      border-radius:20px;
      padding: 5px auto;
      background-color: transparent !important;
      border: 1px solid #A8A8A8;
      color: #A8A8A8;
     }
  }

  strong {
    margin-top: 23px;
    
  }

  button {
    display: flex;
  }
`;

const SearchInput = styled.input`
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  width: 330px;
  height: 50px;
  margin-left: 20px;
  outline: none;
`;

const Btn = styled.div`
  display: flex;
  margin-left: 800px;

  .btn {
    width: 30%;
    height: 30px;
    border-radius: 20px;
    color: white;
    background-color: #3c3c3c;
    margin-top: 20px;
    margin-right: 10px;
    padding-top: 9px;
    padding-bottom: 33px;
    border: 0;
    outline: 0;
  }
`;

export default PlaceAdd;
