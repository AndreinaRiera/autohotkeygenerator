import './style.scss';

export function NumericList({ children }) {
    return (
        <ol className="numeric_awesome">
            {children}
        </ol>
    )
}

export function CheckList({ className, children, size }) {
    return (
        <ul className={`check_list ${className} ${size}`}>
            {children}
        </ul>
    )
}