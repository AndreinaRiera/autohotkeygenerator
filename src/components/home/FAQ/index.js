import './style.scss';
import { useTranslation } from 'react-i18next';
import { getCurrentLocale, autohotkey } from "../../../i18n/list";

import {Accordion, Card} from '../../utils/Accordion';
import {Quote}   from '../../utils/Quote';
import { Scroll } from '../../utils/Scroll';
import { NumericList } from '../../utils/List';

export default function FAQ() {
    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];

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
                                            <li> {t("FAQ.path_and_name_of_programs.list.1")} </li>
                                            <li> {t("FAQ.path_and_name_of_programs.list.2")} </li>
                                            <li> {t("FAQ.path_and_name_of_programs.list.3")} </li>
                                            <li> {t("FAQ.path_and_name_of_programs.list.4")} </li>
                                        </NumericList>
                                    </div>
                                    <div  className="col-5 d-none d-md-block">
                                         <img src="/images/search_program.png" with="100%" alt="Imagen sobre pantalla de computadora" />
                                    </div>
                                </div>
                            </Card>
                            <Card numb="2" id="ending_characters" title={t("FAQ.ending_characters.title")}>
                                <div className="row">
                                    <div className="col pt-md-4">
                                        <Quote cite={t("FAQ.ending_characters.cite")} url={`${documentationURL}/Hotstrings.htm#EndChars`} >
                                            {t("FAQ.ending_characters.quote.1")} <Scroll to="#asterisk_option" accordion> {t("FAQ.ending_characters.quote.2")} </Scroll> {t("FAQ.ending_characters.quote.3")}
                                        </Quote>

                                        <p className="text-center">
                                            {["-", "(", ")", "[", "]", "{", "}", "'", ":", ";", '"', "/", "\\",".","?","!", "Space", "Enter"].map((character, i) => (
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
