import React from 'react'
import {shallow, mount} from 'enzyme'

import Feedback from './feedback'

describe('<Feedback />', () => {
	it('Renders without crashing', () => {
		shallow(<Feedback />)
	})

	it('Renders feedback', () => {
		const testFeedback = 'The feedback is working!'
		const wrapper = shallow(<Feedback feedback={testFeedback} />)
		expect(wrapper.contains(testFeedback)).toEqual(true)

	})

})



