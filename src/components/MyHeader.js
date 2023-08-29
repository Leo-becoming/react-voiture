import Wrapper from "./Wrapper";




const MyHeader = ({children, color, addStyle}) =>



    <Wrapper>
        <h1 onMouseOver={addStyle} style={{color: color}}>
            {children}
        </h1>
    </Wrapper>


export default MyHeader