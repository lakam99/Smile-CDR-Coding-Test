function Questionnaire(props) {
    var {items} = props;

    return (
        items.map((question)=>{
            return <Question data={question}></Question>
        })
    )
}