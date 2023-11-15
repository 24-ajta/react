// import { useContext,createContext } from "react";

// const MyContext = createContext('default');

// function ComponentA(){
//     const contextValue = useContext(MyContext);
//     return <div>Component A:{contextValue}</div>
// }
// function ComponentB(){
//     const contextValue = useContext(MyContext);
//     return <div>Component B:{contextValue}</div>
// }

// function useContextComponent(){
//     return(
//         <MyContext.Provider color="blue">
//             <ComponentA/>
//             <ComponentB/>
//         </MyContext.Provider>
//     )
// }

// export default useContextComponent;

import { useContext,createContext, useState } from "react";

const MyContext = createContext('dark');

function ComponentA(){
    const contextValue = useContext(MyContext);
    return <div>Component A:{contextValue}</div>
}
function ComponentB(){
    const contextValue = useContext(MyContext);
    return <div>Component B:{contextValue}</div>
}

function useContextComponent(){

    const [theme,settheme]=useState('dark');
    return(
        <MyContext.Provider value={theme}>
            <ComponentA/>
            <ComponentB/>
        </MyContext.Provider>
    )
}

export default useContextComponent;