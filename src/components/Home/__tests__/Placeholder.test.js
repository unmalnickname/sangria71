import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Placeholder from '../Placeholder';
import { StorageContext } from '../storageContext';

describe('Placeholder', () => {
  test('sums inputs and calls guardarTips', () => {
    const guardarTips = jest.fn();
    const contextValue = {
      tips: 0,
      guardarTips,
      split: [],
      guardarSplit: jest.fn()
    };
    const { container, getByText } = render(
      <StorageContext.Provider value={contextValue}>
        <Placeholder />
      </StorageContext.Provider>
    );
    const cashInput = container.querySelector('#amount-Cash');
    const cardInput = container.querySelector('#amount-Cards');

    fireEvent.change(cashInput, { target: { value: '5' } });
    fireEvent.change(cardInput, { target: { value: '7' } });

    fireEvent.click(getByText('Summit'));

    expect(guardarTips).toHaveBeenCalledWith(12);
  });
});
