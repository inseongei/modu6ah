## 🎈 프로젝트 소개

<br/>

<img width="597" alt="스크린샷 2022-08-03 오후 1 18 20" src="https://user-images.githubusercontent.com/103277726/182523186-8850363a-c764-49df-95c1-9065bcb4a20d.png">

<br/>

<b> 육아 참여자들이 학습, 체험, 놀이 등 다양한 활동을 함께 참여할 수 있도록 소통의 장을 열어주는 서비스입니다

<br/>

## 🗓 프로젝트 기간
👩 [김숙영](https://github.com/Maiowol)  🧑 [정인성](https://github.com/inseongei)  
#### 2022.06.24 ~ 2022.08.02 ( 6주 ) 





<br/>

## 🛠 서비스 아키텍쳐
![image](https://user-images.githubusercontent.com/87432361/182505336-4b93faf5-d4a4-4625-b217-cf82f9edd109.png)

<br/>

## ✨ 기능

#### - 로그인 & 회원가입
####  💡 이메일 인증을 통한 회원가입
####  💡 카카오 소셜 로그인으로 쉽게 로그인 할 수 있습니다. 

<br/>

#### - 유저간의 소통을 위한 서비스
####  💡 socket.io를 이용한 1:1 실시간 채팅 <br/>
####  💡 카테고리별 게시글 crud (다중 이미지 & 별점 포함), 댓글 작성을 통한 유저들 간의 소통을 활성화시켰습니다.

<br/>

#### - 북마크 기능
####  💡 게시글 북마크 기능을 활용한 마이페이지 북마크 정보 조회가 가능합니다.

<br/>

#### - 카카오 맵을 통한 장소 조회
####  💡 다음 우편 주소를 입력하면 카카오 맵 위에 핀을 찍어 위치를 쉽게 파악할 수 있습니다.

<br/>

#### - 무한 스크롤
####  💡 각 카테고리별로 게시글을 쉽게 볼 수 있도록 무한 스크롤을 사용했습니다.

<br/>

#### - 게시글 검색
####  💡 검색창의 키워드를 입력하면 게시글 검색이 용이하도록 했습니다.

<br/>

## 🚀 기술 스택
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">   <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">  <img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">  <img src="https://img.shields.io/badge/kakaoMap-FFCD00?style=for-the-badge&logo=Google Maps&logoColor=white">  

<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">  ![image](https://user-images.githubusercontent.com/87432361/182510977-9bd5d8c2-49c5-4a73-affa-a2e6eae08001.png)
 <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">  
 
 ## 📓 라이브러리
 
 
<details>
<summary><b> 프로젝트에 사용된 라이브러리😀 </summary>
<div markdown="1">

|  이름 | 사용 이유  | 버전  |
|---|---|---|
|  react-daum-postcode | 주소 검색  |  3.1.1  |
|  axios | 서버 & 클라이언트 데이터통신  |  0.27.2 |
|  animate.css |  애니메이션 효과 | 4.1.1  |
|  react-scroll-to-bottom | 채팅창 스크롤 자동하단  | 4.2.0  |
|  react-redux |  편리한 상태 관리 | 8.0.2 |
|  redux-thunk | 비동기 통신 미들웨어  | 2.4.1  |
|  react-toastify |  토스트 알림 기능 |  8.2.0 |
|  socket.io-client |  실시간 채팅 기능 | 4.5.1 |
| sweetalert2  |  디자인 된 알림창 | 11.4.23 |
| react-modal  | 모달창 띄우기  |  3.15.1 |
| react-datepicker  |  달력 띄우기 | 4.8.0  |
| react-infinite-scroll-component  |  무한 스크롤 구현 | 6.1.0  |
| styled-components  | 스타일 css  |  5.3.5 |
| react-router-dom  |  라우터 |  6.3.0 |
| react-icons  |  리액트 아이콘 |  4.4.0 |
|  react-device-detect | 모바일 감지 | 2.2.2  |
</div>
</details>

## 💢 트러블 슈팅
<details>
<summary><b> Socket.io 특정 사용자에게 데이터가 오지 않는 문제 </summary>
<div markdown="1">
<br/>
🔴 문제 상황 <br/>
<br/>
Client 가 특정 경로로 보낸(emit) 메시지를 Server 측에서 특정 경로로 받고(on) 다시 다른 경로로  전송(emit)해주는데 
전체로 돌려주게 되면<br/> 데이터가 들어오지만 특정 사람(user_id 또는 nickname)을 지정하면특정 사람에게 데이터가 오지 않는 문제 발생 <br/>
<br/>

🟠 발생 원인 및 해결 시도 <br/>
<br/>
![스크린샷 2022-08-04 오후 3 53 15](https://user-images.githubusercontent.com/87432361/182876213-247f64d1-3951-429f-82b5-41f8e1720ee4.png) <br/>

사진속 io.emit으로 코드를 짜기전 아래의 5가지의 특정 조건을 붙혔다<br/>
- io.to(‘user’).emit ( X )
- io.in(‘user’).emit ( X )
- socket.to(‘user’).emit ( X )
- socket.broadcast.to.emit ( X )
- socket.broadcast.in.emit ( X )
-> 발신자를 제외한 모두 , 한명의 사용자만이 가지고 있는 고유한 소켓ID 로 데이터를 보낼려 했으나 실패
<br/>

🟢 문제 해결 <br/>

소켓 라이브러리의 버그로 판단하여 io.emit으로 전체로 데이터 값을 받은 뒤 프론트에서 필터링 하기로 결정<br/>

![image](https://user-images.githubusercontent.com/87432361/182880035-d1183188-9a75-40c7-8e30-0eba0b497a5f.png) <br/>
- 하나의 메시지에는 이러한 데이터가 포함 되어 있다 이 데이터를 이용하여 전체로 받은뒤 2가지 조건을 걸어 필터링<br/>

1 . 데이터를 보낸 사람과 나의 닉네임이 다를 경우에만 알림 토스트를 생성하여 자신에게 알림이 오는것을 막음<br/>
2 . 데이터를 받는 사람과 나의 닉네임이 같은 경우에만 알림 토스트를 생성하여 해당 유저에게만 알림이 가도록 설정
</div>
</details>

<details>
<summary><b> socket.io 채팅 중복 문제 </summary>
<div markdown="1">
🔴 문제 상황 <br/>

실시간 채팅을 하게 되면 한번 작성한 채팅이 2번 또는 4번 .. 8번 .. 으로 찍히는 문제 발생  <br/>

🟠 발생 원인 및 해결 시도 <br/>

- 특정 이벤트 경로로 이벤트를 발생 시키고 데이터를 받고 보내게 되는데 발생한 이벤트를 제거해주지 않았던 것이였다
- 따라서 적을 때마다 계속 랜더링이 되고 그 이벤트는 계속 쌓이게 된다

🟢 문제 해결 <br/>

![image](https://user-images.githubusercontent.com/87432361/182883795-28f1ec6a-2185-46e2-a08b-ed04683e1d61.png) <br/>
socket.off로 이벤트에 대한 리스너를 제거해주면 채팅 중복 문제가 해결 된다


</div>
</details>

## 🎧 유저 & 개발자 피드백 
<details>
<summary><b> 유저 피드백 1번 ( 채팅창 개선 )</summary>
<div markdown="1">

</div>
</details>

## 🎨 와이어 프레임 
⭐ [Figma](https://www.figma.com/file/6oxe17NH1VuhHdZxdj9X9N/%ED%95%AD%ED%95%B499_v1?node-id=0%3A1)  
 
 










