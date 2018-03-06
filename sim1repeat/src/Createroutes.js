import React from 'react';
import {Route, Switch} from "react-router-dom";
import Create from './Components/Create';



export default function Binroutes (){
    return (
        <div>

            <Switch>
                <Route path='/create/A1' component={Create}/>
                <Route path='/create/A2' component={Create}/>
                <Route path='/create/A3' component={Create}/>
                <Route path='/create/A4' component={Create}/>
                <Route path='/create/A5' component={Create}/>
            </Switch>
        </div>
    )
}