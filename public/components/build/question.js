function Question(props) {
    var _props$data = props.data,
        linkId = _props$data.linkId,
        text = _props$data.text,
        type = _props$data.type,
        option = _props$data.option;

    var html_type = convertTypeToHTMLType(type);
    var elem;

    if (type == 'boolean' || type == 'choice') {
        var options = option ? option.map(function (o) {
            return o.valueCoding.display;
        }) : ['True', 'False'];
        elem = React.createElement(MultiInput, { linkId: linkId, type: html_type, option: options });
    } else elem = React.createElement(FormInput, { id: linkId, type: html_type, name: linkId });

    return React.createElement(
        'div',
        { 'class': 'question' },
        React.createElement(
            'span',
            { 'class': 'question-body' },
            text
        ),
        React.createElement(
            'div',
            { 'class': 'question-input' },
            elem
        )
    );
}