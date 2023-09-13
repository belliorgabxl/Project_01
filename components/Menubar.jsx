import Link from "next/link"
import Image from "next/image"
import styles from "./styles/Menubar.css"

export default function Menubar(){
    return(
        <>
       <div className="menubar">
            <div className="bg_icon">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        <div>

        </div>
        <div>
            <Link href="./Notice_page">Notice</Link>
        </div>

        <div>
        <Link href="./Service_page">Service</Link>
        </div>
    
        <div>
            <Link href="./AboutUs_page">About Us</Link>
        </div>

        <div>
            <Link href="./NearMe_page">Near Me</Link>
        </div>

        <div>
            <Link href="./RoomType_page">Room Type</Link>
        </div>
       </div>
       </>
    )
}