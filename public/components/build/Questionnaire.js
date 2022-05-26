var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Main Questionnaire Component
 * Functionality includes:
 * Dynamic 'Display' rendering using 'Previous','Next',&'Submit' button
 */
var Questionnaire = function (_React$Component) {
    _inherits(Questionnaire, _React$Component);

    function Questionnaire(props) {
        _classCallCheck(this, Questionnaire);

        var _this = _possibleConstructorReturn(this, (Questionnaire.__proto__ || Object.getPrototypeOf(Questionnaire)).call(this, props));

        _this.introtron_props = {
            componentName: Introtron,
            title: 'Test Questionnaire',
            subheading: 'This is a test questionnaire. Please answer all the questions.',
            btn_val: 'Begin',
            btn_click: _this.nextQuestion.bind(_this),
            linkId: 'introtron'
        };
        _this.state = { display: _this.introtron_props };
        _this.questions = props.item.map(function (question, i, a) {
            return Object.assign(question, { componentName: Question, last: i == a.length - 1, value: '' });
        });
        _this.current_question_index = -1;
        return _this;
    }

    _createClass(Questionnaire, [{
        key: 'submitForm',
        value: function submitForm(event) {
            var results = {
                componentName: FormResults,
                questions: this.questions,
                linkId: 'results'
            };
            this.questions.push(results);
            this.nextQuestion(event);
        }
    }, {
        key: 'fade_out_into_new_display',
        value: function fade_out_into_new_display(display) {
            var _this2 = this;

            fadeOut($('#' + this.state.display.linkId)[0]).then(function () {
                return _this2.setState({ display: display });
            });
        }
    }, {
        key: 'setCurrentDisplay',
        value: function setCurrentDisplay(display) {
            var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

            if (this.current_question_index || !this.current_question_index && next != -1) {
                var form_value = $('.question-input > form').serializeArray()[0];
                this.questions[this.current_question_index + next].value = form_value || '';
            }
            this.fade_out_into_new_display(display);
        }
    }, {
        key: 'nextQuestion',
        value: function nextQuestion(event) {
            var form = $(event.target).parent().parent().find('.question-input > form');
            if (this.current_question_index != -1 && (form.serializeArray().length ? !form.serializeArray()[0].value : true)) shakeElem(form[0]);else this.setCurrentDisplay(this.questions[++this.current_question_index]);
        }
    }, {
        key: 'prevQuestion',
        value: function prevQuestion() {
            if (this.current_question_index - 1 < 0) {
                this.setCurrentDisplay(Object.assign(this.introtron_props, { opacity: 0 }), 0);
                this.fade_out_into_new_display(Object.assign(this.introtron_props, { opacity: 0 }));
                this.current_question_index = -1;
            } else this.setCurrentDisplay(this.questions[--this.current_question_index], 1);
        }
    }, {
        key: 'gen_elem',
        value: function gen_elem(data) {
            var componentName = data.componentName;

            return React.createElement(componentName, { data: data, nextQuestion: this.nextQuestion.bind(this), prevQuestion: this.prevQuestion.bind(this), submit: this.submitForm.bind(this) });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            fadeIn($('#' + this.state.display.linkId)[0]);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.gen_elem(this.state.display);
        }
    }]);

    return Questionnaire;
}(React.Component);