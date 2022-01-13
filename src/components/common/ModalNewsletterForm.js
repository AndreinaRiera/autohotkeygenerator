import Modal from "@helpfulComponents/Modal";

import { useTranslation, Trans } from 'react-i18next';
import { autohotkeyGenerator } from "@i18n/list";

import BtnTwitter from '@commonComponents/BtnTwitter';
import BtnBuymeacoffee from '@commonComponents/BtnBuymeacoffee';

import NewsletterForm from '@commonComponents/NewsletterForm';

export default function Developing(props) {
    const { t } = useTranslation();

    const { product } = autohotkeyGenerator;

    return (
        <Modal
            className='secondary'
            state={props.show}
            setState={props.setState}
            title={t("newsletterForm.modal.title")}
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

            <NewsletterForm className="mt-4 mb-2" />

            <div className="row">
                <div className="col text-center mb-4">
                    <Trans
                        i18nKey="newsletterForm.modal.body"
                        components={{
                            p: <p />,
                            b: <b />
                        }}
                        values={{ productName: product.name }}
                    />
                </div>
            </div>
        </Modal>
    );
}