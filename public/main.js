$.ajax({
    url: 'http://localhost:5732/assets/questionnaire.json',
    dataType: 'json',
    success: (r) => {
        root = $('#root')[0];
        reactroot = ReactDOM.createRoot(root);
        reactroot.render(React.createElement(Questionnaire, r));
        var await_dates = setInterval(()=>{
            let identifier = '[og-type="date"]';
            if ($(identifier).length) {
                clearInterval(await_dates);
                $(identifier).toArray().forEach((date_elem)=>{
                    if ($(date_elem).data('datepicker')) return;
                    $(date_elem).data('datepicker', new Datepicker(date_elem, {maxDate: new Date()}));
                })
            }
        }, 100)
    }
})

