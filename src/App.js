import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="app wrapper">
      <h1 className="app__title">Kalkulator stanowiska komputerowego</h1>
     <Form/>
     <Table/>
    </div>
  );
}

export default App;
