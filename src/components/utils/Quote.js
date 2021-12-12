export function Quote(props) {
    const {cite} = props;

    return (
        <figure className={`text-center ${props.color || "color-success"}`}>
            <blockquote 
                className={`mb-1 ${props.size || "h5"}`} 
                cite={props.url || ""}
            >
                {props.children}
            </blockquote>
            <figcaption>— <cite>{cite}</cite></figcaption>
        </figure>
    )
}
