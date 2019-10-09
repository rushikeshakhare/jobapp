import React from 'react'
import './JobCard.scss'

const JobCard = (props) => {
    return (
        <>
            <div className="jobCard" onClick={() => props.clickLink(props.id)}>
                <div className="jobHeader">
                    <h3>{props.title} <hr/>{props.type}</h3>
                    <h5>Company : {props.company} 
                    <br/>
                    <br/> Location : {props.location}</h5>
                </div>
            </div> 
        </>
    )
}

export default JobCard;