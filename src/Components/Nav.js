import React from 'react'
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import JobSearch from './JobSearch'
import SearchResults from './SearchResults'
import JobDetails from './JobDetails'

const Nav = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={JobSearch} />
                    <Route path="/search/:keyword" component={SearchResults} />
                    <Route path="/job/:id" component={JobDetails} />
                </Switch>
            </Router>
        </div>
    );
}

export default Nav;