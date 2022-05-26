function Question(props) {
    var {linkId, text, type, option, last} = props.data;
    var {nextQuestion, prevQuestion, submit} = props;
    var html_type = convertTypeToHTMLType(type);
    var elem;

    if (type == 'boolean' || type == 'choice') {
        var options = option ? option.map(o=>o.valueCoding.display) : ['True', 'False'];
        if (html_type == 'select') elem = <SelectInput options={options} linkId={linkId}></SelectInput>
        else elem = <MultiInput linkId={`q${linkId}`} type={html_type} option={options}></MultiInput>
    }
    else elem = (<form><FormInput id={`q${linkId}`} type={html_type} name={linkId}></FormInput></form>)

    return (
        <div className='question jumbotron' id={linkId} style={{opacity:0}}>
            <span className='question-body'>
                <h1 className="display-4">{text}</h1>
            </span>
            <div className='question-input'>
                {elem}
            </div>
            <span className="next-prev">
                <a className="btn btn-primary btn-lg" href="#" onClick={prevQuestion} role="button">Previous</a>
                {last ? <a className="btn btn-primary btn-lg" href="#" onClick={submit}>Submit</a> : <a className="btn btn-primary btn-lg" href="#" onClick={nextQuestion} role="button">Next</a>}
            </span>
        </div>
    )
}