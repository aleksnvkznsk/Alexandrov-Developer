import style from '@/styles/contacts.module.css'
import { motion } from 'framer-motion';

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

const AnimationText = {
    hidden: {
        y: 10,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.3 },
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
        transition: { delay: 0.4 },
    }
}

const Contacts = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            className={style.contacts} id="contacts">
            <div className={style.contactsConteiner}>
                <motion.h1 variants={AnimationHeader} className={style.contactsHeader}>Контакты</motion.h1>
                <div className={style.href}>
                    <motion.h1 variants={AnimationText} className={style.contactsText}>GitHub</motion.h1>
                    <motion.h1 variants={AnimationHref} className={style.contactsHref}>https://github.com/aleksnvkznsk</motion.h1>
                </div>
                <div className={style.href}>
                    <motion.h1 variants={AnimationText} className={style.contactsText}>Telegram</motion.h1>
                    <motion.h1 variants={AnimationHref} className={style.contactsHref}>+7 913 298 57 12 / aleks_nvkz</motion.h1>
                </div>
                <div className={style.href}>
                    <motion.h1 variants={AnimationText} className={style.contactsText}>Mail</motion.h1>
                    <motion.h1 variants={AnimationHref} className={style.contactsHref}>aleksandrov.developer@gmail.com</motion.h1>
                </div>
            </div>
        </motion.div>
    );
}

export default Contacts;