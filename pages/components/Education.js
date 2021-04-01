import React from 'react'

const Education= ({education})=> {
    return (
                <section class="projects section">
                    <div class="section-inner">
                        <h2 class="heading">{education.school.name}</h2>
                        <div class="content">
                            <div class="item">
                                <h3 class="title"> School fields : {education.school.type}</h3>
                                <h3 class="title"> Started at : {education.start_date} </h3>
                                <h3 class="title"> End at : {education.end_date} </h3>

                            </div>    
                                                        
                        </div>
                    </div>              
                </section>
                
    )
}
export default Education