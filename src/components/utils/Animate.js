import { useRef, useState, useEffect } from 'react';
import visibleOnScroll from '../../hooks/useOnScroll';

export default function Animate(props) {

    const ref       = useRef();
    const isVisible = props.hasOwnProperty('scroll') ? visibleOnScroll(ref) : true;
    
    const delay    = props.hasOwnProperty('delay') ? props.delay : 0;
    const entrance = props.hasOwnProperty('entrance') ? props.entrance : "";
    const exit     = props.hasOwnProperty('exit') ? props.exit : "";

    const [animated, setStateAnimated] = useState("");

    useEffect(() => { 
        if(isVisible){
            setTimeout(() => {
                setStateAnimated("animated "+entrance);
            }, delay);
        }else{
            setStateAnimated(exit);
        }
    }, [isVisible])

    return (
        <div ref={ref} {...props} className={` ${animated} ${props.className}`}>
            {props.children}
        </div>
    )
}
 
