import React from 'react';

import { Users } from './users';
import { ConnectButtons } from './connectButtons';

export function Connect(props) {
  return (
    <main className='bg-white'>
      <Users userName={props.userName} />
      <ConnectButtons userName={props.userName} />
    </main>
  );
}
