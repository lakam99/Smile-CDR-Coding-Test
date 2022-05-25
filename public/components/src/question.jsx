function Question(props) {
    var {linkId, text, type, option} = props.data;
    var html_type = convertTypeToHTMLType(type);
    var elem;

    if (type == 'boolean' || type == 'choice') {
        let options = option ? option.map(o=>o.valueCoding.display) : ['True', 'False'];
        elem = <MultiInput linkId={linkId} type={html_type} option={options}></MultiInput>
    }
    else
        elem = <FormInput id={linkId} type={html_type} name={linkId} label={text}></FormInput>

    return (
        <div class='question'>
            <span class='question-body'>
                {text}
            </span>
            <div class='question-input'>
                {elem}
            </div>
        </div>
    )
}