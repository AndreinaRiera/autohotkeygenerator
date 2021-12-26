import './style.scss';
import { useTranslation } from 'react-i18next';
import Animate from '../../utils/Animate';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <section className="bg-success-light" id="contact">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-white text-center">
                        <h4>{t("contact.title")}</h4>
                        
                        <Animate entrance="jello-horizontal" scroll="true" delay="500"  className="mt-3">
                            <a href="mailto:admin@autohotkeyfan.com" className="btn btn-dark">{t("contact.btnContact")}</a>
                        </Animate>
                    </div>
                </div>
            </div>    
        </section>
    )
}
