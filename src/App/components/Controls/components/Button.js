import React from 'react'

export function Button({ children, handleClick }) {
  return(
    <div
      className="bg-blue pa3 sans-serif mr2 hover-bg-light-blue br2 pointer f6 white"
      onClick={handleClick}
    >{children}</div>
  );
}
