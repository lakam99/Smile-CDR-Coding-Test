/**
 * Arkam Mazrui
 * arkam.mazrui@gmail.com
 * */
function FormResults(props) {
    var {questions, linkId} = props.data;
    return (
        <div className='results jumbotron' id={linkId} style={{opacity:0}}>
            <span className='results-header'>
                <h1 className="display-4">Results</h1>
            </span>
            <div className='results-body'>
                <table>
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            questions.map((question,i,a)=>{
                                if (i == a.length - 1) return;
                                return (
                                <tr key={question.linkId}>
                                    <td>
                                        {question.text}
                                    </td>
                                    <td>
                                        {question.value.value}
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    )
}