var country_list = undefined;

$.ajax({
    url: '/assets/questionnaire.json',
    dataType: 'json',
    success: (r) => {
        root = $('#root')[0];
        reactroot = ReactDOM.createRoot(root);
        reactroot.render(React.createElement(Questionnaire, r));
    }
})

$.ajax({
    url: '/assets/countries.json',
    dataType: 'json',
    success: (r) => country_list = r.map((country)=>country.name)
})