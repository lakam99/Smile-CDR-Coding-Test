function FormInput(props) {
    var {label, id, type} = props;
    var value = props.value || '';
    return (
        <div className='form-answer'>
            <label htmlFor={id}>{label}</label>
            <input id={id} og-type={type} type={type == 'date' ? 'text':type} name={id} defaultValue={value}></input>
        </div>
    )
}