'use client';

const Textarea = ({ ...props }) => {
  const handleExpand = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <textarea onInput={handleExpand} {...props} />
  );
};

export default Textarea;