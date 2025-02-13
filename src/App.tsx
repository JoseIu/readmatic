import './App.css';
import { SectionProvider } from './components/context/SectionProvider';
import { Header } from './components/header/Header';
import { MonacoEditor } from './components/MonacoEditor/MonacoEditor';
import { Preview } from './components/preview/Preview';
import { SideBar } from './components/side-bar/SideBar';

function App() {
  return (
    <div>
      <Header />

      <div className="content">
        <SectionProvider>
          <SideBar />

          <div className="content__editor">
            <MonacoEditor />
            <Preview />
          </div>
        </SectionProvider>
      </div>
    </div>
  );
}

export default App;
