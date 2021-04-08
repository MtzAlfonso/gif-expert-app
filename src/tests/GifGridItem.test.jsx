import { shallow } from 'enzyme'
import { GifGridItem } from '../components/GifGridItem'

describe('Test to <GifGridItem />', () => {
  it('should display component succesfully', () => {
    const wrapper = shallow(<GifGridItem />)
    expect(wrapper).toMatchSnapshot();
  })

})
