import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import Select from '../select';

Enzyme.configure({ adapter: new Adapter() });

describe('Test Case For Select', () => {
    it('should render component', () => {
        const wrapper = shallow(<Select />)
        expect(wrapper).toMatchSnapshot();
    })
})