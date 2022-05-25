function FormInput(props) {
    var label = props.label,
        id = props.id,
        type = props.type;

    var value = props.value || '';
    return React.createElement(
        'div',
        { 'class': 'form-answer' },
        React.createElement(
            'label',
            { 'for': id },
            label
        ),
        React.createElement('input', { id: id, 'og-type': type, type: type == 'date' ? 'text' : type, name: id, value: value })
    );
}