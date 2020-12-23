import './App.css';
import { Provider } from 'react-redux'
import Home from './Components/Home';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddPost from './Components/AddPost';
import Post from './Components/Post';
import UpdatePost from './Components/UpdatePost';

function App() {
  return (
    <Router>
      <Provider store={store} >
        <div className="App">
          <Navbar />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addpost" exact component={AddPost}/>
          <Route path="/post/:id" exact component={Post} />
          <Route path="/updatepost/:id" exact component={UpdatePost} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
