import './App.css';
import { Header } from './components/header/Header';
import { MonacoEditor } from './components/MonacoEditor/MonacoEditor';
import { SideBar } from './components/side-bar/SideBar';

function App() {
  return (
    <div>
      <Header />

      <div className="content">
        <SideBar />

        <MonacoEditor />
      </div>
    </div>
  );
}

export default App;
