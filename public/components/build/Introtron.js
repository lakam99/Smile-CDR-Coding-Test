/**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * */
function Introtron(props) {
    var _props$data = props.data,
        title = _props$data.title,
        subheading = _props$data.subheading,
        btn_val = _props$data.btn_val,
        btn_click = _props$data.btn_click,
        linkId = _props$data.linkId,
        opacity = _props$data.opacity;

    return React.createElement(
        "div",
        { id: linkId, className: "jumbotron", style: { opacity: opacity !== undefined ? opacity : 1 } },
        React.createElement(
            "h1",
            { className: "display-4" },
            title
        ),
        React.createElement(
            "p",
            { className: "lead" },
            subheading.split('.')[0]
        ),
        React.createElement(
            "p",
            null,
            subheading.split('.')[1]
        ),
        React.createElement(
            "p",
            { className: "lead" },
            React.createElement(
                "a",
                { className: "btn btn-primary btn-lg", role: "button", onClick: btn_click },
                btn_val
            )
        )
    );
}