import './style.scss';

export default function Footer() {

    return (
        <footer className="bg-success-dark" id="footer">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-sm-auto ">
                        <a target="_blank" href="https://www.buymeacoffee.com/andreinariera">
                            <img height={33 + "px"} src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=andreinariera&button_colour=97bfbb&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
                        </a>
                    </div>
                    <div className="col-12 col-sm-auto ">
                        <a href="https://www.autohotkey.com/docs/AutoHotkey.htm" target="_blank" className="btn btn-outline-light">
                            Documentacion oficial
                        </a>
                    </div>

                    <div className="col text-center text-sm-right color-success-light">
                        Hecho con <i className="fas fa-heart"></i> por y para amantes de la productividad
                    </div>
                </div>
            </div>
        </footer>
    )
}
