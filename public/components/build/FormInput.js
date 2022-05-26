function FormInput(props) {
    var label = props.label,
        id = props.id,
        type = props.type,
        name = props.name;

    var value = props.value || '';
    return React.createElement(
        'div',
        { className: 'form-answer' },
        React.createElement(
            'label',
            { className: 'lead', htmlFor: id },
            label
        ),
        '\xA0',
        React.createElement('input', { id: id, 'og-type': type, type: type == 'date' ? 'text' : type, name: name, defaultValue: value })
    );
}