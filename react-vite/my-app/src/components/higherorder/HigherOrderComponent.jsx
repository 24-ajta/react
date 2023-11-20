const withUpperCase = (WrappedComponent)=>{
    return function({text,...restProps}){
        const upperCaseText = text.toUpperCase();
        return <WrappedComponent {...restProps} text={upperCaseText}/>
    }
}

const MyComponent = ({text})=><div>{text}</div>

const MyComponentWithUpperCase = withUpperCase(MyComponent);

export default MyComponentWithUpperCase;


// here mycomponent is a wrapped component . It is enhanced .So it is known as enhanced component. withUpperCase is an higher order component since it make the wrapped component enhanced