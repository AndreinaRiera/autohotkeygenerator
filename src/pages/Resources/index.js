import "./style.scss";

import IframeCoverImg from "./IframeCoverImg";

import { useTranslation, Trans } from 'react-i18next';
import { getCurrentLocale, autohotkey, autohotkeyGenerator } from "@i18n/list";

export default function Resources() {
    const { product } = autohotkeyGenerator;

    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];

    const videoID = `qUR2YN-i1p4`;

    const resources = [
        {
            title: "React JS",
            description: `react`,
            /* src: [225, 230], */
            image: "",
            documentation: "https://reactjs.org/"
        },
        {
            title: "react-i18next",
            description: `i18n`,
            image: "",
            documentation: "https://react.i18next.com/"
        },
        {
            title: "Bootstrap - react-bootstrap",
            description: `bootstrap`,
            image: "",
            documentation: 'https://react-bootstrap-v4.netlify.app/'
        },
        {
            title: "Autohotkey",
            description: `autohotkey`,
            image: "",
            documentation: documentationURL
        },
        {
            title: "Craco",
            description: `craco`,
            image: "",
            documentation: 'https://github.com/gsoft-inc/craco'
        },
        {
            title: "animista.net",
            description: `animista`,
            image: "/images/resourcesCovers/animista.png",
            documentation: "https://animista.net/"
        },
        {
            title: "react-select",
            description: `select`,
            image: "",
            documentation: 'https://react-select.com/'
        },
        {
            title: "sass",
            description: `sass`,
            image: "",
            documentation: 'https://sass-lang.com/'
        },
        {
            title: "sweetalert2",
            description: `sweetalert2`,
            image: "",
            documentation: 'https://sweetalert2.github.io/'
        },
        {
            title: "Freepik",
            description: `freepik`,
            image: "",
            documentation: 'https://www.freepik.es/'
        },
        {
            title: "Pixabay",
            description: `pixabay`,
            image: "",
            documentation: 'https://pixabay.com/sound-effects/'
        },
        {
            title: "Termsfeed",
            description: `termsfeed`,
            image: "",
            documentation: 'https://www.termsfeed.com/terms-conditions-generator/'
        }
    ];






    const isEven = n => n % 2 === 0;

    return (
        <>
            <div className="container my-5" id="resources">
                <p className="text-center my-5"><h1>{t('resources.title')}</h1></p>

                {
                    resources.map(({ title, description, src, image, documentation }, index) => (
                        <section key={index} className="row my-5">
                            {/* <div className={`col-12 col-lg-4 ${isEven(index) ? 'order-1' : 'order-1'}`}>
                                {
                                    src
                                        ? <IframeCoverImg title={title} image={image} src={`https://www.youtube.com/embed/${videoID}?start=${src[0]}&end=${src[1]};rel=0`} />
                                        : <img src={image} alt={title} />
                                }

                            </div> */}
                            <div className={`col ${isEven(index) ? 'order-2' : 'order-2 text-left'}`}>
                                <h2> <a href={documentation} className="link" target="_blank" rel="noopener noreferrer"> {title} </a></h2>
                                <p>
                                    <Trans
                                        i18nKey={`resources.resources.${description}`}
                                        components={{
                                            p: <p />,
                                            b: <b />
                                        }}
                                        values={{
                                            productName: product['name']
                                        }}
                                    />
                                </p>
                            </div>
                        </section>
                    ))
                }
            </div>
        </>
    )
}
