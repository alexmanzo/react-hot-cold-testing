import React from 'react'
import {shallow} from 'enzyme'

import GuessCount from './guess-count'

describe('<AuralStatus />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />)
	})

	it('Should render the guess count', () => {
		const count = 5

		const wrapper = shallow(<GuessCount guessCount={5} />)
		expect(wrapper.text()).toEqual(`You've made ${count} guesses!`)
	})

})



