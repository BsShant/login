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
          <h2>CUSTOMER</h2>
     Feel free to reach out to us with any questions. We are very friendly and always open to discussing new projects, interesting ideas.
     <div class="row">
       <div class="col-md-6">
     <h4>Contact</h4>
     Call:9749761111  
     </div>
     <div class="col-md-6">
     <h4>Address</h4>
       <FontAwesomeIcon icon={faLocationDot}/> Samakhushi,Kathmandu
       </div>
     </div>
                            
     Email:logincorpnepal@gmail.com
     
          </div> 
            
                 <button class="sendsms"  onClick={() => fullpageApi.moveSlideRight()}
                 >
                   <p class="color-white"><h5>Send messages</h5></p>
                 </button>   
           </div>


       <div className="slide">
       <div class="row">
       <div className="col-md-4">

          
          <h4 class="customer cst">Customer service</h4>
          <h2 class="customer ail">EMAIL US</h2>
        

           <button class="servicePrev" onClick={() => fullpageApi.moveSlideLeft()}>
             <p>Back</p>
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