import React ,{ lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './index.scss';


const Dashboard = lazy(() => import('./pages/dashboard/dashboard'));
const App = lazy(() => import('./App'));
const SuperUser = lazy(() => import('./pages/superUser/superUser.jsx'));


const Routing = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Suspense fallback={<>loading...</>} >
                        <App/>
                    </Suspense>
                } />
                <Route path="/superuser" element={
                    <Suspense fallback={<>loading...</>} >
                        <SuperUser/>
                    </Suspense>
                } />
            </Routes>
        </BrowserRouter>
        
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
);

