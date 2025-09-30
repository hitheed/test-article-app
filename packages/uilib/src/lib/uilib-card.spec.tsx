import { render } from '@testing-library/react';

import UilibCard from './uilib-card';

describe('UilibCard', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<UilibCard />);
    expect(baseElement).toBeTruthy();
  });
  
});
