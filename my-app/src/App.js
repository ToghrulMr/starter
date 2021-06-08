import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import { Navbar }from './components';
import { InfoSection } from './components';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Home from './pages/HomePage/Home';

function App() {
  return (
<>
<Router>


     <GlobalStyle/>
     <Navbar />
     <Switch>
       <Route patch="/" axact component={Home} />
     </Switch>
 
   
 
    </Router>
   </>

  );
}

export default App;
