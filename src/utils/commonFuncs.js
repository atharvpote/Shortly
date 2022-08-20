export function preventDefault(event) {
  event.preventDefault();
}

export const keyGen = uniqueKeyGen();

function uniqueKeyGen() {
  const assignedKeys = {};

  return function generator() {
    const key = Math.floor(Math.random() * 1000000);

    if (key in assignedKeys) return generator();

    assignedKeys[key] = key;

    return assignedKeys[key];
  };
}
