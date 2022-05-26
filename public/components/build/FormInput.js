/**
 * Main Form Component
 * Functionality includes:
 * Client side form value recollection
 */

function FormInput(props) {
    var label = props.label,
        id = props.id,
        type = props.type,
        name = props.name,
        checked = props.checked;

    var value = typeof props.value == 'string' ? props.value : props.value.value || '';

    React.useEffect(function () {
        $('[name=\'' + name + '\']:not([type="radio"]').val(value);
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
        React.createElement('input', { id: id, 'og-type': type, type: type == 'date' ? 'text' : type, name: name, readOnly: type == 'date', defaultValue: value, defaultChecked: checked })
    );
}