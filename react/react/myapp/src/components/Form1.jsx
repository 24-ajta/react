// import { useState } from "react";


// function FormComponent({ onSubmit }) {
//     // Initialize the state for input data
//     const [inputData, setInputData] = useState('');
  
//     // Handle input change and update the inputData state
//     const handleInputChange = (e) => {
//       setInputData(e.target.value);
//     };
//     const [inputDat, setInputDat] = useState('');
//     const handleInputlname = (e) => {
//       setInputDat(e.target.value);
//     };
//     const [inputemail, setInputemail] = useState('');
//     const handleInputemail = (e) => {
//       setInputemail(e.target.value);
//     };

//     // Handle form submission and call the onSubmit function
//     const handleSubmit = (e) => {
//       e.preventDefault();
      
//       onSubmit();
//     };
    
//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputData}
//           name="fname"
//           onChange={handleInputChange}
//           placeholder="firstname"
//         />
//         <input
//             type="text"
//             value={inputDat}
//             name="lname"
//             onChange={handleInputlname}
//             placeholder="lastname"
//         />
//         <input
//             type="email"
//             value={inputemail}
//             name="email"
//             onChange={handleInputemail}
//             placeholder="email"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }


  
//   // DisplayComponent.js
//   function DisplayComponent({ displayData }) {
//     // Display the data received via props
//     return <div>
//         {displayData}
       
//     </div>;
    
//   }
  



//   // ParentComponent.js
//   function ParentComponent() {
//     // Initialize the state for data to display
//     const [dataToDisplay, setDataToDisplay] = useState('');
  
//     // Handle form submission and update dataToDisplay state
//     const handleSubmit = (data) => {
//       setDataToDisplay(data);
//     };
  



//     return (
//       <div>
//         {/* Render FormComponent and pass onSubmit function */}
//         <FormComponent onSubmit={handleSubmit} />
  
//         {/* Render DisplayComponent and pass dataToDisplay as a prop */}
//         <DisplayComponent displayData={dataToDisplay} />
//       </div>
//     );
//   }
  
//   export default ParentComponent;
