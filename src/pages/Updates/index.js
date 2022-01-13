import "./style.scss";
import { useState } from 'react';

import { useTranslation, Trans } from 'react-i18next';
import { autohotkeyGenerator } from "@i18n/list";

import { CheckList } from '@helpfulComponents/List';

import ModalNewsletterForm from '@commonComponents/ModalNewsletterForm';

export default function Updates() {
    const { t } = useTranslation();
    const [stateModalNewsletter, setstateModalNewsletter] = useState(false);

    const blank = {
        target: "_blank",
        rel: "noopener"
    }

    const { product } = autohotkeyGenerator;
    const twitter = product.socialNetworks.twitter;
    const buymeacoffee = product.socialNetworks.buymeacoffee;

    function RenderVersion({ version, updates }) {
        return <div class="card my-5">
            <div class="card-header">
                <h5 className="font-weight-bold">
                    Version {version}
                </h5>
            </div>
            <div class="card-body">
                <CheckList>
                    {updates.map(li => (
                        <li>
                            <b> {t('updates.versions.' + li + '.title')}: </b>
                            {t('updates.versions.' + li + '.description')}
                        </li>
                    ))}
                </CheckList>
            </div>
        </div>
    }

    function RenderTrans(val) {
        return <Trans
            i18nKey={val}
            components={{
                p: <p className="m-0" />,
                b: <b />,
                newsletter: <span className="pointer link" onClick={() => { setstateModalNewsletter(true) }} />,
                twitter: <a href={twitter} className="link" {...blank} />,
                buymeacoffee: <a href={buymeacoffee} className="link" {...blank} />
            }}
            values={{
                productName: product['name']
            }}
        />
    }

    return (
        <div className="container my-5">
            <div className="row text-center mb-2">
                <div className="col">
                    <p><h1>{t('updates.title')}</h1></p>

                    {RenderTrans("updates.subtitle")}
                </div>
            </div>


            <RenderVersion version="1" updates={["edition", "accounts", "multiplesActions"]} />
            <RenderVersion version="2" updates={["activeWindow", "iterations", "desktop", "browser"]} />

            <div className="row text-center pb-5">
                <div className="col">
                    {RenderTrans("updates.footer")}
                </div>
            </div>

            <ModalNewsletterForm show={stateModalNewsletter} setState={setstateModalNewsletter} />
        </div >
    )
}