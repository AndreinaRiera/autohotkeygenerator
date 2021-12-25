import Select from 'react-select'

export default function CustomSelect(props) {
    return (
        <Select styles={{
            menu: (provided, state) => ({
                ...provided,
                width: 330
            }),
            control: (provided, state) => ({
                ...provided,
                minHeight: '34px',
                height: '34px',
                boxShadow: state.isFocused ? null : null,
              })
        }} {...props} />
    )
}
