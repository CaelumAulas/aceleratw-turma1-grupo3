import './App.css';
import Header from './components/Header/Header';
import SignUp from './components/User/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SignUp />
      </main>
    </div>
  );
}

export default App;
