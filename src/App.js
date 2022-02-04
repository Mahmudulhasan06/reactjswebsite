import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Page1 from './component/mainpage/Page1';
import Page2 from './component/mainpage/Page2';
import About from './component/mainpage/About';
import Contact from './component/mainpage/Contact'
import Bedroom from './component/mainpage/Bedroom';
import Dining from './component/mainpage/Dining';
import LIving from './component/mainpage/LIving';
import Launge from './component/mainpage/Launge';
import Office from './component/mainpage/Office';
import OfficeTable from './component/mainpage/OfficeTable';
import Utility from './component/mainpage/Utility';
import Hospital from './component/mainpage/Hospital';





const App = () => {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Page1}/>
          <Route exact path='/page1' component={Page1}/>
          <Route exact path='/page2' component={Page2}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/bedroom' component={Bedroom}/>
          <Route exact path='/dining' component={Dining}/>
          <Route exact path='/living' component={LIving}/>
          <Route exact path='/launge' component={Launge}/>
          <Route exact path='/officechair' component={Office}/>
          <Route exact path='/officetable' component={OfficeTable}/>
          <Route exact path='/utility' component={Utility}/>
          <Route exact path='/hospitalutility' component={Hospital}/>
        </Switch>
    </>
  )
}

export default App