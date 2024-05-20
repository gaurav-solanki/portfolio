import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const UserList = () => {
  const [data, updateData] = useState([])
  useEffect(()=>{
    // API call to get user list
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(response => {
        const data = response.data.results;
        updateData(data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]) 
  
  return (
    <div className="flex items-center justify-center relative z-10 py-14 dark:bg-gray-800 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
        <div className="gap-6 mx-auto max-w-5xl grid grid-cols-3 ">
          {data.map((item, index) => (
            <UserCard key={index} item={item} />
          ))}
        </div>
    </div>
  );
};

export default UserList;