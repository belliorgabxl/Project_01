"use client";
import styles from "./login_form.css";
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
export default  function login_page(){
  const [user_login,getUsername] = useState("");
  const [pass_login,getPassword] = useState("");
  const router = useRouter();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const user_list = [];
    const pass_list = [];
    const {users} = await getUser();
    let user_value = 0;let pass_value = 0;
      users.map((u) => (
        user_list.push(u.username)
      ));
      users.map((u) => (
        pass_list.push(u.password)
      ));
    for (let i = 0 ; i<user_list.length;i++){
      if(user_list[i] == user_login){
        user_value = 1;
      }
      if(pass_list[i] == pass_login){
        pass_value=1;
      }
    }
    // check value username&password  1 or 0
    
    if (user_value == 1 && pass_value == 1){
      alert("Login Success!!");
      try{
          router.push("/");
      }catch(e){
        console.log(error);
      }
    }
    else if(!user_login ) {
      alert("Username Required.");
    }
    else if(!pass_login) {
      alert("Password Required.");
    }
    else if(!user_login && !pass_login){
      alert("Password & Username are required.");
    }
    else{
      alert("Username or Password is Wrong.");
    }
  }
    return(
        <div className="login-title">
       <form onSubmit={loginSubmit} className="login-form">
        <div className="register-form-heading">
          <h1 className="title-font">Login Form</h1>
        </div>
          <input  onChange={(e) => getUsername(e.target.value)}
          value={user_login}
          type="text" 
          placeholder="Username"/>
          <input onChange={(e) => getPassword(e.target.value)}
          value={pass_login}
          type="password"  
          placeholder="Password"/>
       
        <button className="log_btn" type="submit">
          Login
          </button>
       </form>
    </div>
    )
}