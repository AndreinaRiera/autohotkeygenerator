import 'bootstrap/dist/css/bootstrap.min.css';
import ModalBootstrap from 'react-bootstrap/Modal';

export default function Modal(props) {
    return (
        <ModalBootstrap show={props.state} onHide={() => props.setState(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalBootstrap.Header closeButton>
                <ModalBootstrap.Title >
                    {props.title}
                </ModalBootstrap.Title>
            </ModalBootstrap.Header>
            <ModalBootstrap.Body>
                {props.children}
            </ModalBootstrap.Body>
            {/* <ModalBootstrap.Footer></ModalBootstrap.Footer> */}
        </ModalBootstrap>
    )
}
