import axios from "axios";
const APIURL="  http://localhost:3001/courses/";
function getAllCourses(){
    return axios.get(APIURL);
}
function getProductById(id){
    return axios.get(`${APIURL}${id}`);
}
function deleteProduct(id){
    return axios.delete(`${APIURL}${id}`);
}
function addProduct(data){
    return axios.post(APIURL,data);
}
function editProduct(id,data){
    return axios.put(`${APIURL}${id}`,data)
}
export { getAllCourses,getProductById,deleteProduct,addProduct,editProduct};