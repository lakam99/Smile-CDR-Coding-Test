/**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * */
function Introtron(props) {
    var {title, subheading, btn_val, btn_click, linkId, opacity} = props.data;
    return (
        <div id={linkId} className="jumbotron" style={{opacity:opacity !== undefined ? opacity:1}}>
            <h1 className="display-4">{title}</h1>
            <p className="lead">{subheading.split('.')[0]}</p>
            <p>{subheading.split('.')[1]}</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" role="button" onClick={btn_click}>{btn_val}</a>
            </p>
        </div>
    )
}