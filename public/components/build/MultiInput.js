function MultiInput(props) {
    var linkId = props.linkId,
        type = props.type;

    return React.createElement(
        'div',
        { className: 'multi-input' },
        props.option.map(function (choice, i) {
            var id = linkId + '-' + i;
            return React.createElement(FormInput, { type: type, key: id, label: choice, id: id });
        })
    );
}