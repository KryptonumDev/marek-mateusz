'use client';
import { forwardRef } from 'react';

const Textarea = forwardRef((props, ref) => {
  const handleExpand = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <textarea
      onInput={handleExpand}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;