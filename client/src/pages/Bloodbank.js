import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/bloodbank.css";
import axios from "axios";
import donateuser from "./donateuser";
const Bloodbank = () => {
  
  const [users,setUsers]=useState([]);
  const geetinfo=async()=>{
    try {
      const res = await axios.get(
        "http://localhost:8080/api/v1/user/getallusers",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log(res.data);
  
        setUsers(res.data);
        // console.log(res.data.data);
       
      
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(()=>{
    geetinfo();
  },[])

  console.log(users);
  return (
   
     
    <div>
        <Layout>
          {/* <h1 class="heading">Blood Bank</h1>
          <div class="blood">
            <div class="blood1h">Name</div>
            <div className="blood1h">Blood Group</div>
            <div className="blood1h">Phone no</div>
          </div>
          <div class="blood">
            <div class="blood1">Nandha</div>
            <div className="blood1">O+</div>
            <div className="blood1">9399390112</div>
          </div>
          <div class="blood">
            <div class="blood1">Ram</div>
            <div className="blood1">B+</div>
            <div className="blood1">6494512399</div>
          </div>
          <div class="blood">
            <div class="blood1">kalyan</div>
            <div className="blood1">AB</div>
            <div className="blood1">8932113247</div>
          </div>
          <div class="blood">
            <div class="blood1">kalyan</div>
            <div className="blood1">AB</div>
            <div className="blood1">8932113247</div>
          </div>
          <div class="blood">
            <div class="blood1">krishna</div>
            <div className="blood1">A+</div>
            <div className="blood1">9902193245</div>
          </div>
          <div class="blood">
            <div class="blood1">vikas</div>
            <div className="blood1">B+</div>
            <div className="blood1">6932001243</div>
          </div>
          <div class="blood">
            <div class="blood1">Hari</div>
            <div className="blood1">O+</div>
            <div className="blood1">8632093167</div>
          </div> */}
          <h1 class="heading">Blood Bank</h1>
          <div class="blood">
            <div class="blood1h">Name</div>
            <div className="blood1h">Blood Group</div>
            
          </div>
          <div>
          {users
  .filter((user) => user.donateblood===true && !user.isAdmin && !user.isDoctor)
  .map((user) => (
    <div className="blood" key={user.id}>
      <div className="blood1">{user.email}</div>
      <div className="blood1">{user.bloodtype}</div>
      {/* <div className="blood1">{user.phone}</div> */}
    </div>
  ))}
          </div>
         
          
        </Layout>

    </div>
  )
}

export default Bloodbank