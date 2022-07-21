import React, { useState } from "react";

//style
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineFileImage } from "react-icons/ai";

//elements & components
import { FaStar } from "react-icons/fa";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import Grid from "../../components/elements/Grid";
import Modal from "../../modal/Map/Modal";

import axios from "axios";
import { getCookie } from "../../shared/Cookie";
import { useNavigate } from "react-router-dom";

function PlaceAdd() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("")
  const [place, setplace] = useState("");
  const [location, setLocation] = useState("");
  const [imageSrc, setImageSrc] = useState([]);

  const navigate = useNavigate();

  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  };

  const textList = [
    '1.0',
    '2.0',
    '3.0',
    '4.0',
    '5.0',
  ];

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [hovered, setHovered] = useState(null);

  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  // axios.Post 버튼
  const onSubmit = async (e) => {
    e.preventDefault();
    e.persist();
    let files = e.target.profile_files.files;
    let formData = new FormData();
    // 반복문 돌려서 다중 이미지 처리
    for (let i = 0; i < files.length; i++) {
      formData.append("imageUrl", files[i]);
    }

    console.log(files.length)

    // 제목,내용,장소,별점 데이터 => 폼데이터 변환
    formData.append('title', title)
    formData.append('content', content)
    formData.append('region', region)
    formData.append('location', location)
    formData.append('star', '3')

    // formData.append('url', address)

    if (files.length < 6) {
      await axios.post(
        "http://dlckdals04.shop/api/places", formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data"
          },
        })
        .then((res) => {
          console.log(res)
          navigate('/place')
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      alert('사진은 5개까지만 가능합니다.')
    }
  }

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

  //위치 모달
  const RegionsData = (data) => {
    // console.log(data);
    setRegion(data);
  };

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <Grid maxWidth="1440px" height="100%" margin="0 auto" padding="0 12px">
        <Place>
          <div className="place">
            <div className="images">
              <div className="title">대표이미지</div>
            </div>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type="file"
                name="profile_files"
                multiple="multiple"
                onChange={handleImageChange}
              />
              {/* <button type="submit">제출</button> */}

              <div className="imageBox">
                <label htmlFor="profile_img_upload">
                  <AiOutlineFileImage />
                </label>

                {/* 이미지 미리보기 */}
                {imageSrc.map((image, id) => (
                  <div key={id}>
                    <img src={image} alt={`${image}-${id}`} />
                    <button onClick={() => handleDeleteImage(id)}>삭제</button>
                  </div>
                ))}

              </div>
              <div className="mainBox">
                <div className="card-left">
                  <div className="position">
                    <strong>제목</strong>
                    <input
                      type="text"
                      onChange={(e) =>
                        setTitle(e.target.value)}
                    />
                  </div>
                 
                  {/* kakaoMap */}
                  <MapSearch>
                    <strong>주소</strong>
                    <SearchInput
                     id="address"
                     className="signup-input-form"
                     type="text"
                     placeholder="주소를 입력해주세요"
                     value={region}
                   />
                   <div className="address_btn">
                   <button className="signup-btn-company" 
                  onClick={openModal}>
                    주소 검색
                  </button>
                  <Modal
                    open={modalOpen}
                    close={closeModal}
                    header="주소 검색"
                    addressData={RegionsData}
                  />
                   </div>
                  </MapSearch>

                  <div className="position">
                    <strong>장소</strong>
                    <input
                      type="text"
                      placeholder="ex) 뽀로로파크, ㅇㅇㅇ"
                      onChange={(e) =>
                        setLocation(e.target.value)}
                    />
                  </div>
                  {/* <KakaoMap
                    searchPlace={place}
                  /> */}
                 
                  <div className='star'>
                    <strong>별점</strong>
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10,
                            cursor: "pointer"
                          }}
                        />
                      )
                    })}
                  
                  </div>

                </div>
                <div className="card-right">
                  <textarea 
                  onChange={(e) =>
                 setContent(e.target.value)} />
                </div>
              </div>
              <Btn>
                <button
                  className="btn"
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  취소{" "}
                </button>
                <button className="btn"
                  type="submit"
                >
                  등록하기
                </button>
              </Btn>
            </form>
          </div>
        </Place>
      </Grid>
      <Footer />
    </>
  );
}

const Place = styled.div`
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
    width: 100%;
    background-color: lightgray;
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
    height: 220px;
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
    margin: 20px 0px 20px 40px;
  }

  .images {
    width: 90%;
    height: 5%;
    margin: auto;
  }

  .mainBox {
    display: flex;
    margin-left: 200px;
  }

  .card-left > div > input {
    border: 1px solid #e4e4e4;
    border-radius: 10px;
    width: 330px;
    height: 50px;
    margin-left: 20px;
  }

  .card-right {
    width: 700px;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  textarea {
    width: 500px;
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
    margin-left: 30px;
    margin-top: 30px;
  }

  .star > strong {
    margin-right: 15px;
  }
`;

const MapSearch = styled.div`
margin-left: 28px;
margin-bottom: 20px;
display:flex;

.address_btn{
  margin-top: 12px;
  margin-left: 12px;
}

strong{
  margin-top: 13px;
}
 
button{ 
 display:flex;
}
`;

const SearchInput = styled.input`
border: 1px solid #e4e4e4;
border-radius: 10px;
width: 330px;
height: 50px;
margin-left: 20px;
outline: none;

::placeholder {
  padding-left: 8px;
}
`;

const InfoBox = styled.div`
margin-bottom: 10px;
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

const HiddenText = styled.p`
  // position: absolute;
  // top: 50px;
  // left: 50%;
  // width: 130px;
  // height: 30px;
  // padding-top: 7px;
  // transform: translate(-50%, -50%);
  // color: white;
  // background-color: #1f8ce6;
  // border-radius: 4px;
  // font-size: 16px;

  ${({ show }) => (show ? `display:block` : `display: none`)}
`;

export default PlaceAdd;
