function Questionnaire(props) {

    return React.createElement(
        "form",
        null,
        props.item.map(function (question) {
            return React.createElement(Question, { data: question });
        })
    );
}