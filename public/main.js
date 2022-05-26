var country_list = undefined;

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

$.ajax({
    url: 'https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json',
    dataType: 'json',
    success: (countries) => {
        country_list = countries.map((country)=>country.name);
    }
})