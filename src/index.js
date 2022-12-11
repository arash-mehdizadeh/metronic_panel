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
import { MultichoiceCorrectionComponent, TestCorrectionComponent } from './components/correctionComponents/multichoiceCorrectionComponent/multichoiceCorrectionComponent';


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
                <Route path="/create-exam" element={
                    <Suspense fallback={<>loading...</>} >
                        <AddExamList/>
                    </Suspense>
                } />
                <Route path="/create-exam/exam-form" element={
                    <Suspense fallback={<>loading...</>} >
                        <ExamFormDetail/>
                    </Suspense>
                } />
                <Route path="/create-exam/pdf-descriptive/:quiz_id/:code" element={
                    <Suspense fallback={<>loading...</>} >
                        <PdfUploadableExam/>
                    </Suspense>
                } />
                        <Route path="/create-exam/pdf-test/:quiz_id/:code" element={
                            <Suspense fallback={<>loading...</>} >
                                <TestExam/>
                            </Suspense>
                        } />
                <Route path="/create-exam/custom-test/:quiz_id/:code" element={
                    <Suspense fallback={<>loading...</>} >
                        <CustomMultiChoiceExam/>
                    </Suspense>
                } />
                <Route path="/create-exam/custom-descriptive/:quiz_id/:code" element={
                    <Suspense fallback={<>loading...</>} >
                        <CustomDescriptiveExam/>
                    </Suspense>
                } />
                <Route path="/create-exam/addUsersToJoinExam" element={
                    <Suspense fallback={<>loading...</>} >
                        <AddUserToExamList />
                    </Suspense>
                } />
                <Route path="/create-exam/addTeacherToJoinExam" element={
                    <Suspense fallback={<>loading...</>} >
                        <AddTeacherToExamList />
                    </Suspense>
                } />
                <Route path="/correction/descriptive/:quiz_id/:code" element={
                    <Suspense fallback={<>loading...</>} >
                        <DescriptiveExamCorrection />
                    </Suspense>
                } />
                <Route path="/correction/pdf-descriptive/:quiz_id/:code" element={
                    <Suspense fallback={<>loading...</>} >
                        <PdfUploadableExamCorrection />
                    </Suspense>
                } />
                <Route path="/correction/pdf-test/:quiz_id/:code" element={
                    <Suspense fallback={<>loading...</>} >
                        <TestCorrectionComponent />
                    </Suspense>
                } />
                <Route path="/correction/custom-test/:quiz_id/:code" element={
                    <Suspense fallback={<>loading...</>} >
                        <MultichoiceCorrectionComponent />
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

