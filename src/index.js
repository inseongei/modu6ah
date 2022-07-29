import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from './redux/configStore'
import ScrollToTop from './ScrollToTop';
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import ReactGA from 'react-ga';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ID;
ReactGA.initialize(TRACKING_ID);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop />
    <RenderAfterNavermapsLoaded ncpClientId={"nv4f8xvrjm"}>
        <App />
    </RenderAfterNavermapsLoaded>
  </BrowserRouter>
  </Provider>
);


reportWebVitals();
