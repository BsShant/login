import React from "react";
import './careers.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';


const JobSection=(props)=>{
    const {title, sub1, sub2, image} = props
    return(
        <Card body className="jobs">
        <div style={{display:"flex"}}>
              <Figure style={{display:"inline-block"}}>
         <Figure.Image
            width={60}
            height={120}
            alt="171x180"
            src={image}
            style={{objectFit:"cover",height:"63px"}}
          /></Figure> 
        <div style={{marginLeft:"20px",lineHeight:"1"}}><h6 style={{color:"white"}}>{title}</h6>  
          <ul style={{listStyle:"none",padding:"0"}}>
          <li>{sub1}</li>
          <li>{sub2}</li>
        </ul> 
        </div>
        </div>
         </Card>
      
    )
}

export default JobSection;