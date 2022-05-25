function Question(props) {
    var _props$data = props.data,
        linkId = _props$data.linkId,
        text = _props$data.text,
        type = _props$data.type,
        option = _props$data.option;
    var nextQuestion = props.nextQuestion,
        prevQuestion = props.prevQuestion;

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
        { className: 'question jumbotron', id: 'q' + linkId },
        React.createElement(
            'span',
            { className: 'question-body' },
            text
        ),
        React.createElement(
            'div',
            { className: 'question-input' },
            elem
        ),
        React.createElement(
            'span',
            { className: 'next-prev' },
            React.createElement(
                'a',
                { className: 'btn btn-primary btn-lg', href: '#', onClick: prevQuestion, role: 'button' },
                'Previous'
            ),
            React.createElement(
                'a',
                { className: 'btn btn-primary btn-lg', href: '#', onClick: nextQuestion, role: 'button' },
                'Next'
            )
        )
    );
}