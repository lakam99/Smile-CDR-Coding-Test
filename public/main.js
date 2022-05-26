var country_list = undefined;

$.ajax({
    url: 'http://localhost:5732/assets/questionnaire.json',
    dataType: 'json',
    success: (r) => {
        root = $('#root')[0];
        reactroot = ReactDOM.createRoot(root);
        reactroot.render(React.createElement(Questionnaire, r));
    }
})

$.ajax({
    url: 'http://localhost:5732/assets/countries.json',
    dataType: 'json',
    success: (r) => country_list = r.map((country)=>country.name)
})