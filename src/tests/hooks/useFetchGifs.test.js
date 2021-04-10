import useFetchGifs from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests to useFetchGifs hook', () => {
  const category = 'Digimon';
  it('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  it('should return an images array and set loading to false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBeLessThanOrEqual(36);
    expect(loading).toBeFalsy();
  });
});
