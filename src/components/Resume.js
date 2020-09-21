import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              { resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.title}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div> 
         </div>

         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Top Skills</span></h1>
            </div>
            <div className="nine columns main-col">
               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {resumeData.skill1 && resumeData.skill1.map((item) => {
                    return(
                      <li>
                      <span className={`bar-html ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )})
                }
   					</ul>
             <ul className="skills">
                {resumeData.skill2 && resumeData.skill2.map((item) => {
                    return(
                      <li>
                      <span className={`bar-js ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )})
                }
   					</ul>
             <ul className="skills">
                {resumeData.skill3 && resumeData.skill3.map((item) => {
                    return(
                      <li>
                      <span className={`bar-react ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )})
                }
   					</ul>
             <ul className="skills">
                {resumeData.skill4 && resumeData.skill4.map((item) => {
                    return(
                      <li>
                      <span className={`bar-node ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )})
                }
   					</ul>
             <ul className="skills">
                {resumeData.skill5 && resumeData.skill5.map((item) => {
                    return(
                      <li>
                      <span className={`bar-python ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )})
                }
   					</ul>
   				</div>
   			</div>
         <div className="row education">

<div className="three columns header-col">
   <h1><span>Courses</span></h1>
</div>

<div className="nine columns main-col">
  {
    resumeData.education && resumeData.education.map((item)=>{
      return(
        <div className="row item">
           <div className="twelve columns">
              <h4>{item.title}</h4>
              <p className="info">
                <strong>Key Technologies Covered: </strong>{item.details}<br></br><em>{item.author}</em>
              </p>
           </div>
        </div>
      )
    })
  }
</div>
</div>
         </div>
      </section>
    );
  }
}