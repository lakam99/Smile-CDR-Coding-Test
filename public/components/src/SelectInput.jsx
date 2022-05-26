function SelectInput(props) {
    var {options, linkId} = props;
    return (
        <form>
            <select title={linkId} name={linkId}>
                {options.map(((option,i)=>{
                    return <option key={linkId+i} value={option}>{option}</option>
                }))}
            </select>
        </form>
        
    )
}