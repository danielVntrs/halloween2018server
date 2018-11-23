import React, { Component } from "react";
import "./App.css";
import { Form, Button } from "semantic-ui-react";
import ReactJson from "react-json-view";
import { Julbord } from "./components/julbord.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Julbord />
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       apiResponseData: {},
//       apiResponse: false,
//       error: false,
//       formData: {
//         a: "",
//         b: "",
//         c: "",
//         d: ""
//       }
//     };
//   }

//   fetchPlace = async data => {
//     const response = await fetch(
//       `/api/get-nearby-location?data=${JSON.stringify(data)}`
//     );
//     const responseData = await response.json();
//     if (Object.entries(responseData).length) {
//       if (responseData.result.name.includes("VNTRS")) {
//         this.setState({ apiResponse: true, apiResponseData: responseData });
//       } else {
//         this.setState({
//           apiResponse: true,
//           apiResponseData: responseData,
//           error: true
//         });
//       }
//     }
//   };

//   render() {
//     const handleRetry = () => {
//       this.setState({
//         error: false,
//         apiResponse: false,
//         apiResponseData: {}
//       });
//     };
//     console.log("this.state: ", this.state);
//     const ShowResponse = () => {
//       if (this.state.apiResponse) {
//         const LosersButton = () => {
//           if (this.state.error) {
//             return (
//               <Button
//                 type="submit"
//                 className="inputHalloweenRetry"
//                 onClick={() => handleRetry()}
//               >
//                 Awww! ...try agin? :D
//               </Button>
//             );
//           }
//           return false;
//         };
//         return (
//           <div>
//             <ReactJson src={this.state.apiResponseData} />
//             <LosersButton />
//           </div>
//         );
//       }
//       return false;
//     };

//     const handleSubmit = e => {
//       const updatedFormData = {};
//       [...document.querySelectorAll(".data")].map(d => {
//         updatedFormData[d.innerText.toLowerCase()] =
//           parseInt(d.children[1].value) || 0;
//       });
//       console.log(updatedFormData);
//       this.fetchPlace(updatedFormData);
//     };

//     const InputForm = () => {
//       if (!this.state.apiResponse) {
//         return (
//           <div className="main-container">
//             <Form>
//               <Form.Field className="inputHalloween data">
//                 <label>A</label>
//                 <input placeholder="A" type="number" />
//               </Form.Field>
//               <Form.Field className="inputHalloween data">
//                 <label>B</label>
//                 <input placeholder="B" type="number" />
//               </Form.Field>
//               <Form.Field className="inputHalloween data">
//                 <label>C</label>
//                 <input placeholder="C" type="number" />
//               </Form.Field>
//               <Form.Field className="inputHalloween data">
//                 <label>D</label>
//                 <input placeholder="D" type="number" />
//               </Form.Field>
//               <Button
//                 type="submit"
//                 className="inputHalloween"
//                 onClick={event => handleSubmit(event)}
//               >
//                 Submit
//               </Button>
//             </Form>
//           </div>
//         );
//       }
//       return false;
//     };

//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>Halloween 2018</p>
//         </header>
//         <InputForm />
//         <ShowResponse />
//       </div>
//     );
//   }
// }

// export default App;
