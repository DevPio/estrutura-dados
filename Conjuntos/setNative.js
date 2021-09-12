const set = new Set();

const union = (setOne, setTwo) => {
  const setUnion = new Set();

  setOne.foreach((value) => setUnion.add(value));
  setTwo.foreach((value) => setUnion.add(value));

  return setUnion;
};

const intersection = (setOne, setTwo) => {
  const setInteer = new Set();

  setOne.foreach((value) => {
    if (setTwo.has(value)) {
      setInteer.add(value);
    }
  });

  return setInteer;
};

const diff = (setOne, setTwo) => {
  const setDiff = new Set();

  setOne.foreach((value) => {
    if (!setTwo.has(value)) {
      setDiff.add(value);
    }
  });

  return setDiff;
};

const unionSpread = (setOne, setTwo) => new Set([...setOne, ...setTwo]);

const intersectSpread = (setOne, setTwo) =>
  new Set([...setOne].filter((x) => setTwo.has(x)));

const diffSpread = (setOne, setTwo) =>
  new Set([...setOne].filter((x) => !setTwo.has(x)));
