function Questionnaire(props) {

    return (
        props.item.map((question)=>{
            return <Question data={question}></Question>
        })
    )
}