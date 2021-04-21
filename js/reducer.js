function changeState(state, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const render = () => (document.body.textContent = state.count);

const dispatch = (action) => {
  state = changeState(state, action);
  render();
};

let state = { count: 0 };
let action = { type: "INCREASE_COUNT" };

dispatch({ type: "INCREASE_COUNT" });
