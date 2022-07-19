import React, { useState } from "react";


//style
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { FaStar } from "react-icons/fa";
import { AiOutlineFileImage } from "react-icons/ai";

//elements & components
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import Grid from "../../components/elements/Grid";

import axios from "axios";
import io from "socket.io-client";
import { getCookie } from "../../shared/Cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { createCardDB } from '../../redux/modules/card';

import { getStorage, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../shared/firebase";
import { getDownloadURL } from "firebase/storage";

function ReviewAdd() {
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("")
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(files)

  const onSubmit = async (e) =>{
    e.preventDefault();
    e.persist();

    let files = e.target.profile_files.files;
    let formData = new FormData();

    for (let i = 0; i < files.length; i++) { 
      formData.append("imageUrl", files[i]);
    }
    let dataSet = {
      title : title,
      content : content,
      productType : region,
      url : address,
    }

    formData.append('title',title)
    formData.append('content',content)
    formData.append('productType',region)
    formData.append('url',address)
    formData.append("data", JSON.stringify(dataSet));

    await axios.post(
      "http://dlckdals04.shop/api/reviews",formData,
      {
        headers: { Authorization: `Bearer ${getCookie("accessToken")}`,"Content-Type": "multipart/form-data"},
      })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
        console.log(err)
    });

    for (const keyValue of formData) console.log(keyValue); 
  }









































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
            />
              <button type="submit">제출</button>
            </form>


            <div className="imageBox">
              <label htmlFor="profile_img_upload">
                <AiOutlineFileImage />
              </label>

              {/* 이미지 미리보기 */}
              {imageSrc && <img className="img" src={imageSrc} alt="preview-img" />}

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
                <div className="position">
                  <strong>주소</strong>
                  <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

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

            </Btn>
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
    margin: 40px 0px 30px 30px;
  }

  .star {
    margin-left: 30px;
    margin-top: 30px;
  }

  .star > strong {
    margin-right: 15px;
  }
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

export default ReviewAdd;
