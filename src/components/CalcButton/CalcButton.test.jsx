/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import CalcButton from './CalcButton';

describe('CalcButton render tests', () => {
  test('Test if component is render correctly', () => {
    const container = render(<CalcButton label="Button" hook={() => null} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
