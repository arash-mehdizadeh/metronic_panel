import axios from "axios";

const appVersion = "v1";

const baseURL = axios.create({
    baseURL: "https://quiz-api.roomeet.ir/api/" + appVersion
})

const token = {
    token : "1989|vole7uTliOS5cLr0swhxdB0C3kH4il6rppNi9k1e",

}

var axiosUploadConfig = {
    headers: {
        'Authorization':"Bearer " + token?.token ,
        'Contetnt-Type':"multipart/form-data",
        'Accept': 'application/json',
        'type':"formData",
    }
};

const userLogin = async (data) => {
    try {
        let response =  await baseURL.post(`/login`,data)
        return(response.data)
    } catch (error) {
        console.log(error.message);
    }
}

const examDatails = async (examID) => {
    try {
        let response =  await baseURL.get(`/site/quiz/join/${examID}`)
        return(response.data)
    } catch (error) {
        console.log(error.message);
    }
}

const postFormData = async ( formData ) => {
    try {
        let response =  await baseURL.post(`/site/quiz/file/upload`,formData,axiosUploadConfig)
        return(response.data)
    } catch (error) {
        console.log(error.message);
    }
}
const storeFileURL = async ( fileData ) => {
    console.log(fileData);
    try {
        let response =  await baseURL.post(`/site/quiz/file/store`, fileData , axiosUploadConfig)
        return(response.data)
    } catch (error) {
        console.log(error.message);
    }
}

const quizCreateAPI = async ( formData ) => {
    console.log(baseURL);
    try {
        let response =  await baseURL.post(`/panel/super-admin/quizzes`,formData,axiosUploadConfig)
        return(response.data)
    } catch (error) {
        console.log(error.message);
    }
}

const postPdfFile = async ( formData ) => {
    try {
        let response =  await baseURL.post(`/site/quiz/file/upload`,formData,axiosUploadConfig)
        return(response.data)
    } catch (error) {
        console.log(error.message);
    }
}

const massStoreTest = async( ) => {
    try {
        let response =  await baseURL.post(`/panel/super-admin/questions/mass-store`,{questions:[
            {}
        ],quiz_id:33},axiosUploadConfig)
        
    } catch (error) {
        console.log(error.message);
    }
}



export { quizCreateAPI ,postFormData ,storeFileURL };