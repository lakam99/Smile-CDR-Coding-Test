function MultiInput(props) {
    var {linkId, type} = props;
    return (
        <div class='multi-input'>
            {
            props.option.map((choice,i)=>{
                return (
                    <FormInput type={type} label={choice} id={linkId+`-${i}`}></FormInput>
                )
            })}
        </div>
    )
}