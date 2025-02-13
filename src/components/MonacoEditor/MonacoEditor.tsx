import { Editor, type Monaco } from '@monaco-editor/react';
import { useSection } from '../../hooks/useSection';
import OneDarkPro from '../../theme/onedarkpro.json';
import './monacoEditor.css';

export const MonacoEditor = () => {
  const { sectionActive } = useSection();
  const handleEditorDidMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('OneDarkPro', {
      base: 'vs-dark',
      inherit: true,
      ...OneDarkPro,
    });
  };
  return (
    <div className="editor">
      <Editor
        height="calc(100vh - 3.1rem)"
        width="100%"
        theme="OneDarkPro"
        options={{ minimap: { enabled: false } }}
        value={sectionActive?.content ?? ''}
        defaultLanguage="markdown"
        beforeMount={handleEditorDidMount}
      />
    </div>
  );
};
