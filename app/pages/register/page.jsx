"use client";
import styles from "./register_form.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

const getUser = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
export default function register_page(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [cpw , setCPW] = useState("");
  const router = useRouter();

  const handleSubmitt = async (e) => {
    e.preventDefault();
    const { information } =  await getUser();
    if(!username || !password || !email){
      console.log("you are not send email , password or username");
      alert("Username Password of Email are required");
    }
    
    else{
          if(cpw != password ){
            alert("password and cornfirm password is wrong");
          }
          else if (password.length<5){
            alert("password is must be long than 5 characters");
          }

        else{
            try{
              const res = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({ username,password,email }),
              });
              if (res.ok) {
                router.push("/pages/register/verify");
              } else {
                throw new Error("Failed to create a topic");
              }
            }catch(e){
              console.log(error);
            }
          }
      }
  }
  return (
    <div className="register-title">
        
       <form onSubmit={handleSubmitt} className="register-form">
        <div className="register-form-heading">
          <h1 className="title-font">Register Form</h1>
        </div>
        
          <input onChange={(e) => setUsername(e.target.value)} 
          type="text" value={username}
          placeholder="Username"/>
        
          <input onChange={(e) => setEmail(e.target.value)} 
          type="text" value={email}
          placeholder="Email"/>
        
          <input  onChange={(e) => setPassword(e.target.value)} 
          type="password"  value={password}
          placeholder="Password"/>
        
          <input onChange={(e) => setCPW(e.target.value)} 
          type="password"  value={cpw}
          placeholder="Confirm Password"/>
       
        <button className="re_btn" type="submit">
          Register
          </button>
       </form>
    </div>
  );
}