import * as React from 'react';
import { render } from '@testing-library/react';

import LeaderboardEntry from "./LeaderboardEntry"

describe('LeaderboardEntry', () => {

  it('should renders the leaderboard card for user "mtsamis"', () => {
    const component = render(<LeaderboardEntry user={authedUser} />)
    expect(component).toMatchSnapshot();
  })

  it('should properly populate all fields using the user object', () => {
    const component = render(<LeaderboardEntry user={authedUser} />)
    
    const name = component.getByTestId('entry-name');
    expect(name).toBeInTheDocument();
    
    const id = component.getByTestId('entry-id');
    expect(id).toBeInTheDocument();
    
    const questions = component.getByTestId('entry-questions');
    expect(questions).toBeInTheDocument();
    
    const answers = component.getByTestId('entry-answers');
    expect(answers).toBeInTheDocument();
    
    const total = component.getByTestId('entry-total');
    expect(total).toBeInTheDocument();
  })
})

it('should indicate if a card on the leaderboard is the card of the active user', () => {
    const component = render(<LeaderboardEntry user={authedUser} isActiveUser={true} />)
    const userTile = component.getByTestId('user-tile__authenticated')
    expect(userTile).toBeInTheDocument();
})

const authedUser = {
  "id": "mtsamis",
  "password": "xyz123",
  "name": "Mike Tsamis",
  "avatarURL": "https://www.bungie.net/common/destiny2_content/icons/23e3d07bead2936a80612419f3ee9f94.jpg",
  "answers": {
      "xj352vofupe1dqz9emx13r": "optionOne",
      "vthrdm985a262al8qx3do": "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne"
  },
  "questions": [
      "6ni6ok3ym7mf1p33lnez",
      "xj352vofupe1dqz9emx13r"
  ]
}
