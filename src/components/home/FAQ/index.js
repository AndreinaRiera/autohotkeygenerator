import './style.scss';
import { useTranslation, Trans } from 'react-i18next';
import { getCurrentLocale, autohotkey } from "../../../i18n/list";

import { Accordion, Card } from '@helpfulComponents/Accordion';
import { Quote } from '@helpfulComponents/Quote';
import { Scroll } from '@helpfulComponents/Scroll';
import { NumericList } from '@helpfulComponents/List';

export default function FAQ() {
    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];


    const RenderLis = () => {
        var li = [];
        for (var i = 1; i < 5; i++) {
            li.push(<li key={i} >
                <Trans
                    i18nKey={`FAQ.path_and_name_of_programs.list.${i}`}
                    components={{ strong: <strong /> }}
                />
            </li>);
        }

        return li;
    };

    return (
        <section className="" id="FAQ">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 ">
                        <Accordion id="accordionFAQ">
                            <Card numb="1" id="Know_which_is_the_path_and_name_of_programs" title={t("FAQ.path_and_name_of_programs.title")}>
                                <div className="row">
                                    <div className="col pt-md-4">
                                        <NumericList>
                                            <RenderLis />
                                        </NumericList>
                                    </div>
                                    <div className="col-5 d-none d-md-block">
                                        <img src="/images/search_program.png" with="100%" alt="Imagen sobre pantalla de computadora" />
                                    </div>
                                </div>
                            </Card>
                            <Card numb="2" id="ending_characters" title={t("FAQ.ending_characters.title")}>
                                <div className="row">
                                    <div className="col pt-md-4">
                                        <Quote cite={t("FAQ.ending_characters.cite")} url={`${documentationURL}/Hotstrings.htm#EndChars`} >
                                            <Trans
                                                i18nKey="FAQ.ending_characters.quote"
                                                components={{
                                                    scroll: <Scroll to="#asterisk_option" accordion />
                                                }}
                                            />
                                        </Quote>

                                        <p className="text-center">
                                            {["-", "(", ")", "[", "]", "{", "}", "'", ":", ";", '"', "/", "\\", ".", "?", "!", "Space", "Enter"].map((character, i) => (
                                                <kbd key={i}>{character}</kbd>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                            <Card numb="3" id="asterisk_option" title={t("FAQ.asterisk_option.title")}>
                                <div className="row">
                                    <div className="col pt-md-4">
                                        <p>{t("FAQ.asterisk_option.text")}</p>
                                        <pre className="text-center h5">:*:@g.com::{t("FAQ.asterisk_option.yourEmail")}@gmail.com</pre>
                                    </div>
                                </div>
                            </Card>
                            <Card numb="4" id="ideas" title={t("FAQ.ideas.title")}>
                                <div className="row">
                                    <div className="col pt-md-4">

                                    </div>
                                </div>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
