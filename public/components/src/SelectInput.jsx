/**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * Select Component
 * Functionality includes:
 * Client side form value recollection
 * Cannot be made with the FormInput Component
 */

function SelectInput(props) {
    var {options, linkId, value} = props;

    React.useEffect(()=>{
        $(`[name='${linkId}']`).val(value.value || options[0]);
    }, []);

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