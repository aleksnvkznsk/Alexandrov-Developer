import style from "@/styles/project.module.css";

const Project2 = () => {
  return (
    <div className={style.project}>
      <h1 className={style.projectHeader}>Трезвый водитель 24/7</h1>
      <img src="project2Phone.png" alt="" className={style.imgPhone} />
      <img src="project2pc.png" alt="" className={style.imgPC} />
      <p className={style.projectText}>
        В некоторых случаях водителям автомобилей приходится отказываться от
        поездки на своем автомобиле из-за различных причин, например, из-за
        усталости или употребления спиртных напитков. Однако существует услуга,
        которая может помочь в таких ситуациях - Трезвый водитель. Теперь вам не
        нужно бросать свой автомобиль где-то до утра или рисковать своей
        безопасностью, садясь за руль в нетрезвом или уставшем состоянии.
      </p>
      <a
        className={style.projectLink}
        href="https://www.vashvoditel42.ru"
        target=" blank"
      >
        www.vashvoditel42.ru
      </a>
    </div>
  );
};

export default Project2;
