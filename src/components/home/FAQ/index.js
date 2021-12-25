import './style.scss';
import {Accordion, Card} from '../../utils/Accordion';
import {Quote}   from '../../utils/Quote';
import { Scroll } from '../../utils/Scroll';
import { NumericList } from '../../utils/List';

export default function FAQ() {
    return (
        <section className="" id="FAQ">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 ">
                        <Accordion id="accordionFAQ">
                            <Card numb="1" id="Know_which_is_the_path_and_name_of_programs" title="¿Como saber la ruta y nombre de un programa? ">
                                <div className="row">
                                    <div className="col pt-md-4">
                                        <NumericList>
                                            <li>Haz click en el <strong>icono de window</strong> y dentro de la barra de busqueda escribe el <strong>nombre del programa</strong></li>
                                            <li>Luego haga click derecho sobre el programa y seleccion <strong>"Abrir ubicacion del archivo"</strong></li>
                                            <li>Se te abrira una ventana del explorador de archivo, con el acceso directo al programa seleccionado. Haga <strong>click derecho</strong> sobre el y seleccion la opcion <strong>"Propiedades"</strong></li>
                                            <li>En la pestaña <strong>"Acceso directo"</strong> copie el contenido dentro de la opcion <strong>"Destino"</strong>. Eso contiene la ruta y nombre del programa. </li>
                                        </NumericList>
                                    </div>
                                    <div  className="col-5 d-none d-md-block">
                                         <img src="/images/search_program.png" with="100%" alt="Imagen sobre pantalla de computadora" />
                                    </div>
                                </div>
                            </Card>
                            <Card numb="2" id="ending_characters" title="¿Que son los caracteres finales y cuales son? ">
                                <div className="row">
                                    <div className="col pt-md-4">
                                        <Quote cite="AutoHotKey official doc" url="https://www.autohotkey.com/docs/Hotstrings.htm#EndChars" >
                                            A menos que la <Scroll to="#asterisk_option" accordion> opción de asterisco</Scroll> esté en vigor, debe escribir un carácter final después de la abreviatura de una cadena activa para activarla. Los caracteres finales inicialmente consisten en lo siguiente:
                                        </Quote>

                                        <p className="text-center">
                                            {["-", "(", ")", "[", "]", "{", "}", "'", ":", ";", '"', "/", "\\",".","?","!", "Space", "Enter"].map((character, i) => (
                                                <kbd key={i}>{character}</kbd>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                            <Card numb="3" id="asterisk_option" title="¿Que es la opcion de asterisco? ">
                                <div className="row">
                                    <div className="col pt-md-4">
                                        <p>La opcion de asterisco permite que no se necesite un caracter final para activar una abreviatura. Siempre que se detecte la palabra o frase se activara la accion elegida.</p>
                                        <pre className="text-center h5">:*:@g.com::yourEmail@gmail.com</pre>
                                    </div>
                                </div>
                            </Card>
                            <Card numb="4" id="ideas" title="¿Quieres ideas sobre atajos? ">
                                <div className="row">
                                    <div className="col pt-md-4">
                                        
                                    </div>
                                </div>
                            </Card>
                        </Accordion>
                    </div>
                </div>
            </div>    
        </section>
    )
}
