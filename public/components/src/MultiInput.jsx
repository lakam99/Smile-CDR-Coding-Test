function MultiInput(props) {
    var {linkId, type} = props;
    return (
        <form>
            {
            props.option.map((choice,i)=>{
                return (
                    <FormInput type={type} label={choice} id={linkId+`${i}`}></FormInput>
                )
            })}
        </form>
    )
}