import { useTranslation, Trans } from 'react-i18next';
import useScript from "@hooks/useScript";

import { autohotkeyGenerator } from "@i18n/list";

export default function BtnFollowTwitter(props) {
    useScript("https://platform.twitter.com/widgets.js", {
        charset: "utf-8"
    });

    const twitter = autohotkeyGenerator.product.socialNetworks.twitter;

    return (
        <>
            {props.follow
                ? <a href={`${twitter}?ref_src=twsrc%5Etfw`} className="twitter-follow-button" data-show-count="false" hidden={true}>twitter follow button</a>
                : ""}

            {props.tweet
                ? <div className=""><a href="https://twitter.com/intent/tweet?screen_name=&ref_src=twsrc%5Etfw" className="twitter-mention-button" data-show-count="false" hidden={true}>twitter mention button</a></div>
                : ""}
        </>
    )
}
