import './style.scss';
import { Scroll } from '../../utils/Scroll';

export default function CarouselMessages() {
    return (
        <section className="bg-success-light">
            <div id="CarouselMessages" className="carousel carousel-text slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption">
                           <p>¡Personaliza tu teclado para reconfigurarlo como mas te convenga!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>¿Quieres fantasticas ideas de atajos y acortadores? <Scroll to="#ideas" className="text-white" accordion>¡Tenemos muchas para ti, haz click aquí!</Scroll></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>Agrega un hotkey para abrir esta pagina y tu archivo .ahk ¡Asi podras agregar mas atajos en el momento que necesites!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>Crea acortadores para textos que usas frecuentemente, como tu correo o nombre completo</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-caption">
                           <p>Asigna combinaciones de tecla para abrir tus programas frecuentes y paginas web</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#CarouselMessages" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#CarouselMessages" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}
