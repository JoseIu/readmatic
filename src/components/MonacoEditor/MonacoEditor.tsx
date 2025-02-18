import { Editor, type Monaco } from '@monaco-editor/react';
import { useSection } from '../../hooks/useSection';
import OneDarkPro from '../../theme/onedarkpro.json';
import './monacoEditor.css';

export const MonacoEditor = () => {
  const { sectionActive, updateSection } = useSection();
  const handleEditorDidMount = (monaco: Monaco) => {
    monaco.editor.defineTheme('OneDarkPro', {
      base: 'vs-dark',
      inherit: true,
      ...OneDarkPro,
    });
  };

  const onUpdadeSection = (value: string | undefined) => {
    if (!value) return;
    if (!sectionActive) return;
    updateSection(sectionActive.id, value);
  };
  return (
    <div className="editor">
      <Editor
        height="100%"
        width="100%"
        theme="OneDarkPro"
        options={{ minimap: { enabled: false }, lineNumbers: 'off' }}
        value={sectionActive?.content ?? ''}
        defaultLanguage="markdown"
        beforeMount={handleEditorDidMount}
        onChange={(value) => onUpdadeSection(value)}
      />
    </div>
  );
};
