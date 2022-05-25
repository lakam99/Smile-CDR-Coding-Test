function FormInput(props) {
    var {label, id, type} = props;
    var value = props.value || '';
    return (
        <div class='form-answer'>
            <label for={id}>{label}</label>
            <input id={id} og-type={type} type={type == 'date' ? 'text':type} name={id} value={value}></input>
        </div>
    )
}