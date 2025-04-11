import React from 'react';
import Header from './components/Header';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error'; 


const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
// const store = createBrowserRouter([{}])


const appRout = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: 'about', 
        element: <ClassCompo />,
      },
    ],
  },
]);

export default appRout; 