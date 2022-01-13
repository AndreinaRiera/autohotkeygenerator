import ModalBootstrap from 'react-bootstrap/Modal';

export default function Modal(props) {
    return (
        <ModalBootstrap className={props.className} show={props.state} onHide={() => props.setState(false)} size={ props.size || `md`} aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalBootstrap.Header closeButton>
                <ModalBootstrap.Title >
                    {props.title}
                </ModalBootstrap.Title>
            </ModalBootstrap.Header>
            <ModalBootstrap.Body>
                {props.children}
            </ModalBootstrap.Body>
            {   props.footer ? 
                <ModalBootstrap.Footer>
                    {props.footer}
                </ModalBootstrap.Footer>
                : ""
            }
        </ModalBootstrap>
    )
}
