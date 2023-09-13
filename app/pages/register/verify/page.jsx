import styles from "./verify.css"
import Image from "next/image"

export default function verify(){
    return(
    <div className="title-verify">
            <div className="content-verify">
                <h1>Register Success</h1>
                <div><Image src="/green_tick.png"
                 width={70} height={70} alt="picture"></Image></div>
            </div>
    </div>
    )
}