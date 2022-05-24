function Question(props) {
    var {linkId, text, type} = props.data;
    var inputType;

    switch (type) {
        case 'boolean':
            inputType = 'radio';
            break;
        case 'choice':
            inputType = 'checkbox';
            break;
        case 'string':
            inputType = 'text';
            break;
        default:
            break;
    }

    return (
        <div class='question'>
            <span class='question-body'>
                {text}
            </span>
            <div class='question-input'>
                <input title={linkId} type={inputType} name={linkId}></input>
            </div>
        </div>
    )
}