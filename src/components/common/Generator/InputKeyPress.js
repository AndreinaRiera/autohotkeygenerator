import { useEffect } from "react";

export default function InputKeyPress({stateValue, setStateValue, selectedKeys, setSelectedKeys}) {
    //const [stateValue, setStateValue] = useState("");
    //const [selectedKeys, setSelectedKeys] = useState([]);

    function onKeyDown(e) {
        e.preventDefault();

        var changeKeyVal = {
            Meta    : "Win",
            Control : "Ctrl",
            AltGraph: "AltGr"
        };

        var keyVal = changeKeyVal.hasOwnProperty(e.key) ?  changeKeyVal[e.key] : e.key;

        if((!selectedKeys.includes(keyVal)) && (keyVal !== " ")){
            setSelectedKeys(currentSelectedKeys => ([...currentSelectedKeys, keyVal]));
        }
    }

    useEffect(() => {
        setStateValue(selectedKeys.join(" + "));
    }, [selectedKeys])
    
    function onKeyUp(e) {
        e.preventDefault();
        e.target.blur();
    } 

    function onClick() {
        setSelectedKeys([]);
        setStateValue("");
    }

    function _handleChangeValue(e) {
        e.preventDefault();
        return false;
    }

    return (
        <input 
            type="text" 
            name="activator_text" 
            value={stateValue || ''} 
            onChange={_handleChangeValue} 
            onKeyDown={onKeyDown} 
            onKeyUp={onKeyUp} 
            onClick={onClick} 
            placeholder="Ctrl + d"
            className="form-control" 
            required="required" 
        />
    )
}
