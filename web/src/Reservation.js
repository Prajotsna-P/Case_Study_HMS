import React, { useState } from "react";
import './App.css';
import {Navigation} from './Navigation'

const Reservation= () => {
const [Id,setId] = useState();
const [Name,setName] = useState();
const [Email,setEmail] = useState();
const [PhoneNumber, setPhoneNumber] = useState();
const [Address,setAddress] = useState();
const [IdProof,setIdProof] = useState();
const [RoomType,setRoomType] = useState();
const [NoOfMembers,setNoOfMembers] = useState();
const [CheckIn,setCheckIn] = useState();
const [CheckOut,setCheckOut] = useState(); 
 
  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      fetch("http://localhost:24396/api/Reservation",{
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({

        Id : Id,
        Name: Name,
        Email : Email,
        PhoneNumber: PhoneNumber,
        Address : Address,
        IdProof : IdProof,
        RoomType : RoomType,
        NoOfMembers : NoOfMembers,
        CheckIn: CheckIn,
        CheckOut : CheckOut
          
        })
      }).then(() => {
        alert("Reservation Done Successfully");
        console.log('Successful');

      }).error((err)=>{
        alert("Unsuccessful");
      })
      console.log(Id,Name,Email,PhoneNumber,Address,IdProof,RoomType,NoOfMembers,CheckIn,CheckOut);
    }
    catch(error){
      console.log(error);
      
    }
  };
  return (
<div>
<Navigation/>
<div className="boxed">

       <h2>Reservation</h2>    
      <form onSubmit={submitHandler}>
      <section className="flex-row wid100">
      <div className="input-group wid50">
        <label>Id : <span className="star-important">*</span></label> 
        <input
          type="text"
          name="Id"
          value={Id}
          placeholder="Id"
          onChange={(e) => setId(e.target.value)}
          required
        />
       </div>
       <div className="input-group wid50 margin-left5">
        <label>Name : <span className="star-important">*</span></label> 
        <input
          type="text"
          name="Name"
          value={Name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
       </div>
       </section>
       <section className="flex-row wid100">
           <div className="input-group wid50">
        <label>Email : <span className="star-important">*</span></label> 
        <input
          type="text"
          name="Email"
          value={Email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
       </div>
       <div className="input-group wid50 margin-left5">
        <label>PhoneNumber <span className="star-important">*</span></label> 
        <input
          type="text"
          name="PhoneNumber"
          value={PhoneNumber}
          placeholder="PhoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
       </div>
       </section>
       <section className="flex-row wid100">
          <div className="input-group wid50">
          <label>Address : <span className="star-important">*</span></label> 
          <input
          type="text"
          name="Address"
          value={Address}
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          required
          />
          </div>
          <div className="input-group wid50 margin-left5">
          <label>IdProof : <span className="star-important">*</span></label> 
          <input
          type="text"
          name="IdProof"
          value={IdProof}
          placeholder="IdProof"
          onChange={(e) => setIdProof(e.target.value)}
          required
          />
          </div>
        </section>
        <section className="flex-row wid100">
          <div className="input-group wid50">
          <label>RoomType <span className="star-important">*</span></label> 
          <input
          type="text"
          name="RoomType"
          value={RoomType}
          placeholder="RoomType"
          onChange={(e) => setRoomType(e.target.value)}
          required
          />
          </div>
          <div className="input-group wid50 margin-left5">
          <label>NoOfMembers : <span className="star-important">*</span></label>
          <input
          type="text"
          name="NoOfMembers"
          value={NoOfMembers}
          placeholder="NoOfMembers"
          onChange={(e) => setNoOfMembers(e.target.value)} 
          required
         />
         </div>
        </section> 
        <section className="flex-row wid100">
           <div className="input-group wid50">
          <label>CheckIn : <span className="star-important">*</span></label>
          <input
          type="date"
          name="CheckIn"
          placeholder="CheckIn"
          onChange={(e) => setCheckIn(e.target.value)}
          required
          />
          </div>
          <div className="input-group wid50 margin-left5">    
          <label>CheckOut : <span className="star-important">*</span></label>
          <input
         type="date"
         name="CheckOut"
         placeholder="CheckOut"
         onChange={(e) => setCheckOut(e.target.value)}
         required
          />        
          </div>
       </section>
       
       <button onClick={submitHandler} className= "submit-button">Submit</button>
      </form>    
    </div>
</div>
  );
  
};
export default Reservation;
// import React, { Component } from "react";
// // import { Modal, Button, Row, Col, Form } from "react-bootstrap";
// import "./Reservation.css";
// import {Navigation} from './Navigation';

// export class Reservation extends Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     fetch("http://localhost:24396/api/reservation", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         Id: event.target.Id.value,
//         Name: event.target.Name.value,
//         Email: event.target.Email.value,
//         PhoneNumber: event.target.PhoneNumber.value,
//         Address: event.target.Address.value,
//         IdProof: event.target.IdProof.value,
//         RoomType : event.target.RoomType.value,
//         NoOfMembers: event.target.NoOfMembers.value,
//         CheckIn :event.target.CheckIn.value,
//         CheckOut : event.target.CheckOut.value,
//       }),
//     })
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           alert(result);
//         },
//         (error) => {
//           alert("Failed");
//         }
//       );
//   }
//   render() {
//     return (
      
//       <div className="container">
//         <Navigation />
//           {/* {...this.props}
//           size="lg"
//           labelled="contained-modal-title-vcenter"
//           centered */}
//        <div className="boxed wid700">
//           <h2>Reservation</h2>
//           <form>
//            <section className="flex-row wid100">
//            <div className="input-group wid50">
//                 <label>Id<span className="star-important">*</span></label>
//                 <input type="text" required />
//             </div>
//             <div className="input-group wid50 margin-left5">
//                 <label>Name<span className="star-important">*</span></label>
//                 <input type="text" required />
//             </div>
//            </section>
//            <section className="flex-row wid100">
//            <div className="input-group wid50">
//                 <label>Email<span className="star-important">*</span></label>
//                 <input type="text" required />
//             </div>
//             <div className="input-group wid50 margin-left5">
//                 <label>Mobile Number<span className="star-important">*</span></label>
//                 <input type="text" required />
//             </div>
//            </section>
//            <section className="flex-row wid100">
//            <div className="input-group wid50">
//                 <label>Address<span className="star-important">*</span></label>
//                 <input type="text" required />
//             </div>
//             <div className="input-group wid50 margin-left5">
//                 <label>Id Proof<span className="star-important">*</span></label>
//                 <input type="text" required />
//             </div>
//            </section>
//            <section className="flex-row wid100">
//            <div className="input-group wid50">
//                 <label>Room Type<span className="star-important">*</span></label>
//                 <input type="text" required />
//             </div>
//             <div className="input-group wid50 margin-left5">
//                 <label>No Of Members<span className="star-important">*</span></label>
//                 <input type="number" required />
//             </div>
//            </section>
//            <section className="flex-row wid100">
//            <div className="input-group wid50">
//                 <label>Check In<span className="star-important">*</span></label>
//                 <input type="date" required />
//             </div>
//             <div className="input-group wid50 margin-left5">
//                 <label>Check Out<span className="star-important">*</span></label>
//                 <input type="date" required />
//             </div>
//            </section>
//            <button className="submit-button">ADD</button>
//           </form>
//        </div>
         
//       </div>
//     );
//   }
// }

// export default Reservation;
// import React,{Component} from 'react';
// import {Table} from 'react-bootstrap';
// import {Button,ButtonToolbar} from 'react-bootstrap';
// import {AddReservation} from './AddReservation.js';
// import {EditReservation } from './EditReservation';
// import {Navigation} from './Navigation'

// export class Reservation extends Component{

//     constructor(props){
//         super(props);
//         this.state={Res:[], addModalShow:false, editModalShow:false}
//     }

//     refreshList(){
//         fetch("process.env.REACT_APP_API+'Reservation")
//         .then(response=>response.json())
//         .then(data=>{
//             this.setState({Res:data});
//         });
//     }

//     componentDidMount(){
//         this.refreshList();
//     }

//     componentDidUpdate(){
//         this.refreshList();
//     }

//     render(){
//         const {Res}=this.state;
//         let addModalClose=()=>this.setState({addModalShow:false});
//         let EditModalClose=()=>this.setState({editModalShow:false});
//         return(
            
//             <div>
//                 <Navigation/>
//                 <Table className="mt-4" striped bordered hover size="sm">
                   
//                     <tbody>
//                     {Res.map(Res => <tr key={Res.Id}>
//                         <td>{Res.Id}</td>
//                         <td>{Res.Name}</td>
//                         <td>{Res.Email}</td>
//                         <td>{Res.PhoneNumber}</td>
//                         <td>{Res.Address}</td>
//                         <td>{Res.IdProof}</td>
//                         <td>{Res.RoomType}</td>
//                         <td>{Res.NoOfMembers}</td>
//                         <td>{Res.CheckIn}</td>
//                         <td>{Res.CheckOut}</td>
//                         <td>{Res.TotalAmount}</td>
//                         <td>
//                         <ButtonToolbar>
//                             <Button className="mr-2" variant="info"
//                             onClick={()=>this.setState({EditModalShow:true,
//                                     Id:Res.Id,Name:Res.Name,Email:Res.Email,PhoneNumber:Res.PhoneNumber,Address:Res.Address,IdProof:Res.IdProof,TotalAmount:Res.TotalAmount})}>
//                                     Edit 
//                             </Button>
//                         </ButtonToolbar>

//                         </td>

//                             </tr>)}
//                     </tbody>

//                 </Table>

//                 <ButtonToolbar>
//                     <Button variant='primary'
//                     onClick={()=>this.setState({addModalShow:true})}>
//                     Reservation </Button>

//                     <AddReservation show={this.state.addModalShow}
//                     onHide={addModalClose}/>
//                 </ButtonToolbar> <br/>
//                 <ButtonToolbar>
//                 <Button variant='primary'
//                     onClick={()=>this.setState({editModalShow:true})}>
//                      Edit Reservation </Button>

//                     <EditReservation show={this.state.editModalShow} 
//                     onHide={EditModalClose}/>
//                 </ButtonToolbar>
//             </div>
//         )
//     }
// }

// export default Reservation;