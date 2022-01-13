import './style.scss';
import { useTranslation } from 'react-i18next';
import Animate from '@helpfulComponents/Animate';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="bg-success-light" id="contact">
            <div className="container py-5">
                <div className="row py-4">
                    <div className="col-12 text-white text-center">
                        <h4>{t("contact.title")}</h4>
                        
                        <Animate on="scroll" entrance="jello-horizontal" delay="500"  className="mt-3">
                            <a href="mailto:admin@autohotkeyfan.com" className="btn btn-dark">{t("contact.btnContact")}</a>
                        </Animate>
                    </div>
                </div>
            </div>    
        </section>
    )
}
