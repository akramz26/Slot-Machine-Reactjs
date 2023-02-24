class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Hello />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))