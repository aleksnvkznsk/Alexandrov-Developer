import style from '@/styles/header.module.css'
import { motion } from 'framer-motion';

const AnimationHeader = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 }
    }
}

const Header = () => {
    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            variants={AnimationHeader}
            className={style.header}>
            <div className={style.headerContainer}>
                <div className={style.headerInner}>
                    <div className={style.headerLogo}>Alexandrov Developer</div>
                    <nav className={style.nav}>
                        <a className={style.navLink} href="#home">Главная</a>
                        <a className={style.navLink} href="#portfolio">Проекты</a>
                        <a className={style.navLink} href="#contacts">Контакты</a>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
}
export default Header;