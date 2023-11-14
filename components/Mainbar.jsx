import Link from "next/link"
import Image from "next/image"
import "./styles/Mainbar.css"

export default function Mainbar(){
    return(
        <>
      <nav className="nav1">
        <div className="logo" >
        <a href="/"><Image src="/logo_house.png" width={50} height={50} alt='logo'></Image></a>
        <Link href="/">PorHub</Link>
        </div>

        <div>
        </div>
      
         <div className="search">
            <Image className="search_img" src="/search.png" 
            width={35} height={35} alt='logo'></Image>
            <input type="search" name =""
            placeholder="Search Room" id=""></input>
        </div>

        <div>
        </div>
        <div className="register_btn">
            <Link href="/pages/register">Register</Link>
        </div>

        <div className="login_btn">
            <Link href="/pages/login">Login</Link>
        </div>
       </nav> 
      </>
    )
    }
