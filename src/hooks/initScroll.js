import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function InitScroll({ effect }) {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            var destination = document.querySelector(hash);

            if (destination) {
                destination.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: (effect && (effect === "soft")) ? 'smooth' : 'instant',
            });
        }
    }, [pathname]);

    return null;
}