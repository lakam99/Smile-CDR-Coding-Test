/**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * Main Question Component
 * This component does all the heavy lifting for question rendering
 * Functionality includes:
 * Converting question 'type' to html 'type'
 * Rendering datepicker for 'date' inputs & auto complete for 'country' input
 */

function Question(props) {
    var {linkId, text, type, option, last, value} = props.data;
    var {nextQuestion, prevQuestion, submit} = props;
    var html_type = convertTypeToHTMLType(type);
    var elem;


    React.useEffect(()=>{
        render_datepickers();
        if (text.toLowerCase().includes('country')) renderAutocomplete();
    })

    if (type == 'boolean' || type == 'choice') {
        var options = option ? option.map(o=>o.valueCoding.display) : ['Yes', 'No'];
        if (html_type == 'select') elem = <SelectInput options={options} linkId={linkId} value={value}></SelectInput>
        else elem = <RadioInput linkId={`q${linkId}`} type={html_type} option={options} value={value}></RadioInput>
    }
    else elem = (<form><FormInput id={`q${linkId}`} type={html_type} name={linkId} value={value}></FormInput></form>)

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