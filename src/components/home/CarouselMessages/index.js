import './style.scss';
import { useTranslation } from 'react-i18next';

import { Scroll } from '@helpfulComponents/Scroll';

export default function CarouselMessages() {
    const { t } = useTranslation();

    return (
        <section className="bg-success-light">
            <div id="CarouselMessages" className="carousel carousel-text slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                           <p>{t("CarouselMessages.keyboard")}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>{t("CarouselMessages.ideas.1")} <Scroll to="#ideas" className="text-white" accordion>{t("CarouselMessages.ideas.2")}</Scroll></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>{t("CarouselMessages.openPage")}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>{t("CarouselMessages.email")}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>{t("CarouselMessages.program")}</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#CarouselMessages" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#CarouselMessages" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}
