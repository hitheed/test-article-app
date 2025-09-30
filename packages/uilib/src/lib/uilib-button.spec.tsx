import { render } from '@testing-library/react';

import UilibButton from './uilib-button';

describe('UilibButton', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<UilibButton />);
    expect(baseElement).toBeTruthy();
  });
  
});
