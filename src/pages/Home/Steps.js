export default function Steps(props) {
    const {number} = props;

    const step_text = props.hasOwnProperty('step') ? props.step : props.children;
    const inner_html = (props.step && props.children) ? props.children : "";

    const StepText = function () {
      if(props.hasOwnProperty('step')){
        return <span dangerouslySetInnerHTML={{__html: step_text}}></span>;
      }else{
        return props.children;
      }
    }
    
    return (
        <div className="step">
          <div className="row">
            <div className="col">
              <span className="number">{number}</span>
              <StepText />
            </div>
            {inner_html || ""}
          </div>
        </div>
    )
}
