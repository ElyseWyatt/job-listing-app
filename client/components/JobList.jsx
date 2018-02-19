import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
//Job list output
const JobList = props => {
    return (
        <div>
            <ul className='list-render'>
                {props.jobs.map((topost, id) => {
                    return <li key={id} className='job-font'><a href={topost.url} target='_blank'>{topost.job}: {topost.company}</a> <br></br> <span className='region-style'>{topost.region} | {moment().startOf('day').fromNow()}</span></li>
    
                })}
            </ul>
        </div>
    )
}

export default JobList

