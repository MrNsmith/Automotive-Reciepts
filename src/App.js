import "./App.css";



import routes from './routes';
import { withRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
       
       <div>

        {routes}
     

       </div>
    </div>
  );
}

export default withRouter(App);
