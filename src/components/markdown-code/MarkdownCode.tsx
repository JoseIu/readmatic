import { useRef } from 'react';
import toast from 'react-hot-toast';
import { useSection } from '../../hooks/useSection';
import { ClipBoard } from '../icons/ClipBoard';
import './markDownCode.css';

export const MarkdownCode = () => {
  const { sections } = useSection();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const markdown = sections.map((section) => section.content).join('\n\n');

  const copyToClipBoard = async () => {
    if (!textAreaRef.current?.value) return;

    try {
      await navigator.clipboard.writeText(textAreaRef.current.value);
      toast.success('Copied to clipboard');
    } catch (error) {
      if (error instanceof Error) {
        toast.error('Failed to copy to clipboard');
        return;
      }
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className="raw-preview">
      <textarea ref={textAreaRef} className="raw-preview__code" readOnly value={markdown}></textarea>
      <button aria-label="Copy to clipboard" onClick={copyToClipBoard}>
        <ClipBoard className="raw-preview__clipboard" />
      </button>
    </div>
  );
};
