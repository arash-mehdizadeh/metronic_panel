import React ,{ lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './index.scss';
import AddingExam from './pages/addingExam/addingExam';
import PdfUploadableExam from './pages/addingExam/examGenerator/pdfUploadableExam';
import CustomMultiChoiceExam from './pages/addingExam/examGenerator/customMultiChoiceExam';
import CustomDescriptiveExam from './pages/addingExam/examGenerator/customDescriptiveExam';
import TestExam from './pages/addingExam/examGenerator/testExam';
import ExamFormDetail from './pages/addingExam/examFormDetail/examFormDetail';


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
                <Route path="/add-exam" element={
                    <Suspense fallback={<>loading...</>} >
                        <AddingExam/>
                    </Suspense>
                } />
                <Route path="/add-exam/exam-form" element={
                    <Suspense fallback={<>loading...</>} >
                        <ExamFormDetail/>
                    </Suspense>
                } />
                <Route path="/add-exam/pdfUploadableExamGenerator" element={
                    <Suspense fallback={<>loading...</>} >
                        <PdfUploadableExam/>
                    </Suspense>
                } />
                <Route path="/add-exam/multichoiceExamGenerator" element={
                    <Suspense fallback={<>loading...</>} >
                        <CustomMultiChoiceExam/>
                    </Suspense>
                } />
                <Route path="/add-exam/testExamGenerator" element={
                    <Suspense fallback={<>loading...</>} >
                        <TestExam/>
                    </Suspense>
                } />
                <Route path="/add-exam/descriptiveExamGenerator" element={
                    <Suspense fallback={<>loading...</>} >
                        <CustomDescriptiveExam/>
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

