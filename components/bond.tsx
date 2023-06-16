import style from '@/styles/bond.module.css'

const Bond = () => {
    return (
        <div className={style.container}>
            <a href="https://t.me/aleks_nvkz" target=" blank"><img className={style.imgwrite} src="/write.svg" /><img className={style.imgtext} src="/text.svg" /></a>
        </div>
    );
}

export default Bond;