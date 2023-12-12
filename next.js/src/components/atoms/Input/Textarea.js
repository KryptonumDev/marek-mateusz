'use client';

const Textarea = ({ ...props }) => {
  const autoExpandTextArea = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <textarea onInput={autoExpandTextArea} {...props} />
  );
};

export default Textarea;