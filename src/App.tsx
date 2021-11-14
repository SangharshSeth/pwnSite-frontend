import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Learn from './components/Learn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/signup" exact component={Form} />
        {/* Lession always keep 404 route at last */}
        <Route path="/learn" exact component={Learn} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
