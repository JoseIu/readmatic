import { useState } from 'react';
import { MarkdownCode } from '../markdown-code/MarkdownCode';
import { Preview } from '../preview/Preview';
import './previewSection.css';

const butonClass = 'preview-section__btn--active';
export const PreviewSection = () => {
  const [isPreview, setIsPreview] = useState(true);

  return (
    <div className="preview-section">
      <header className="preview-section__header">
        <button
          className={`preview-section__btn ${isPreview && butonClass}`}
          onClick={() => setIsPreview(true)}
        >
          Preview
        </button>
        <button
          className={`preview-section__btn ${!isPreview && butonClass}`}
          onClick={() => setIsPreview(false)}
        >
          Code
        </button>
      </header>

      {isPreview ? <Preview /> : <MarkdownCode />}
    </div>
  );
};
