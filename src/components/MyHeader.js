import Wrapper from "./Wrapper";


const MyHeader = ({children, color}) =>

    <Wrapper>
        <h1 style={{color: color}}>
            {children}
        </h1>
    </Wrapper>


export default MyHeader