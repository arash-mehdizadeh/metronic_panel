import React ,{ lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import './index.scss';
import AddExamList from './pages/addExam/addExamList';
import PdfUploadableExam from './pages/addExam/examGenerator/pdfUploadableExam';
import CustomMultiChoiceExam from './pages/addExam/examGenerator/customMultiChoiceExam';
import CustomDescriptiveExam from './pages/addExam/examGenerator/customDescriptiveExam';
import TestExam from './pages/addExam/examGenerator/testExam';
import ExamFormDetail from './pages/addExam/examFormDetail/examFormDetail';
import AddUserToExamList from './pages/addUserToJoinList/addUserToExamList/addUserToExamList';
import AddTeacherToExamList from './pages/addUserToJoinList/addTeacherToExamList/addTeacherToExamList';
import DescriptiveExamCorrection from './pages/examCorrection/descriptiveExamCorrection/descriptiveExamCorrection';
import PdfUploadableExamCorrection from './pages/examCorrection/pdfUploadableExamCorrection/pdfUploadableExamCorrection';


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
                        <AddExamList/>
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
                <Route path="/add-exam/customMultichoiceExamGenerator" element={
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
                <Route path="/add-exam/addUsersToJoinExam" element={
                    <Suspense fallback={<>loading...</>} >
                        <AddUserToExamList />
                    </Suspense>
                } />
                <Route path="/add-exam/addTeacherToJoinExam" element={
                    <Suspense fallback={<>loading...</>} >
                        <AddTeacherToExamList />
                    </Suspense>
                } />
                <Route path="/exam-correction/descriptive" element={
                    <Suspense fallback={<>loading...</>} >
                        <DescriptiveExamCorrection />
                    </Suspense>
                } />
                <Route path="/exam-correction/pdfUploadable" element={
                    <Suspense fallback={<>loading...</>} >
                        <PdfUploadableExamCorrection />
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

