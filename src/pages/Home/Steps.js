export default function Steps(props) {
    const {number} = props;

    const step_text = props.hasOwnProperty('step') ? props.step : props.children;
    const inner_html = (props.step && props.children) ? props.children : "";
    
    return (
        <div className="step">
          <div className="row">
            <div className="col">
              <span className="number">{number}</span>
              {step_text}
            </div>
            {inner_html || ""}
          </div>
        </div>
    )
}
