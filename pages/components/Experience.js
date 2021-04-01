import React from 'react'

const CoreComponent= ({experience})=> {
    return (
                <section class="projects section">
                    <div class="section-inner">
                        <h2 class="heading">{experience.title.name}</h2>
                        <div class="content">
                            <div class="item">
                                <h3 class="title">Role : {experience.title.role} <span class="badge label-theme">{experience.company.industry}</span></h3>
                                <h3 class="title">Company name : {experience.company.name} </h3>
                                {experience.company.location ? <h3 class="title">Location : {experience.company.location.name} </h3> : "" }
                            </div>    
                                                        
                        </div>
                    </div>              
                </section>
                
    )
}
export default CoreComponent