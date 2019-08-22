import React from 'react'
import { BrowserRouter as Router} from "react-router-dom"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../../reducers';

import NavBar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'

const App = () =>{
    return (
        <Provider store={createStore(reducers)}>
            <Router>
                    <div className="row">
                        <Sidebar/>
                        <NavBar/>
                    </div>
            </Router>
        </Provider>
    )
}

export default App