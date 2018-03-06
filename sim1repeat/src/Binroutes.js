import React from 'react';
import {Route, Switch} from "react-router-dom";
import Bin from './Components/Bin';



export default function Binroutes (){
    return (
        <div>

            <Switch>
                <Route path='/bin/A1' component={Bin}/>
                <Route path='/bin/A2' component={Bin}/>
                <Route path='/bin/A3' component={Bin}/>
                <Route path='/bin/A4' component={Bin}/>
                <Route path='/bin/A5' component={Bin}/>
                {/* <Route exact path='/A' component={ShelfA}/> */}
            </Switch>
        </div>
    )
}