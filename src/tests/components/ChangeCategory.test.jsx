import { shallow } from "enzyme"
import { ChangeCategory } from '../../components/ChangeCategory'

describe('Tests to <ChangeCategory /> component', () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<ChangeCategory setCategory={setCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<ChangeCategory setCategory={setCategory} />);
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('should display component succesfully', () => {
    expect(wrapper).toMatchSnapshot();
  })

  //? Este test verifica que el evento sí cambie el contenido del input
  it('should change text input', () => {
    const textInput = wrapper.find('input');
    const value = 'hola mundo';
    textInput.simulate('change', { target: { value } });
    expect(wrapper.find('input').prop('value')).toBe(value)
  })

  it("shouldn't handle info with submit", () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(setCategory).not.toHaveBeenCalled();
  })

  it('should call setCategory and clean input', () => {
    const value = 'hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });

    wrapper.find('form').simulate('submit', { preventDefault: () => { } });

    expect(setCategory).toHaveBeenCalled();
    expect(setCategory).toHaveBeenCalledTimes(1);
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value')).toBe('');
  })
})
