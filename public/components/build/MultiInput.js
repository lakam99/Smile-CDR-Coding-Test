function MultiInput(props) {
    var linkId = props.linkId,
        type = props.type;

    return React.createElement(
        "form",
        null,
        props.option.map(function (choice, i) {
            return React.createElement(FormInput, { type: type, label: choice, id: linkId + ("" + i) });
        })
    );
}