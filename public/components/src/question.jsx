function Question(props) {
    var {linkId, text, type, option} = props.data;
    var {nextQuestion, prevQuestion} = props;
    var html_type = convertTypeToHTMLType(type);
    var elem;

    if (type == 'boolean' || type == 'choice') {
        let options = option ? option.map(o=>o.valueCoding.display) : ['True', 'False'];
        elem = <MultiInput linkId={linkId} type={html_type} option={options}></MultiInput>
    }
    else
        elem = <FormInput id={linkId} type={html_type} name={linkId}></FormInput>

    return (
        <div className='question jumbotron' id={`q${linkId}`}>
            <span className='question-body'>
                {text}
            </span>
            <div className='question-input'>
                {elem}
            </div>
            <span className="next-prev">
                <a className="btn btn-primary btn-lg" href="#" onClick={prevQuestion} role="button">Previous</a>
                <a className="btn btn-primary btn-lg" href="#" onClick={nextQuestion} role="button">Next</a>
            </span>
        </div>
    )
}