import React from 'react'

import { List } from './List'
import { Controls } from './Controls'

export function View({ toggleList, showList, scientists }) {
  return(
    <div>
      <p className="pa3 white bg-black-80 sans-serif mv0">Scientists!</p>
      <Controls
        toggleList={toggleList}
      />
      {showList && <List scientists={scientists} />}
    </div>
  );
}
