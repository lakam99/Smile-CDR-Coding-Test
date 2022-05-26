function FormResults(props) {
    var _props$data = props.data,
        questions = _props$data.questions,
        linkId = _props$data.linkId;

    return React.createElement(
        'div',
        { className: 'results jumbotron', id: linkId, style: { opacity: 0 } },
        React.createElement(
            'span',
            { className: 'results-header' },
            React.createElement(
                'h1',
                { className: 'display-4' },
                'Results'
            )
        ),
        React.createElement(
            'div',
            { className: 'results-body' },
            React.createElement(
                'table',
                null,
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            'Question'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Answer'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    questions.map(function (question, i, a) {
                        if (i == a.length - 1) return;
                        return React.createElement(
                            'tr',
                            { key: question.linkId },
                            React.createElement(
                                'td',
                                null,
                                question.text
                            ),
                            React.createElement(
                                'td',
                                null,
                                question.value.value
                            )
                        );
                    })
                ),
                React.createElement('tfoot', null)
            )
        )
    );
}