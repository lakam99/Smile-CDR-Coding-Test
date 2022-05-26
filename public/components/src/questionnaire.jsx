class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.introtron_props = {
            componentName: Introtron,
            title: 'Test Questionnaire',
            subheading: 'This is a test questionnaire. Please answer all the questions.',
            btn_val: 'Begin',
            btn_click: this.nextQuestion.bind(this),
            linkId: 'introtron'
        }
        this.state = {display: this.introtron_props};
        this.questions = props.item.map((question,i,a)=>Object.assign(question, {componentName: Question, last:i==a.length-1, value:''}));
        this.current_question_index = -1;
    }

    submitForm(event) {
        var results = {
            componentName: FormResults,
            questions: this.questions,
            linkId: 'results'
        }
        this.questions.push(results);
        this.nextQuestion(event);
    }

    fade_out_into_new_display(display) {
        fadeOut($(`#${this.state.display.linkId}`)[0]).then(()=>this.setState({display}));
    }

    setCurrentDisplay(display,next=true) {
        if (this.current_question_index || !this.current_question_index && !next) this.questions[this.current_question_index + (next ? -1:1)].value = $('.question-input > form').serializeArray()[0];
        this.fade_out_into_new_display(display);
    }

    nextQuestion (event) {
        var form = $(event.target).parent().parent().find('.question-input > form');
        if (this.current_question_index != -1 && (form.serializeArray().length ? !form.serializeArray()[0].value : true)) shakeElem(form[0]);
        else this.setCurrentDisplay(this.questions[++this.current_question_index]);
    }

    prevQuestion () {
        if (this.current_question_index - 1 < 0) {
            this.fade_out_into_new_display(this.introtron_props);
            this.current_question_index = -1;
        }
        else this.setCurrentDisplay(this.questions[--this.current_question_index], false);
    }

    gen_elem (data) {
        var {componentName} = data;
        return React.createElement(componentName, {data, nextQuestion:this.nextQuestion.bind(this), prevQuestion:this.prevQuestion.bind(this), submit:this.submitForm.bind(this)});
    }

    componentDidUpdate() {
        render_datepickers();
        fadeIn($(`#${this.state.display.linkId}`)[0]);
    }


    render() {
        return this.gen_elem(this.state.display);
    }
}