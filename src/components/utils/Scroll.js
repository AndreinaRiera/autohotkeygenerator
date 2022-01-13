import { goTo, openElementAccordion } from '@functions/utils';

export function Scroll(props) {
    var { to, className, children} = props;

    var dataAccordion = props.hasOwnProperty('accordion') ? to : "";
    var link = (props.hasOwnProperty('link') && (props.link === false)) ? "" : "link";

    function scrollTo(e) {
        e.preventDefault();

        goTo(document.querySelector(e.target.hash));
        
        if (e.target.dataset.hasOwnProperty('accordion')) {
            openElementAccordion(e.target.dataset.accordion);
        }
    }

    return (
        <a href={to} className={`${className} ${link}`} onClick={scrollTo} data-accordion={dataAccordion}>{children}</a>
    )
}
