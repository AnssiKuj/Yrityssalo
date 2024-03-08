import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Form1 from './Pages/Form1';
import Form2 from './Pages/Form2';
import Form3 from './Pages/Form3';
import Form4 from './Pages/Form4';
import Form5 from './Pages/Form5';
import Form6 from './Pages/Form6';
import LastPage from './Pages/LastPage';
import "./css/form.css";
import "./css/form-page-nav-block.css";
import "./css/form-page-nav.css";
import "./css/form-nav-buttons.css";
import "./css/form-page.css";
import "./css/form-container.css";
import "./css/infobubble-container.css";
import "./css/infobubble.css";
import "./css/front-page-content.css";
import "./css/front-page.css";
import "./css/frontpage-nav-block.css";
import "./css/frontpage-nav.css";
import "./css/not-found-page.css";
import "./css/notification.css";
import "./css/reminder.css";
import "./css/footer.css";
import "./css/clear-storage-btn.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/Form1",
    element: <Form1/>
  },
  {
    path: "/Form2",
    element: <Form2/>
  },
  {
    path: "/Form3",
    element: <Form3/>
  },
  {
    path: "/Form4",
    element: <Form4/>
  },
  {
    path: "/Form5",
    element: <Form5/>
  },
  {
    path: "/Form6",
    element: <Form6/>
  },
  {
    path: "/LastPage",
    element: <LastPage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
