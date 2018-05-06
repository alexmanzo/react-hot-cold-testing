import React from 'react'
import {shallow, mount} from 'enzyme'

import GuessList from './guess-list'

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessList guesses={[]} />)
	})

	it('Should create list of guesses', () => {
		const guesses = [10, 20, 30, 40, 50]
		const wrapper = shallow(<GuessList guesses={guesses} />)
		const items = wrapper.find('li')
		expect(items.length).toEqual(guesses.length)
		guesses.forEach((guess, index) => {
	      expect(items.at(index).text()).toEqual(guess.toString())
	    })
	})

})
