import { getFetchGifs } from '../../helpers/getFetchGifs';

describe('Tests to getFetchGifs() helper', () => {
  it('should fetch 36 gifs', async () => {
    const gifs = await getFetchGifs('Digimon');
    expect(gifs.length).toBe(36);
  });

  it("shouldn't fetch gifs", async () =>{
    const gifs = await getFetchGifs('');
    expect(gifs.length).toBe(0);
  });
});
