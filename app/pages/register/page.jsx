"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./register_form.css";
import NewBar from "@/components/NewBar";
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
}

export default function register_page(){
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [cpw , setCPW] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const handleSubmitt = async (e) => {
    e.preventDefault();
    const { information } =  await getUser();
    let name = document.getElementById("f_name").valuel + document.getElementById("l_name").value;
    let state = document.querySelector('input[name="status"]:checked').value;
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
                body: JSON.stringify({ username,password,email,phone,name,state}),
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
  return (<>
  <NewBar/>
    <div className="register-title">
        
       <form onSubmit={handleSubmitt} className="register-form">
        <div className="register-form-heading">
          <h1 className="title-font">Register Form</h1>
        </div>
      
          <input onChange={(e) => setUsername(e.target.value)} 
          type="text" value={username}
          placeholder="Username" className="username-box"/>
          <input onChange={(e) => setEmail(e.target.value)} 
          type="text" value={email}
          placeholder="Email" className="email-box"/>
        
        <div className="name-form"  >
          <input className="firstname-box"  
          type="text" placeholder="Firstname" id="f_name" />

          <input className="lastname-box"
           type="text" placeholder="Lastname" id="l_name" />
        </div>

          <input type="text" placeholder="Tel." 
          onChange={(e) => setPhone(e.target.value)} value={phone}
          className="tel-box"/>
        
          <input  onChange={(e) => setPassword(e.target.value)} 
          type="password"  value={password}
          placeholder="Password" className="pw-box"/>
        
          <input onChange={(e) => setCPW(e.target.value)} 
          type="password"  value={cpw}
          placeholder="Confirm Password" className="pw-box"/>

        <div className="status-form" >

          <input className="r1-box" 
          type="radio"  name="status"  value="custommer"/>
          <label className="l1">customer</label>

          <input  className="r2-box"
          type="radio" name="status" value="seller"/>
          <label className="l2">seller</label>
        </div>
        <button className="re_btn" type="submit">
          Register
          </button>
       </form>
    </div>
    </>
  );
}