function Questionnaire(props) {

    return (
        <form>
            {props.item.map((question)=>{
                return <Question data={question}></Question>
            })}
        </form>
    )
}