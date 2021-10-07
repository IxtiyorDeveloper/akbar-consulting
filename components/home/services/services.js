import styles from "../../../styles/home/services/services.module.scss"
import {FaRegCheckCircle} from "react-icons/fa";

function Services(props) {
    return (
        <div className={styles.container} id="servislar">
            <div className={styles.title}>
                Xorijdagi OTMga hujjat topshirish jarayonida ko’rsatiladigan xizmatlar:
            </div>
            <div className={styles.wrapper}>
                <div>
                    <FaRegCheckCircle className={styles.icon}/>
                </div>
                <div className={styles.list}>
                    Har bir mijozga menejerlar tomonidan Bepul konsultatsiya;
                </div>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <FaRegCheckCircle className={styles.icon}/>
                </div>
                <div className={styles.list}>
                    Hujjatlarni nostrifikatsiya qilish;
                </div>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <FaRegCheckCircle className={styles.icon}/>
                </div>
                <div className={styles.list}>
                    Mijozga sovg`a sifatida bir yillik sug’urta polisi;
                </div>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <FaRegCheckCircle className={styles.icon}/>
                </div>
                <div className={styles.list}>
                    Ota-onasi vafot etgan, boquvchisini yo’qotgan,
                    nogiron, kam ta’minlangan oila farzandlariga firma to’lovidan 10-100% gacha chegirmalar;
                </div>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <FaRegCheckCircle className={styles.icon}/>
                </div>
                <div className={styles.list}>
                    Mijozga Talaba bo’lganidan keyin kerak bo’ladigan hujjatlarni
                    (buyruq, ma’lumotnoma, talabalik guvohnomasi va boshqalar) OTMga
                    bormay turib olishda yordam;
                </div>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <FaRegCheckCircle className={styles.icon}/>
                </div>
                <div className={styles.list}>
                    Siz orqali kompaniya xizmatlaridan foydalangan do’stingiz uchun qo’shimcha bonus-pul mablag’i;
                </div>
            </div>
            <div className={styles.wrapper}>
                <div>
                    <FaRegCheckCircle className={styles.icon}/>
                </div>
                <div className={styles.list}>
                    Xorijdagi OTMga borish uchun aviabilet va temir yo`l chiptalarini olishda yordam;
                </div>
            </div>
        </div>
    );
}

export default Services;