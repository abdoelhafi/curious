import React from 'react'
import Badge from '../components/layout/Badge'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faFacebook,faTwitter,faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Header = ({data:{fullName,jobTitle,jobCompany,birthDate,phoneNumbers,locationName,skills,interests,email,Facebook,Twitter,LinkedIn,Github,gender}})=> {
    
    console.log("this might ve not null tooooo : "+ birthDate)
    return (
    <header className="header d-md-flex h-md-100 align-items-center">
    
    <div class="col-md-6 p-0 bg-indigo h-md-100">
    <div class="d-md-flex align-items-left h-100 p-5 text-left justify-content-left">
    <img className="profile-image img-responsive float-left" src='../../public/profile.png' alt="James Lee" />
            <div className="profile-content float-left">
                <h1 className="name">{fullName}</h1>
                <h2 className="desc"><span className={"data-span"}>{jobTitle}</span> at <span className={"data-span"}>{jobCompany}</span></h2>  
                <h2 className="desc">Birth date : <span className={"data-span"}>{birthDate}</span> </h2>   
                <h2 className="desc">Location : <span className={"data-span"}>{locationName}</span> </h2>   

                
                <ul className="social list-inline">
                
                    <h2 className="desc">Skills : {skills && skills.map(skill => {
                    return <Badge label={skill} /> 
                    })}  
                    </h2>
                
                </ul> 
                <ul className="social list-inline">
                    <h2 className="desc">Interests : {interests && interests.map(skill => {
                    return <Badge label={skill} /> 
                    })}  
                    </h2>

                </ul> 
            </div>    
            </div>
</div>


<div class="col-md-6 p-0 h-md-100 loginarea">
    <div class="d-md-flex align-items-left h-md-100 p-5 justify-content-left">
    <div className="profile-content float-left">
           
       <div>{[Github,Facebook,Twitter,LinkedIn].forEach(elt =>  <div>heollo</div> )}</div> 
                {/* <a href={`https://${elt}`}> <FontAwesomeIcon className="fa-3x fontAwesomeIcon" icon={"fa"+elt}>{elt}</FontAwesomeIcon></a> */}
                <h2 className="desc">Email : <span className={"data-span"}>{email}</span> </h2>   

                <h2 className="desc">Phone number : <span className={"data-span"}>{phoneNumbers}</span> </h2>   
            
            </div> 
    </div>
    
</div>
    </header> 
    )
}

export default  Header