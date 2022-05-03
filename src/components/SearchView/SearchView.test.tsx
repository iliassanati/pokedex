import SearchView from './SearchView';
import * as ReactDOM from 'react-dom';
import React from 'react';

describe('Search component tests', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<SearchView />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly initial document', () => {
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(4);
  });
});
