import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './contact.css';
import {
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
 
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
       
       <form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label">Textarea</label>
    <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required />
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required aria-label="select example">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="file example" required />
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary" type="submit" disabled>Submit form</button>
  </div>
</form>
           

           

           <button class="servicePrev" onClick={() => fullpageApi.moveSlideLeft()}>
             <p>back</p>
           </button>

         </div>
       </div>
    
   



       </div>
    )
 
}

export default ContactSection;