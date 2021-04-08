import { shallow } from 'enzyme'
import { GifGridItem } from '../components/GifGridItem'
import { getAnimation } from '../helpers/getAnimation';

describe('Tests to <GifGridItem /> component', () => {
  const title = "Test image";
  const url = "https://media3.giphy.com/media/aAbax5anloMNk6TSP9/giphy.gif?cid=e86760d95y2z6y7ymx0qvi4tnrrkqpgjk9vijukkszi1jskf&rid=giphy.gif";
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  it('should display component succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a paragraph with the title', () => {
    const textParagraph = wrapper.find('p').text().trim();
    expect(textParagraph).toBe(title)
  })

  it('should have the image and alternative text recived from the props', () => {
    const image = wrapper.find('img');

    expect(image.props().src).toBe(url);
    expect(image.props().alt).toBe(title);
  })

  //? El siguiente test funciona cuando las clases están definidas.
  //? En esta app utilizamos clases aleatorias

  /* it('should have the class defined in the className prop', () => {
    const testClass = getAnimation();
    const testClassName = wrapper.find('div').prop('className');
    expect(testClassName.includes(testClass)).toBeTruthy();
  }) */
})
