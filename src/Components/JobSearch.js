import React, {Component} from "react" 
import './JobSearch.scss'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import SearchResults from './SearchResults'
class JobSearch extends Component {  
 constructor(props)
    {
        super(props)
        this.state = {
            searchInput:''
        }
    }

    handleSearchInputChange = (e) => {
        this.setState({searchInput:e.target.value})
    }

    handleSearchFormSubmit = (e) => {
        e.preventDefault()
        if(!this.state.searchInput)
            alert("Please enter keyword to search")
        else
            this.props.history.push(`/search/${this.state.searchInput}`)
    }

render() { 
    return (
        <>
       <div className="titleContainer">
        <h1>Type anthing to find jobs for....</h1>
       </div>
        <form className="searchContainer flex" onSubmit={this.handleSearchFormSubmit}>
            <div className="inputBox flex-1">
                
                <input type="text" autoFocus placeholder="Enter Keyword" onChange={this.handleSearchInputChange}/>
            </div>
            <div className="submitButton flex-1">
                <button type="submit">Search</button>
            </div>
        </form>
        </>
    )
} 
 
} 
export default JobSearch; 
