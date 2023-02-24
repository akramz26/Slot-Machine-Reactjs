class Hello extends React.Component {
    render() {
        // function getFruits() {
            // const fruits = ["🍐", "🍒", "🍏"];
            // return fruits[Math.floor(Math.random() * fruits.length)];
        // }

        const SlotM = () => {
            const fruits = ["🍐", "🍒", "🍏"];
            const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
            const randomFrui = fruits[Math.floor(Math.random() * fruits.length)];
            const randomFru = fruits[Math.floor(Math.random() * fruits.length)];
            let a = randomFruit;
            let b = randomFrui;
            let c = randomFru;
            if ((a === b) && (a === c)) {
                return (
                    <center>
                        <h1> {a} {b} {c} </h1>
                        <h1>This is matching</h1>
                        <hr />
                    </center >
                )

            } else {
                return (
                    <center>
                        <h1> {a} {b} {c} </h1>
                        <h1>This is not matching</h1>
                        <hr />
                    </center>
                )



            }
        }

        return (
            <div>
                <h3>{SlotM()}</h3>
            </div>
        )
    }
}
