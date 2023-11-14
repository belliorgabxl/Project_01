import styles from "./Mainpage.module.css"
import Image from "next/image"

export default function MainPage(){

return(
    <div>
    <div className={styles.title}><h1>Mainpage login member</h1></div>

    <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/room1.jpg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
    </div>
    <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/room2.jpg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
    </div>
    <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/room3.jpg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
    </div>
    <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/room4.jpg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
    </div>
    <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/room1.jpg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
    </div>
    <div className={styles.content}>
                <div className={styles.container_listone}>
                    <div className={styles.container_title} >title</div>

                    <div className={styles.container_picture}>
                    <Image src="/room1.jpg" width={348} height={208}></Image>
                    </div>
                </div>

                <div className={styles.container_listtwo}>
                    <div className={styles.container_price}>price</div>

                    <div className={styles.container_content}>content</div>

                    <div  className={styles.container_another}>
                        <div className={styles.container_type}>type</div>
                        <div className={styles.container_feature}>feature</div>
                    </div>
                </div>
    </div>
    </div>
)

}