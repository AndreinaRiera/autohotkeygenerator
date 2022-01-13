import Modal from "@helpfulComponents/Modal";

import { useTranslation, Trans } from 'react-i18next';
import { autohotkeyGenerator } from "@i18n/list";

import BtnTwitter from '@commonComponents/BtnTwitter';
import BtnBuymeacoffee from '@commonComponents/BtnBuymeacoffee';


export default function Developing(props) {
    const blank = {
        target: "_blank",
        rel: "noopener"
    }

    const { t } = useTranslation();

    const { product } = autohotkeyGenerator;

    const twitter = product.socialNetworks.twitter;
    const buymeacoffee = product.socialNetworks.buymeacoffee;

    return (
        <Modal
            className='secondary'
            state={props.show}
            setState={props.setState} 
            title={t("developing.title")}
            footer={<>
                <div className="row">
                    <div className="col m-0 p-0">
                        <BtnTwitter follow="true" tweet="true" />
                    </div>
                    <div className="col-12 col-md-auto m-0 p-0 pt-1">
                        <BtnBuymeacoffee btncolor="secondary" />
                    </div>
                </div>
            </>}
        >
            <Trans
                i18nKey="developing.body"
                components={{
                    p: <p />,
                    updates: <a href="http://" className="link" target="_blank" />,
                    twitter: <a href={twitter} className="link" {...blank} />,
                    buymeacoffee: <a href={buymeacoffee} className="link" {...blank} />
                }}
            />
        </Modal>
    );
}