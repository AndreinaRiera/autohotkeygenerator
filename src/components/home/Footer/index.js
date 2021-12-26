import './style.scss';
import { useTranslation } from 'react-i18next';
import { getCurrentLocale, autohotkey } from "../../../i18n/list";

export default function Footer() {
    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];

    return (
        <footer className="bg-success-dark" id="footer">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-sm-auto ">
                        <a target="_blank" href="https://www.buymeacoffee.com/andreinariera">
                            <img height={33 + "px"} src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=andreinariera&button_colour=97bfbb&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
                        </a>
                    </div>
                    <div className="col-12 col-sm-auto ">
                        <a href={`${documentationURL}/AutoHotkey.htm`} target="_blank" className="btn btn-outline-light">
                            {t("footer.documentation")}
                        </a>
                    </div>

                    <div className="col text-center text-sm-right color-success-light">
                        {t("footer.madeBy")}
                    </div>
                </div>
            </div>
        </footer>
    )
}
