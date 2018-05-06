import React from 'react'
import {shallow, mount} from 'enzyme'

import AuralStatus from './aural-status'

describe('<AuralStatus />', () => {
	it('Renders without crashing', () => {
		shallow(<AuralStatus />)
	})

	it('Should render the status readout', () => {
		const testStatus = 'The aural feedback is working!'
		const wrapper = shallow(<AuralStatus auralStatus={testStatus} />)
		expect(wrapper.contains(testStatus)).toEqual(true)
	})

})

