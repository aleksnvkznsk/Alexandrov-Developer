import style from '@/styles/home.module.css'
import { motion } from 'framer-motion';

const AnimationHeader = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 }
    }
}

const AnimationText = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.3 }
    }
}

const AnimationButton = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.4 }
    }
}

const Home = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={style.intro} id="home">
            <div className={style.introContainer}>
                <motion.p variants={AnimationHeader} className={style.introHeader}>Alexandrov Developer</motion.p>
                <motion.p variants={AnimationText} className={style.introText}>Привет, я Александров Александр. Я начинающий фронтенд разработчик.<br />
                    Вы можете посмотреть мои работы на странице, а так же заказать нужный вам проект.</motion.p>
                <div className={style.introLinks}>
                    <motion.a href="https://t.me/aleks_nvkz" target=" blank" variants={AnimationButton} className={style.introLinksHref}>Telegram</motion.a>
                    <motion.a href="https://github.com/aleksnvkznsk" target=" blank" variants={AnimationButton} className={style.introLinksHref}>GitHub</motion.a>
                    <motion.a href="mailto:aleksandrov.developer@gmail.com" target=" blank" variants={AnimationButton} className={style.introLinksHref}>Mail</motion.a>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;