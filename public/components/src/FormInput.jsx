/**
 * /**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * Main Form Component
 * Functionality includes:
 * Client side form value recollection
 */

function FormInput(props) {
    var {label, id, type, name, checked} = props;
    var value = (typeof props.value == 'string') ? props.value : props.value.value || '';

    React.useEffect(()=>{
        $(`[name='${name}']:not([type="radio"]`).val(value);
    }, [type])

    return (
        <div className='form-answer'>
            <label className="lead" htmlFor={id}>{label}</label>&nbsp;
            <input id={id} og-type={type} type={type == 'date' ? 'text':type} name={name} readOnly={type=='date'} defaultValue={value} defaultChecked={checked}></input>
        </div>
    )
}