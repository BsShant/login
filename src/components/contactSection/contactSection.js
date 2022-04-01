import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import './contact.css';
import {
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from "react-bootstrap";
 
const anchors = [
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
  ];
 

const ContactSection=(props)=>{
    const {fullpageApi} = props
    return(
        <div className="section">
          
    
     
  
    
  
     <div className="contactService contactSection">
       <div className="slide">
            
       <div class="continfo">
          <h4>Customer service</h4>
          <h2 style={{marginLeft:"0px"}}>CUSTOMER</h2>
     Feel free to reach out to us with any questions. We are very friendly and always open to discussing new projects, interesting ideas.
     <div className="row one" style={{padding:"0",justifyFlex:"flex-start"}}>
       <div class=" contcol col-lg-6 col-md-6 col-sm-12" style={{marginLeft:"-111px",paddingLeft:"0px"}}>
     <h4>Contact</h4>
     Call:9749761111  
     </div>
     <div class=" contcol col-lg-6 col-md-6 col-sm-12"  style={{marginLeft:"-71px",paddingLeft:"0px"}}>
     <h4>Address</h4>
       <FontAwesomeIcon icon={faLocationDot}/> Samakhushi,Kathmandu
       </div>
     </div>
                            
     Email:logincorpnepal@gmail.com
     
          </div> 
            
                 <button class="sendsms"  onClick={() => fullpageApi.moveSlideRight()}
                 >
                   <p ><h5 className="send">Send messages</h5></p>
                 </button>   
           </div>


       <div className="slide">
       <div className="row one">
       <div className="col-md-4">

          
          <h4 class="customer cst">Customer service</h4>
          <h2 class="customer ail">EMAIL US</h2>
        

           <button class="goLeft" onClick={() => fullpageApi.moveSlideLeft()}>
             <p className="back"> Back</p>
           </button>
           </div>

         <div className="col-md-8">
       <Form>

       <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="FormBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" required/>
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Phone No:</Form.Label>
    <Form.Control type="number" required />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Messages</Form.Label>
    <Form.Control className="msg" type="text" required/>
  </Form.Group>
{/* 
  <Form.Group className="mb-3" controlId="FormBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}

<ReCAPTCHA className="capt"
sitekey="6LeH_AIfAAAAAIeF4Rod6Wofc0KfYB4IUJi7L5L5"/>

  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
           
</div>
           

           </div>
         </div>
       </div>
    
   



       </div>
    )
 
}

export default ContactSection;