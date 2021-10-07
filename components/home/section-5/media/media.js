import styles from '../../../../styles/home/section-5/media/media.module.scss'


function Media() {
    return (
        <div>
            <div className={styles.w60}>
                <div className={styles.facebook}>
                    <img src='./svg/facebook.svg' alt="f" className={styles.facebook1}/>
                    <span className={styles.mar}>
                facebook
                   </span>
                </div>
                <div className={styles.telegram}>
                    <img src='./svg/telegram.svg' alt="jj" className={styles.telegram1}/>
                    <span className={styles.mar}>
                    telegram
                    </span>
                </div>
                <div className={styles.youtube}>
                    <img src='./svg/youtube.svg' alt="hh" className={styles.youtube1}/>
                    <span className={styles.mar}>
                    youtube
                    </span>
                </div>
                <div className={styles.instagram}>
                    <img src='./svg/instagram.svg' className={styles.instagram1}/>
                    <span className={styles.mar}>
                    instagram
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Media;