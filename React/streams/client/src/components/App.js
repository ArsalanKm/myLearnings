//727234999419-f8bv4tbij91brm8lnp487qcakemm20ne.apps.googleusercontent.com
import React from "react";
import {Router, Route, Switch} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import history from "../history";
import Header from './Header'

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/streams/new" exact component={StreamCreate}/>
                        <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                        <Route path="/streams/:id" exact component={StreamShow}/>
                        <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
export default App