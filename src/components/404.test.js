import * as React from 'react';
import { render } from '@testing-library/react';

import FourOhFour from './404';

describe('FourOhFour', () => {
  it('renders the text "404"', () => {
    const component = render(<FourOhFour />);
    expect(component).toMatchSnapshot();
  })
})