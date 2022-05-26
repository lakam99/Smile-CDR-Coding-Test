/**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * */
function RadioInput(props) {
    var linkId = props.linkId,
        type = props.type,
        value = props.value;


    return React.createElement(
        "form",
        { className: "multi-input" },
        props.option.map(function (choice, i) {
            var id = linkId + "-" + i;
            return React.createElement(FormInput, { type: type, key: id, label: choice, id: id, name: linkId, value: choice, checked: value.value == choice });
        })
    );
}