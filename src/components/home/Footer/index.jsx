import './style.scss';

export default function Footer() {
    
    return (
        <footer className="bg-success-dark" id="footer">
            <div className="container py-3">
                <div className="row">
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
