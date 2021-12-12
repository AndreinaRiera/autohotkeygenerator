export default function Card({title, description, children}) {
    return (
        <div className="col-12 col-md-6 col-xl-3 pb-4">
            <div className="card text-center" >
                <div className="card-body">
                    <h5 className="card-title color-primary">{title}</h5>
                    <p className="text-muted small">{description}</p> 
                </div>
                <div className="card-footer text-white bg-secondary">
                    <code>{children}</code>
                </div>
            </div>    
        </div>
    )
}
