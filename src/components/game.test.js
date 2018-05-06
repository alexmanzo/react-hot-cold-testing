import React from 'react'
import {shallow, mount} from 'enzyme'

import Game from './game'

describe('<Game />', () => {
	it('Renders without crashing', () => {
		shallow(<Game />)
	})

	it('can start a new game', () => {
		const wrapper = shallow(<Game />)
		wrapper.setState({
			guesses: [10, 20, 44],
			feedback: 'Hot!',
			correctAnswer: 4
		})
		wrapper.instance().restartGame();
    	expect(wrapper.state('guesses')).toEqual([]);
    	expect(wrapper.state('feedback')).toEqual('Make your guess!');
    	expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    	expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);

	})

	it('can make guesses', () => {
		const wrapper = shallow(<Game />)
		wrapper.setState({
			correctAnswer: 75
		})
		wrapper.instance().makeGuess(4)
		expect(wrapper.state('guesses')).toEqual([4])
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
		wrapper.instance().makeGuess('ke')
		expect(wrapper.state('feedback')).toEqual('Please enter a valid number')
		wrapper.instance().makeGuess(78)
		expect(wrapper.state('guesses')).toEqual([4, 78])
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!')
		wrapper.instance().makeGuess(75)
		expect(wrapper.state('feedback')).toEqual('You got it!')
	})

	it('Can generate aural updates', () => {
    const wrapper = shallow(<Game />);

    wrapper.setState({
	      correctAnswer: 100
	    });

	    wrapper.instance().makeGuess(25)
	    wrapper.instance().makeGuess(3)
	    wrapper.instance().makeGuess(90)

	    wrapper.instance().generateAuralUpdate()

	    expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Warm. You\'ve made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25')
  })
})



































// // Props and state: Does what's rendered reflect the component's props and state?
// // Callbacks and events: Are callbacks fired when the user interacts with a component? Is the state updated correctly?