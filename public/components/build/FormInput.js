function FormInput(props) {
    var label = props.label,
        id = props.id,
        type = props.type;

    var value = props.value || '0';
    return React.createElement(
        'div',
        { 'class': 'form-answer' },
        React.createElement(
            'label',
            { 'for': id },
            label
        ),
        React.createElement('input', { id: id, type: type, name: id, value: value })
    );
}