import * as React from 'react';
import { render } from '@testing-library/react';

import LeaderboardEntry from "./LeaderboardEntry"

describe('LeaderboardEntry', () => {
  const user = {
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

  it('should properly render the leaderboard card for user "mtsamis"', () => {
    const component = render(<LeaderboardEntry user={user} />)
    expect(component).toMatchSnapshot();
  })
})