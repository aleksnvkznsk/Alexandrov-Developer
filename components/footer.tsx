import style from '@/styles/footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerInner}>
                    <div className={style.links}>
                        <a className={style.linksHref} href="https://t.me/aleks_nvkz" target=" blank">Telegram</a>
                        <a className={style.linksHref} href="https://github.com/aleksnvkznsk" target=" blank">GitHub</a>
                        <a className={style.linksHref} href="mailto:aleksandrov.developer@gmail.com" target=" blank">Mail</a>
                    </div>
                    <div className={style.footerData}>© Aleksandrov Aleksandr Novosibirsk 2023</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;