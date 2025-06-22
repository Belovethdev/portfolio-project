
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './assets/LayOut/MainLayout';
import LandingPage from './assets/page/LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;


