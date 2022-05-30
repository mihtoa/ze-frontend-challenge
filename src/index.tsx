import React from 'react';
import { createRoot } from 'react-dom/client';

import './main.scss';

class Square extends React.Component {
  render() {
    return (
      <p>Classe</p>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<Square />);
