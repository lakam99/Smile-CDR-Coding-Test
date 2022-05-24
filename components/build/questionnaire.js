function Questionnaire(props) {
    var items = props.items;


    return items.map(function (question) {
        return React.createElement(Question, { data: question });
    });
}