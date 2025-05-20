import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SplitList from '../SplitList';
import TipsContextProvider from '../tipsContext';

describe('SplitList', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('stores calculated value in localStorage', () => {
    const { container, getByText } = render(
      <TipsContextProvider>
        <SplitList />
      </TipsContextProvider>
    );

    const buttons = container.querySelectorAll('button');
    fireEvent.click(buttons[0]);  // waiter 1
    fireEvent.click(buttons[7]);  // food runner 1
    fireEvent.click(buttons[14]); // busboys 1

    fireEvent.click(getByText('Summit'));

    expect(parseFloat(localStorage.getItem('valorTotal'))).toBeCloseTo(2.25);
  });
});
