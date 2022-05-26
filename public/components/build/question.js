function Question(props) {
    var _props$data = props.data,
        linkId = _props$data.linkId,
        text = _props$data.text,
        type = _props$data.type,
        option = _props$data.option,
        last = _props$data.last,
        value = _props$data.value;
    var nextQuestion = props.nextQuestion,
        prevQuestion = props.prevQuestion,
        submit = props.submit;

    var html_type = convertTypeToHTMLType(type);
    var elem;

    React.useEffect(function () {
        render_datepickers();
        if (text.toLowerCase().includes('country')) renderAutocomplete();
    });

    if (type == 'boolean' || type == 'choice') {
        var options = option ? option.map(function (o) {
            return o.valueCoding.display;
        }) : ['Yes', 'No'];
        if (html_type == 'select') elem = React.createElement(SelectInput, { options: options, linkId: linkId, value: value });else elem = React.createElement(RadioInput, { linkId: 'q' + linkId, type: html_type, option: options, value: value });
    } else elem = React.createElement(
        'form',
        null,
        React.createElement(FormInput, { id: 'q' + linkId, type: html_type, name: linkId, value: value })
    );

    return React.createElement(
        'div',
        { className: 'question jumbotron', id: linkId, style: { opacity: 0 } },
        React.createElement(
            'span',
            { className: 'question-body' },
            React.createElement(
                'h1',
                { className: 'display-4' },
                text
            )
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
            last ? React.createElement(
                'a',
                { className: 'btn btn-primary btn-lg', href: '#', onClick: submit },
                'Submit'
            ) : React.createElement(
                'a',
                { className: 'btn btn-primary btn-lg', href: '#', onClick: nextQuestion, role: 'button' },
                'Next'
            )
        )
    );
}