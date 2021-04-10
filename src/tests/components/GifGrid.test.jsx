import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('Tests to <GifGrid /> component', () => {
  const category = 'Digimon';

  it('should display component succesfully', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should display items when images is loaded', () => {
    const data = [
      {
        id: 1,
        title: 'Imagen 1',
        url: 'https://media0.giphy.com/media/IkLhbMyv1TOymOM9Zi/giphy.gif?cid=e86760d9i2tguqtux6et7t9s6ou4oujx3yy60lmce41hzif7&rid=giphy.gif'
      },
    ]
    useFetchGifs.mockReturnValue({
      data,
      loading: false,
    })
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGridItem').length).toBe(data.length);
  })
})