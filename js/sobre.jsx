import React from 'react';
import { createRoot } from 'react-dom/client';

function SobreContent() {
  return <h1>Hello from React!</h1>;
}

const domNode = document.getElementById('sobreMain');
const root = createRoot(domNode);
root.render(<SobreContent />);
