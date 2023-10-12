import { useState } from 'react';

const FourOhFour = () => {
  const [isUpsideDown, setIsUpsideDown] = useState(false);
  const flipUpsideDown = () => {
    setIsUpsideDown(!isUpsideDown);
  };

  return (
    <>
      <h1>404</h1>
      {isUpsideDown ? (
        <h1 data-testid="happy">:)</h1>
      ) : (
        <h1 data-testid="sad">:(</h1>
      )}
      <button data-testid="flipper" onClick={flipUpsideDown}>
        Click Me!
      </button>
    </>
  );
};

export default FourOhFour;
