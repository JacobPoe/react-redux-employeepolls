import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FourOhFour from './404';

describe('FourOhFour', () => {
  it('renders the text "404"', () => {
    const component = render(<FourOhFour />);
    expect(component).toMatchSnapshot();
  })

  it('turns that frown upside-down!', () => {
    const component = render(<FourOhFour />);
    const button = component.getByTestId('flipper');

    fireEvent.click(button);
    expect(component.queryByTestId('happy')).toBeInTheDocument();
    expect(component.queryByTestId('sad')).not.toBeInTheDocument();
  })
  

  it('ensures that state resets properly when pressing the button again', () => {
    const component = render(<FourOhFour />);
    const button = component.getByTestId('flipper');

    fireEvent.click(button);
    expect(component.queryByTestId('happy')).toBeInTheDocument();
    expect(component.queryByTestId('sad')).not.toBeInTheDocument();
    
    fireEvent.click(button);
    expect(component.queryByTestId('happy')).not.toBeInTheDocument();
    expect(component.queryByTestId('sad')).toBeInTheDocument();
  })
})