import React from 'react';

import { Family } from './users';
import { FamilyActions } from './familyActions';

export function Connect(props) {
  return (
    <main className='bg-white'>
      <Family userName={props.userName} />
      <FamilyActions userName={props.userName} />
    </main>
  );
}
