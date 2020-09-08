import React, { useContext } from 'react';

// component
import Card from 'components/Card';

// contexts
import { WorksContext } from 'App';

function Works() {
  const contents = useContext(WorksContext);

  return (
    <div>
      <p>Works</p>
      <Card />
    </div>
  );
}

export default Works;
