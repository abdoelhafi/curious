import Header  from '../components/Header'
import Experience from '../components/Experience'
import Education from '../components/Education'

import Footer from '../components/Footer'

const Profile = ({data})=>{
    // console.log("the data fetched from the api : "+JSON.stringify(data));
    const headerData = {
      fullName:data.full_name,
      jobTitle:data.job_title,
      jobCompany:data.job_company_name,
      birthDate:data.birth_date,
      phoneNumbers:data.mobile_phone,
      locationName:data.location_name,
      interests:data.interests,
      skills:data.skills,
      email:data.work_email,
      Facebook:data.facebook_url,
      Twitter:data.twitter_url,
      Github:data.github_url,
      LinkedIn:data.linkedin_url,
      gender:data.gender,
      experience:data.experience,
      education: data.education
    } 
    // console.log("this might be not null : "+ JSON.stringify(data))

    return(
        <>
            <body>
                <Header data = {headerData} />
                <div class="container sections-wrapper">
                    <div class="row">
                        <h2 class="heading">Experiences {data.full_name}</h2>
                        <div>

                            { headerData.experience.map(e=>{
                              return <Experience experience={e} />
                              
                            })}
                            
                        </div>

                        <h2 class="heading">Education</h2>

                        <div>
                            { headerData.education.map(e=>{
                              return <Education education={e} />
                              
                            })}
                        </div>
                    </div>
                </div>
                <Footer/>
            </body>
        </>
    )
}
export async function getServerSideProps(context) {
    const { type,value } = context.query;
    const result = await fetch(`https://api.peopledatalabs.com/v5/person/enrich?pretty=true&api_key=${process.env.PEOPLE_DATA_API_KEY}&${type}=${value}`);
    const payload = await result.json();
  
    if (!payload) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    const data = await payload.data;
  
    return {
      props: { data }
    }
  }
  

export default Profile