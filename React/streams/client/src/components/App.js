//727234999419-f8bv4tbij91brm8lnp487qcakemm20ne.apps.googleusercontent.com
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import Header from './Header'
const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header/>

                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/edit" exact component={StreamEdit}/>
                    <Route path="/streams/show" exact component={StreamShow}/>
                    <Route path="/streams/delete" exact component={StreamDelete}/>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App