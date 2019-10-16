/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator render tests', () => {
  test('Test if display is updated correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    expect(getByTestId('display').textContent).toBe('1');
  });

  test('Test if operation is executed and displayed correctly', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('='));
    expect(getByTestId('display').textContent).toBe('15');
  });

  test('Test if operation if display is cleared after operation second operand', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    expect(getByTestId('display').textContent).toBe('10');
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('5'));
    expect(getByTestId('display').textContent).toBe('5');
  });

  test('Test if more than 2 operations can be performed without presing "="', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    expect(getByTestId('display').textContent).toBe('10');
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('0'));
    expect(getByTestId('display').textContent).toBe('10');
    fireEvent.click(getByText('*'));
    expect(getByTestId('display').textContent).toBe('20');
    fireEvent.click(getByText('5'));
    expect(getByTestId('display').textContent).toBe('5');
    fireEvent.click(getByText('='));
    expect(getByTestId('display').textContent).toBe('100');
  });

  test('Test if ERROR is shown on negative value answer', () => {
    const { getByText, getByTestId } = render(<Calculator />);
    fireEvent.click(getByText('1'));
    expect(getByTestId('display').textContent).toBe('1');
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('5'));
    expect(getByTestId('display').textContent).toBe('5');
    fireEvent.click(getByText('='));
    expect(getByTestId('display').textContent).toBe('ERROR');
  });
});
