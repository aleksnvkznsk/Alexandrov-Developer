import style from '@/styles/navbar.module.css'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const Animation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.1 }
        }
    }

    const AnimationHref = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.3 }
        }
    }
    const AnimationHeader = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.4 }
        }
    }

    return (
        <div className={style.container}>
            <div className={style.menuOpen} onClick={() => setOpen(prev => !prev)}>
                <div className={style.bar1}></div>
                <div className={style.bar2}></div>
                <div className={style.bar3}></div>
            </div>
            <AnimatePresence>
                {
                    open && (
                        <div className={style.containerNav} onClick={() => setOpen(prev => !prev)}>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={Animation}
                                className={style.menu_container}>

                                <motion.p className={style.header} variants={AnimationHeader}>Alexandrov Developer</motion.p>

                                <motion.a className={style.href} variants={AnimationHref} href="#home">Главная</motion.a>

                                <motion.a className={style.href} variants={AnimationHref} href="#portfolio">Проекты</motion.a>

                                <motion.a className={style.href} variants={AnimationHref} href="#contacts">Контакты</motion.a>

                            </motion.div>
                        </div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default NavBar;