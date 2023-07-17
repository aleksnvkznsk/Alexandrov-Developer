import style from '@/styles/projects.module.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Accordion } from './accordion';

const AnimationHeader = {
    hidden: {
        y: 10,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 },
    }
}

const iPhoneAnimation = {
    hidden: {
        y: -10,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.4 },
    }
}

const MacBookAnimation = {
    hidden: {
        y: 10,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.4 },
    }
}

const Projects = () => {

    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            className={style.projects} id="portfolio">
            <div className={style.projectsConteiner}>
                <motion.p variants={AnimationHeader} className={style.projectsHeader}>Проекты</motion.p>
                <div className={style.projectsInfo}>
                    <motion.img variants={iPhoneAnimation} src="iPhone.png" alt="" className={style.img} />
                    <motion.img variants={MacBookAnimation} src="MacBook.png" alt="" className={style.img} />
                </div>

                {/* <div className={style.infomation}>
                    <div className={style.container}>
                        <p className={style.infomationHeader}>Cайт для свадебного фотографа</p>
                        <div className={style.infomationHeaderArrow} onClick={() => setOpen(prev => !prev)}>{open ? <img className={style.arrow} src="arrow2.svg" /> : <img className={style.arrow} src="arrow1.svg" />}</div>
                    </div>
                    <div>
                        {open && (
                            <div>
                                <p className={style.infomationText}>
                                    Добро пожаловать в проект - разработка сайта для свадебного фотографа!
                                </p>
                                <p className={style.infomationText}>Создан для того, чтобы помочь свадебному фотографу продвигать свои услуги и привлекать новых клиентов.</p>
                                <p className={style.infomationText}>В наше время большинство людей ищут услуги через интернет, и сайт является эффективным инструментом для привлечения новых клиентов. Сайт предоставляет удобный и функциональный инструмент для свадебного фотографа, чтобы презентовать свои работы и услуги в интернете.</p>
                                <p className={style.infomationText}>Предлагаю разработку сайта с уникальным дизайном и интуитивно понятным интерфейсом, который поможет клиентам быстро и легко найти информацию о ваших услугах и связаться с вами.
                                    Готов помочь вам создать интересный, доступный и функциональный сайт, который будет привлекать новых клиентов и помогать развивать ваш бизнес.</p>
                                <p className={style.infomationlanguages}>TypeScript SCSS</p>
                                <a href="https://www.vovagutsalo.ru" target=" blank" className={style.href}>www.vovagutsalo.ru</a>
                            </div>
                        )}</div>
                        
                </div> */}

                <Accordion />
            </div>
        </motion.div >
    );
}

export default Projects;