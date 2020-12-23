import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Maintenance from './Components/Maintenance/Maintenance'
import Construction from './Components/Construction';
import Warehouse from './Components/Warehouse';
import Moco from './Components/Moco';
import ShopExpense from './Components/Shop-Expense';
import TypeOfRepair from './Components/TypeOfRepair';
import House from './Components/House';
import Submit from './Components/Submit';





 
export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path = "/Submit" component={Submit}/>
        <Route path="/Construction" component={Construction} />
        <Route path="/House" component={House} />
        <Route path="/Moco" component={Moco} />
        <Route path="/Warehouse" component={Warehouse} />
        <Route path="/Shop Expense" component={ShopExpense} />
        {/* part two */}
        <Route path="/Maintenance" component={Maintenance} />
        <Route path="/Other" component={Maintenance} />
          {/* part three */}
        <Route path="/Repair" component={TypeOfRepair} />
 
       
        
    </Switch>
)