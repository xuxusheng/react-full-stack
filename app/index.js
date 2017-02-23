import React from 'react'
import ReactDOM from 'react-dom'

// class App extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div className="controller">
//                 <h1>Hello react!</h1>
//             </div>
//         )
//     }
// }

// function App() {
//     return (
//         <div className="container">
//             <h1>Hello react!</h1>
//         </div>
//     )
// }

let App = React.createClass({
    render: function() {
        return (
            <div className="controller">
                <h1>Hello react!</h1>
            </div>
        )
    }
})

const app = document.createElement('div')
document.body.appendChild(app)
ReactDOM.render(<App/>, app)