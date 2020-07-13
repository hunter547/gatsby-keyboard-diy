const initialState = { load: 0  }

const reducer = (state = initialState, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      load: state.load + 1,
    })
  }
  return state
}

export default reducer;