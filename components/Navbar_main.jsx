import styles from "./styles/Nav_main.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav_main(){
    return(
        <>
        <nav className={styles.navbar}>
            <div className={styles.mainbar}>
                <div className={styles.mainbar_logo}>
                <Link href="/mainpage"><Image src="/logo_house.png" width={60} height={55} alt='logo'></Image></Link>
                </div>
                <div className={styles.mainbar_title}>
                    <Link href="/mainpage">PorHub</Link>
                </div>
                <div className={styles.mainbar_search1}>
                    <div className={styles.mainbar_search2}>
                        <Image className="search_img" src="/search.png" 
                    width={35} height={35} alt='logo'></Image>
                    <input type="search" className={styles.search} name =""
                    placeholder="  Search Room" id=""></input>
                    </div>
                </div>

            
            </div>

            <div className={styles.menubar}>
                <div  className={styles.burger}>
                    <div className={styles.layer}></div>
                    <div className={styles.layer}></div>
                    <div className={styles.layer}></div>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/Notice">Notice</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/Service">Service</Link>
                </div>

                <div className={styles.menulist}>
                <Link href="/pages/AboutUs">About Us</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/NearMe">Near Me</Link>
                </div>

                <div className={styles.menulist}>
                    <Link href="/pages/RoomType">Room Type</Link>
                </div>

            </div>
        </nav>
        </>
    )
}