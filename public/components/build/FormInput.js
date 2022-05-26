function FormInput(props) {
    var label = props.label,
        id = props.id,
        type = props.type,
        name = props.name,
        checked = props.checked;

    var value = typeof props.value == 'string' ? props.value : props.value.value || '';

    React.useEffect(function () {
        $('[name=\'' + name + '\']:not([type="radio"]').val(value);
        if (type == 'date') render_datepickers();
    }, [type]);

    return React.createElement(
        'div',
        { className: 'form-answer' },
        React.createElement(
            'label',
            { className: 'lead', htmlFor: id },
            label
        ),
        '\xA0',
        React.createElement('input', { id: id, 'og-type': type, type: type == 'date' ? 'text' : type, name: name, defaultValue: value, defaultChecked: checked })
    );
}