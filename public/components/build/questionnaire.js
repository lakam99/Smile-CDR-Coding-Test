var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        _this.questions = props.item.map(function (question) {
            return Object.assign(question, { componentName: Question });
        });
        _this.current_question_index = -1;
        return _this;
    }

    _createClass(Questionnaire, [{
        key: 'setCurrentDisplay',
        value: function setCurrentDisplay(display) {
            var _this2 = this;

            var current_display = this.state.display.linkId;
            current_display = $('#' + current_display).addClass('hidden');
            setTimeout(function () {
                return _this2.setState({ display: display });
            }, 200);
        }
    }, {
        key: 'nextQuestion',
        value: function nextQuestion() {
            if (this.current_question_index + 1 > this.questions.length - 1) return;
            this.setCurrentDisplay(this.questions[++this.current_question_index]);
        }
    }, {
        key: 'prevQuestion',
        value: function prevQuestion() {
            if (this.current_question_index - 1 < 0) return;
            this.setCurrentDisplay(this.questions[--this.current_question_index]);
        }
    }, {
        key: 'gen_elem',
        value: function gen_elem(data) {
            var componentName = data.componentName;

            return React.createElement(componentName, { data: data, nextQuestion: this.nextQuestion.bind(this), prevQuestion: this.prevQuestion.bind(this) });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            render_datepickers();
        }
    }, {
        key: 'render',
        value: function render() {
            return this.gen_elem(this.state.display);
        }
    }]);

    return Questionnaire;
}(React.Component);