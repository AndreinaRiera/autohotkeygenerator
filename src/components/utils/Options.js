export default function Options({list}) {
    const RenderOption = (obj, index) => {
		return <option key={index} value={obj.selectValue} defaultValue={obj.defaultValue || false} readOnly={obj.readOnly || false}>{obj.optionDescription}</option>
	};
    
    return (
        <>
            {
                list.list ? list.list.filter(action => !action.hasOwnProperty('optgroup')).map((action, index) => (
                    RenderOption(action, index)
                )) : ""
            }
            {
                list.optgroups ? list.optgroups.map((optgroup, indexOptgroup) => (
                    <optgroup label={optgroup} key={indexOptgroup}>
                        {
                            list.list.filter(action => (action.hasOwnProperty('optgroup') && (action['optgroup'] == indexOptgroup))).map((action, index) => (
                                RenderOption(action, index)
                            ))
                        }
                    </optgroup>
                )) : ""
            }
        </>
    )
}
