function Questionnaire(props) {

    return props.item.map(function (question) {
        return React.createElement(Question, { data: question });
    });
}