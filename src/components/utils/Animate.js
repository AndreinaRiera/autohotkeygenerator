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

    var CustomElement = (props.hasOwnProperty('element') && props.element) ? props.element : 'div';

    return (
        <CustomElement ref={ref} style={{margin:'0 !important', padding: '0 !important'}} {...props} className={` element_animation ${animated} ${props.className}`}>
            {props.children}
        </CustomElement>
    )
} 
 
