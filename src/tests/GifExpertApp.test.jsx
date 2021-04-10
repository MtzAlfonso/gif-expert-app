import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"

describe('Tests to <GifExpertApp /> component', () => {
  it('should display component succesfully', () => {
    const wrapper = shallow(<GifExpertApp />)
    expect(wrapper).toMatchSnapshot();
  })
})