import './style.scss';

export function NumericList({ children }) {
    return (
        <ol className="numeric_awesome">
            {children}
        </ol>
    )
}
