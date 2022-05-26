function SelectInput(props) {
    var options = props.options,
        linkId = props.linkId;

    return React.createElement(
        "form",
        null,
        React.createElement(
            "select",
            { title: linkId, name: linkId },
            options.map(function (option, i) {
                return React.createElement(
                    "option",
                    { key: linkId + i, value: option },
                    option
                );
            })
        )
    );
}