import Input from './Input';
import * as ReactDOM from 'react-dom';

describe('Input component tests', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<Input />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it('Renders correctly initial document', () => {
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(1);
    expect(inputs[0].type).toBe('text');
    const label = container.querySelector('label');
    expect(label).not.toBeInTheDocument();
  });
});
