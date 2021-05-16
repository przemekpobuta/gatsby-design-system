import { render } from '@testing-library/react';
import React from 'react';

import Button, { ButtonColor } from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button label="Aaa" color={ButtonColor.Primary} />);
    expect(baseElement).toBeTruthy();
  });
});
