import Modal from "@helpfulComponents/Modal";

import { Trans } from 'react-i18next';
import { autohotkeyGenerator } from "@i18n/list";

import BtnTwitter from '@commonComponents/BtnTwitter';
import BtnBuymeacoffee from '@commonComponents/BtnBuymeacoffee';

import NewsletterForm from '@commonComponents/NewsletterForm';

import { CheckList } from '@helpfulComponents/List';


export default function ModalFirstHotkey(props) {
    const productName = autohotkeyGenerator.product.name;

    return (
        <Modal
            className='secondary'
            size='lg'
            state={props.show}
            setState={props.setState}
            title={<Trans i18nKey="generator.firstHotkey.title" values={{ productName }} />}
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
            <div className="row mt-4 mb-5">
                <div className="col-12 text-center">
                    <Trans
                        i18nKey="generator.firstHotkey.body"
                        components={{
                            p: <p />,
                            li: <li />,
                            b: <b />,
                            br: <br />,
                            h5: <h5 className="mb-3" />,
                            CheckList: <CheckList className="text-left mb-5 mt-4" size="small" />
                        }}
                        values={{ productName }}
                    />
                </div>
            </div>

            <NewsletterForm />
        </Modal>
    );
}