import { useRef, useState } from "react";
import '@/styles/styles.css';

const faqs = [
    {
        id: 1,
        header: "Cайт для свадебного фотографа",
        text: "Добро пожаловать в проект - разработка сайта для свадебного фотографа! Создан для того, чтобы помочь свадебному фотографу продвигать свои услуги и привлекать новых клиентов. В наше время большинство людей ищут услуги через интернет, и сайт является эффективным инструментом для привлечения новых клиентов. Сайт предоставляет удобный и функциональный инструмент для свадебного фотографа, чтобы презентовать свои работы и услуги в интернете. Предлагаю разработку сайта с уникальным дизайном и интуитивно понятным интерфейсом, который поможет клиентам быстро и легко найти информацию о ваших услугах и связаться с вами. Готов помочь вам создать интересный, доступный и функциональный сайт, который будет привлекать новых клиентов и помогать развивать ваш бизнес.",
        text1: "TypeScript SCSS",
        text2: "www.vovagutsalo.ru",
    },
];


const AccordionItem = (props: any) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const { handleToggle, active, faq } = props;
    const { header, id, text, text1, text2 } = faq;

    return (
        <div>
            <header
                className={active === id ? "active" : ""}
                onClick={() => handleToggle(id)}
            >
                <h2 className="header">{header}</h2>
                <span><img className="arrow" src="arrow1.svg" /></span>
            </header>
            <div
                ref={contentEl}
                className={`collapse ${active === id ? "show" : ""}`}
                style={
                    active === id
                        ? { height: contentEl?.current?.scrollHeight! }
                        : { height: "0px" }
                }
            >
                <div className="container">
                    <p className="text">{text}</p>
                    <p className="text1">{text1}</p>
                    <a href="https://www.vovagutsalo.ru" target=" blank" className="text2">{text2}</a>
                </div>
            </div>
        </div>
    );
};

export const Accordion = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index: any) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    return (
        <article>
            {faqs.map((faq, index) => {
                return (
                    <AccordionItem
                        key={index}
                        active={active}
                        handleToggle={handleToggle}
                        faq={faq}
                    />
                );
            })}
        </article>
    );
};