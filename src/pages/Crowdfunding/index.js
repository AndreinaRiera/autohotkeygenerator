import { useTranslation, Trans } from 'react-i18next';
import { Link } from "react-router-dom";
import { autohotkeyGenerator } from "@i18n/list";

import BtnTwitter from '@commonComponents/BtnTwitter';
import BtnBuymeacoffee from '@commonComponents/BtnBuymeacoffee';

export default function Crowdfunding() {
    const { product } = autohotkeyGenerator;

    const { t, i18n } = useTranslation();
    document.body.dir = i18n.dir();

    const blank = {
        target: "_blank",
        rel: "noopener"
    }

    function RenderTrans({ name }) {
        return <Trans
            i18nKey={name}
            components={{
                p: <p />,
                b: <b />,
                updates: <Link to="/updates" className="link" />,
                twitter: <a href={product.socialNetworks.twitter} className="link" {...blank} />,
                buymeacoffee: <a href={product.socialNetworks.buymeacoffee} className="link" {...blank} />,
                mailto: <a href={`mailto:${product.email.main}`} className="link" />
            }}
            values={{
                productName: product.name,
                email: product.email.main
            }}
        />
    }


    return (
        <div className="container text-center mb-5 pb-5">
            <h1 className="my-5"> <RenderTrans name="crowdfunding.title" /> </h1>

            <div className="row">
                <div className="col">
                    <RenderTrans name="crowdfunding.text" />
                </div>
            </div>

            <div className="row mb-5">
                <div className="col">
                    <RenderTrans name="crowdfunding.contact" />
                </div>
            </div>

            <div className="row">
                <div className="col text-right">
                    <a href={`mailto:${product.email.main}`} className="btn btn-dark">{t("contact.btnContact")}</a>
                </div>
                <div className="col">
                    <BtnTwitter follow="true" tweet="true" />
                </div>
                <div className="col text-left">
                    <BtnBuymeacoffee />
                </div>
            </div>
        </div>
    )
}
