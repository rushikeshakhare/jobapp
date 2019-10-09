import React,{Component} from 'react'
import JobService from '../Services/JobService'
import './JobDetails.scss'
import LoadingScreen from './LoadingScreen' 
import {If} from './ConditionalComponents'
const jobServiceInstance = new JobService()

class JobDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            status :false,
            jobDetails:{

            }
        }

        jobServiceInstance
        .fetchJobById(this.props.match.params.id)
        .then(job => this.updateJobDetails(job))
    }

    updateJobDetails = (jobDetails) => {
        this.setState({status:true,jobDetails})
    }

    createMarkup = (htmlMarkup) => {
        return {__html: htmlMarkup};
      }

    render(){
        
        return (
            <>
                <If condition={!this.state.status}>
                    <LoadingScreen />
                </If>
                <If condition={this.state.status}>
                    
                    <div className="jobDetails">
                        <h1>Job Details</h1>
                        <hr/>
                        <div className="flex">
                            <div className="flex-1 text-center pad-2">
                                <img src={this.state.jobDetails.company_logo} alt={this.state.jobDetails.company_logo}/>
                                <h3>Company : {this.state.jobDetails.company}</h3>
                                <div className="applyButton" dangerouslySetInnerHTML={this.createMarkup(this.state.jobDetails.how_to_apply)}></div>
                                <button className="backButton" onClick={this.props.history.goBack}>Go Back</button>
                            </div>  
                            <div className="flex-3 text-left pad-2">
                                <h1>{this.state.jobDetails.title}</h1>
                                <h4>Location : {this.state.jobDetails.location}</h4>
                                <h4>Job Type : {this.state.jobDetails.type}</h4>
                                <h5>Job Description : </h5>
                                <div dangerouslySetInnerHTML={this.createMarkup(this.state.jobDetails.description)}></div>
                            </div>
                        </div>
                       
                       
                    </div>
                </If>
            </>
        )
    }

}

export default JobDetails