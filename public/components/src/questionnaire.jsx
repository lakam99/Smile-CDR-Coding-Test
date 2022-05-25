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
        this.questions = props.item.map((question)=>Object.assign(question, {componentName: Question}));
        this.current_question_index = -1;
    }

    setCurrentDisplay(display) {
        let current_display = this.state.display.linkId;
        current_display = $(`#${current_display}`).addClass('hidden');
        setTimeout(()=>this.setState({display}),200);
    }

    nextQuestion () {
        if (this.current_question_index + 1 > this.questions.length - 1) return;
        this.setCurrentDisplay(this.questions[++this.current_question_index]);
    }

    prevQuestion () {
        if (this.current_question_index - 1 < 0) return;
        this.setCurrentDisplay(this.questions[--this.current_question_index]);
    }

    gen_elem (data) {
        var {componentName} = data;
        return React.createElement(componentName, {data, nextQuestion:this.nextQuestion.bind(this), prevQuestion:this.prevQuestion.bind(this)});
    }

    componentDidUpdate() {
        render_datepickers();
    }


    render() {
        return this.gen_elem(this.state.display);
    }
}