import { Toaster } from 'react-hot-toast';
import './App.css';
import { Header } from './components/header/Header';
import { MonacoEditor } from './components/MonacoEditor/MonacoEditor';
import { PreviewSection } from './components/preview-section/PreviewSection';
import { SideBar } from './components/side-bar/SideBar';
import { SectionProvider } from './context/SectionProvider';

function App() {
  return (
    <>
      <Header />

      <main className="content">
        <SectionProvider>
          <SideBar />

          <div className="content__editor">
            <MonacoEditor />

            <PreviewSection />
          </div>
        </SectionProvider>
      </main>
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />
    </>
  );
}

export default App;
