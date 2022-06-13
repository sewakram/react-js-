import axios from "axios";
const APIURL="  http://localhost:3001/enquiry/";
function getAllEnquires(){
    return axios.get(APIURL);
}
function getEnquiryById(id){
    return axios.get(`${APIURL}${id}`);
}
function deleteEnquiry(id){
    return axios.delete(`${APIURL}${id}`);
}
function addEnquiry(data){
    return axios.post(APIURL,data);
}
function editEnquiry(id,data){
    return axios.put(`${APIURL}${id}`,data)
}
export { getAllEnquires, getEnquiryById, deleteEnquiry, addEnquiry, editEnquiry };