function MultiInput(props) {
    var {linkId, type} = props;
    return (
        <form className="multi-input">
            {
            props.option.map((choice,i)=>{
                var id = `${linkId}-${i}`;
                return (
                    <FormInput type={type} key={id} label={choice} id={id} name={linkId} value={choice}></FormInput>
                )
            })}
        </form>
    )
}