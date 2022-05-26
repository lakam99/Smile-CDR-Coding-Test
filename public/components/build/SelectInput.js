function SelectInput(props) {
    var options = props.options,
        linkId = props.linkId,
        value = props.value;


    React.useEffect(function () {
        $("[name='" + linkId + "']").val(value.value || options[0]);
    }, []);

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