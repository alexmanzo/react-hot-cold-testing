import React from 'react'
import {shallow} from 'enzyme'

import TopNav from './top-nav'

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
		shallow(<TopNav />)
	})

	it('Should start a new game when new game is clicked', () => {
		const callback = jest.fn()
		const wrapper = shallow(<TopNav onRestartGame={callback} />)
		wrapper.find('.new').simulate('click')
        expect(callback).toHaveBeenCalledWith()
	})

	it('Should generate aural feedback for rules of game', () => {
		const callback = jest.fn()
		const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />)
		wrapper.find('.visuallyhidden').simulate('click')
        expect(callback).toHaveBeenCalledWith()
	})


})