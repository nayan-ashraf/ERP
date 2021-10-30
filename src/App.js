import './App.css';
import Application from './components/app.component';
import LogIn from './components/login.component';
function App() {
  // const token ='';
  const token = localStorage.getItem('authenticateToken');
  console.log(token)
  return (
    <div className="App">
      {
        (token)? <Application />: <LogIn />   
      }
      
  
    </div>
  );
}

export default App;
