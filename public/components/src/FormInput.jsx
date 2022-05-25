function FormInput(props) {
    var {label, id, type} = props;
    var value = props.value || '0';
    return (
        <div class='form-answer'>
            <label for={id}>{label}</label>
            <input id={id} type={type} name={id} value={value}></input>
        </div>
    )
}