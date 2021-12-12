import './style.scss';
import Animate from '../../utils/Animate';

export default function Contact() {
    return (
        <section className="bg-success-light" id="contact">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-white text-center">
                        <h4>¿No encuentras el activador o la accion que necesitas?  ¡Avisanos y lo agregamos! </h4>
                        
                        <Animate entrance="jello-horizontal" scroll="true" delay="500"  className="mt-3">
                            <a href="mailto:admin@autohotkeyfan.com" className="btn btn-dark">Contactar</a>
                        </Animate>
                    </div>
                </div>
            </div>    
        </section>
    )
}
