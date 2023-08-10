export const changeInputs = (setState, value, type) => {
  setState(previous => ({...previous, [type]:value}))
};