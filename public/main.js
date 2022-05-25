$.ajax({
    url: 'http://localhost:5732/assets/questionnaire.json',
    dataType: 'json',
    success: (r) => {
        root = $('#root')[0];
        reactroot = ReactDOM.createRoot(root);
        reactroot.render(React.createElement(Questionnaire, r));
        render_datepickers();
    }
})

function render_datepickers() {
    var identifier = '[og-type="date"]';
    $('input[type="text"]').toArray().forEach((e)=>{$(e).data('datepicker')?.destroy()});
    var await_dates = setInterval(()=>{
        if ($(identifier).length) {
            clearInterval(await_dates);
            $(identifier).toArray().forEach((date_elem)=>{
                if ($(date_elem).data('datepicker')) return;
                $(date_elem).data('datepicker', new Datepicker(date_elem, {maxDate: new Date()}));
            })
        }
    }, 100)
}

