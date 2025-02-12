import { Editor, type Monaco } from '@monaco-editor/react';
import OneDarkPro from '../../theme/onedarkpro.json';
import './monacoEditor.css';

export const MonacoEditor = () => {
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
        height="100dvh"
        width="100%"
        theme="OneDarkPro"
        options={{ minimap: { enabled: false } }}
        defaultLanguage="markdown"
        beforeMount={handleEditorDidMount}
      />
    </div>
  );
};
