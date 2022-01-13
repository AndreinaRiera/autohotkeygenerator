import { useTranslation } from 'react-i18next';

export default function NewsletterForm(props) {
    const { t } = useTranslation();

    return (
        <>
            <div id="mc_embed_signup" className={props.className}>
                <form action="https://hotmail.us6.list-manage.com/subscribe/post?u=292cfc0103a9fa26e4760d54d&amp;id=903451f2e9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <label for="mce-EMAIL">{t("newsletterForm.label")}</label>
                        <p style={{ fontSize: '12px', color: '#494949', marginTop: '-12px', marginBottom: '15px' }}>
                            {t("newsletterForm.subtitle")}
                        </p>

                        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder={t("newsletterForm.placeholder")} required />
                        <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                            <input type="text" name="b_292cfc0103a9fa26e4760d54d_903451f2e9" tabindex="-1" />
                        </div>
                        <div className="clear foot" style={{ paddingLeft: '5px' }}>
                            <input type="submit" value={t("newsletterForm.btn")} name="subscribe" id="mc-embedded-subscribe" className="button" />
                        </div>
                        <p>
                            <a href="http://eepurl.com/hKTI3D" title="Mailchimp - email marketing made easy and fun">
                                <img className="referralBadge" alt="Mailchimp - email marketing made easy and fun" style={{ width: '150px', margin: '10px' }} src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                            </a>
                        </p>
                    </div>
                </form>
            </div >
        </>
    )
}


