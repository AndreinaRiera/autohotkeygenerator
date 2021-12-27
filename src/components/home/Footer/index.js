import './style.scss';
import { useTranslation } from 'react-i18next';
import { getCurrentLocale, autohotkey, autohotkeyGenerator } from "../../../i18n/list";

import { beautifyURL } from '../../../utils/utils';

export default function Footer() {
    const { t, i18n } = useTranslation();
    const currentLocale = getCurrentLocale(i18n.language);

    const blank = {
        target: "_blank",
        rel: "noopener"
    }

    const documentationURL = autohotkey['documentation']['locales'].hasOwnProperty(currentLocale)
        ? autohotkey['documentation']['locales'][currentLocale]
        : autohotkey['documentation']['url'];

    const { product, company } = autohotkeyGenerator;

    const twitter = product.socialNetworks.twitter;
    const buymeacoffee = product.socialNetworks.buymeacoffee;
    const email = product.email.main;
    const address = company.address;

    return (
        <footer className="bg-success-dark" id="footer">
            <div className="container py-3">
                <div className="row details mt-4 mb-5">
                    <div className="col-12 col-md">
                        <h5> {t("footer.socialNetworks")} </h5>

                        <p><a href={twitter} {...blank} >{beautifyURL(twitter)}</a></p>
                        <p><a href={buymeacoffee} {...blank} >{beautifyURL(buymeacoffee)}</a> </p>
                        <p></p>
                    </div>
                    <div className="col-12 col-md">
                        <h5> {t("footer.contacts")} </h5>

                        <p><a href="#"> {t("footer.newsletter")} </a></p>
                        <address>
                            <p><a href={`mailto:${email}`}>{email}</a></p>
                            <p><a href={`https://www.google.com/maps/place/${address}`} {...blank} > {address}</a></p>
                        </address>
                    </div>
                    <div className="col-12 col-md">
                        <h5> {t("footer.product")} </h5>

                        <p><a href="#"> {t("footer.documentation")} </a></p>
                        <p><a href="#"> {t("footer.prices")} </a></p>
                        <p><a href="#"> {t("footer.terms")} </a></p>
                    </div>
                    <div className="col-12 col-md">
                        <h5> {t("footer.developing")} </h5>

                        <p><a href="#"> {t("footer.resources")} </a></p>
                        <p><a href="#"> {t("footer.crowdfunding")} </a></p>
                        <p><a href="#"> {t("footer.updates")} </a></p>
                    </div>
                </div>

                <hr />

                <div className="row ">
                    <div className="col-12 col-sm-auto ">
                        <a target="_blank" href={buymeacoffee}>
                            <img height={33 + "px"}
                                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=andreinariera&button_colour=97bfbb&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
                        </a>
                    </div>
                    <div className="col-12 col-sm-auto ">
                        <a href={`${documentationURL}/AutoHotkey.htm`} {...blank} className="btn btn-outline-light">
                            {t("footer.bottom.documentation")}
                        </a>
                    </div>

                    <div className="col text-center text-sm-right color-success-light">
                        {t("footer.bottom.made")}
                        <i className="fas fa-heart mx-2"></i>
                        {t("footer.bottom.by")}
                    </div>
                </div>
            </div>
        </footer>
    )
}