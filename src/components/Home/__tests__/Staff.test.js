import React from 'react';
import { render } from '@testing-library/react';
import Staff from '../Staff';
import { StorageContext } from '../storageContext';
import { TipsContext } from '../../Staff/tipsContext';

describe('Staff component', () => {
  beforeEach(() => {
    localStorage.setItem('valorTotal', '5');
  });

  test('displays calculated shares', () => {
    const storageValue = {
      tips: 100,
      guardarTips: jest.fn(),
      split: [],
      guardarSplit: jest.fn()
    };
    const tipsValue = { valorFinal: 0 };

    const { container } = render(
      <TipsContext.Provider value={tipsValue}>
        <StorageContext.Provider value={storageValue}>
          <Staff />
        </StorageContext.Provider>
      </TipsContext.Provider>
    );

    const text = container.textContent;
    expect(text).toContain('$19.00');
    expect(text).toContain('$14.00');
    expect(text).toContain('$9.00');
    expect(text).toContain('$5.00');
    expect(text).toContain('-101');
  });
});
