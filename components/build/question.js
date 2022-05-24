function Question(props) {
    var _props$data = props.data,
        linkId = _props$data.linkId,
        text = _props$data.text,
        type = _props$data.type;

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

    return React.createElement(
        'div',
        { 'class': 'question' },
        React.createElement(
            'span',
            { 'class': 'question-body' },
            text
        ),
        React.createElement(
            'div',
            { 'class': 'question-input' },
            React.createElement('input', { title: linkId, type: inputType, name: linkId })
        )
    );
}