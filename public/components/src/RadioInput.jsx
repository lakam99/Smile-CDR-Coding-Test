/**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * */
function RadioInput(props) {
    var {linkId, type, value} = props;

    return (
        <form className="multi-input">
            {
            props.option.map((choice,i)=>{
                var id = `${linkId}-${i}`;
                return (
                    <FormInput type={type} key={id} label={choice} id={id} name={linkId} value={choice} checked={value.value == choice}></FormInput>
                )
            })}
        </form>
    )
}