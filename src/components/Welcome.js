
const Welcome = () =>{


    const logText = () =>{
        console.log('text')
    }


    const logtextArg = (arg) =>{
        console.log(arg)
    }
        return (
            <div>
                <button onClick={logText}>Fonction</button>
                <button onClick={() => logtextArg('Arg')}>Fonction avec arg</button>
                <button onClick={() => console.log('text direct')}>click direct</button>
            </div>
        )



}





export default Welcome