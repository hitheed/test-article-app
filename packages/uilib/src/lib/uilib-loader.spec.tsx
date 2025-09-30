import { render } from '@testing-library/react';

import UilibLoader from './uilib-loader';

describe('UilibLoader', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<UilibLoader />);
    expect(baseElement).toBeTruthy();
  });
  
});
