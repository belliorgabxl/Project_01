import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/page.module.css'
import Link from "next/link"
import NewBar from '@/components/NewBar'
export default function Home() {
  return (
    <>
    <NewBar/>
      <Head>
        <title>PorHub Website</title>
      </Head>
      <div className={styles.title}>
        <div className={styles.head_text}>
          <h1>Homepage</h1>
        </div>
      

      <div className={styles.head_text}>
            
      </div>
        <p>ยินดีต้อนรับเข้าสู่เว็บไซต์</p>
        <p>โปรเจ็คนี้กำลังพัฒนา By Telecommunication Engineering</p>
      <div className={styles.pic}>
        <div><Image src="/room1.jpg" width={300} height={300} alt="picture"></Image></div>
        <div><Image src="/room2.jpg" width={300} height={300} alt="picture"></Image></div>
        <div><Image src="/room3.jpg" width={300} height={300} alt="picture"></Image></div>
        <div><Image src="/room4.jpg" width={300} height={300} alt="picture"></Image></div>
      </div>
      </div>
    
      
    </>
  )
}