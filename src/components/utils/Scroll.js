import { goTo, openElementAccordion } from '../../utils/utils.js';

export function Scroll(props) {
    var { to, className, children } = props;

    var dataAccordion = props.hasOwnProperty('accordion') ? to : "";

    function scrollTo(e) {
        e.preventDefault();

        goTo(document.querySelector(e.target.hash));
        
        if (e.target.dataset.hasOwnProperty('accordion')) {
            openElementAccordion(e.target.dataset.accordion);
        }
    }

    return (
        <a href={to} className={className} onClick={scrollTo} data-accordion={dataAccordion}>{children}</a>
    )
}
