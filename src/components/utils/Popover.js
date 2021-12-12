import { useState, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'

export function PopoverBootstrap(props) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleShow = (event = false) => {
        setShow(true);

        if (event) {
            setTarget(event.target);
        }
    };

    const handleHide = () => {
        setShow(false);
    };
    return (
        < >
            <span ref={ref} onMouseOver={handleShow} onMouseOut={handleHide} className="pointer"> {props.children} </span>

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                <Popover onMouseOver={() => { handleShow() }} onMouseOut={handleHide}>
                    <Popover.Title as="h3">{props.title}</Popover.Title>
                    <Popover.Content>
                        {props.content}
                    </Popover.Content>
                </Popover>
            </Overlay>
        </>
    );
}
