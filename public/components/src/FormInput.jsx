function FormInput(props) {
    var {label, id, type, name} = props;
    var value = props.value || '';
    return (
        <div className='form-answer'>
            <label className="lead" htmlFor={id}>{label}</label>&nbsp;
            <input id={id} og-type={type} type={type == 'date' ? 'text':type} name={name} defaultValue={value}></input>
        </div>
    )
}