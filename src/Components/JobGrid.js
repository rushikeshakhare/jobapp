import React from 'react'
import JobCard from './JobCard'

const JobGrid = ({jobItems,clickLink}) => {
    return (
        <>
       
        <div className="jobGrid">
            {jobItems.map((job,index)  => {
                return <JobCard key={index} clickLink={clickLink} {...job} />
            })}
        </div>
        </>
    )
}

export default JobGrid;