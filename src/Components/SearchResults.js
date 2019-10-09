import React, {Component} from "react" 
import LoadingScreen from './LoadingScreen' 
import JobService from '../Services/JobService'
import {If} from './ConditionalComponents'
import JobGrid from './JobGrid'
import './SearchResults.scss'
const jobServiceInstance = new JobService()

const SearchResultsHeader = ({goBack,itemCount}) => {
    return (
        <>
            <div className="jobResultsTitle">
                <button className="backButton" onClick={goBack}>Back to search</button>
                <h2>Total Job Results : {itemCount}</h2>
            </div>
        </>
    )
}

const HandleSearchResults = ({itemCount,goBack,jobItems,clickLink}) => {
    return (
        <>
            <If condition={itemCount != 0}>
                <SearchResultsHeader goBack={goBack} itemCount={itemCount}/>
                <JobGrid jobItems={jobItems} clickLink={clickLink}/>
            </If>
        </>
    )
}

class SearchResults extends Component {  
 
    constructor(props){
        super(props)

        this.state = {
            status:false,
            jobItems:[],
            error:{
                status:false,
                text:''
            }
        }

        jobServiceInstance
        .fetchAllJobsByKeyword(this.props.match.params.keyword)
        .then(jobs => this.updateJobItems(jobs)).catch(error => this.notifyServerError("Sorry ! The Server did not respond"));
    }

    notifyServerError = (text) => {
        this.setState({error:{status:true,text}})
    }

    updateJobItems = (jobItems) => {
        if(jobItems.length != 0)
            this.setState({jobItems,status:true})
        else
            this.setState({error:{status:true,text:"Sorry ! No jobs found for that keyword"}})
    }

    handleJobCardClick = (id) => {
        this.props.history.push(`/job/${id}`)
    }

    render() { 
            return (
                <div className="searchResults">
                    <If condition={!this.state.error.status}>
                        <If condition={!this.state.status}>
                            <LoadingScreen />
                        </If>
                        <If condition={this.state.status}>
                            <HandleSearchResults itemCount={this.state.jobItems.length}
                            goBack={() => this.props.history.push('/')}
                            jobItems={this.state.jobItems}
                            clickLink={this.handleJobCardClick}/>
                        </If>
                    </If>
                    <If condition={this.state.error.status}>
                        <div className="jobResultsTitle">
                            <button className="backButton" onClick={() => this.props.history.push('/')}>Back to search</button>
                        </div>
                      
                        <h1 class="warningMessage">{this.state.error.text}</h1>
                    </If>
                </div>
            )
    } 
    
} 
export default SearchResults; 
