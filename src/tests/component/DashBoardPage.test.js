import React from   'react';
import {shallow} from 'enzyme';
import DashBoardPage from '../../components/DashBoardPage';



test('Should render expenseDashBoard Page ',()=>{
    const wrapper = shallow(<DashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});


