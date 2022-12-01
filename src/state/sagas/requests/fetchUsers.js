import axios from "axios"; 

const url = "http://localhost:4000/getUserOverviewJson.do";

const fetchGetUsers = () => {
  return axios.post(url)
  .then((response) => response.data)
  .catch(function (error) {
    // handle error
    console.log(error);
    return error;
  })
};



export default fetchGetUsers;
