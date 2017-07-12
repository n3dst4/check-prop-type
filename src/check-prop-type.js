import PropTypes from "prop-types"
import uuidV4 from "uuid/v4"

// check a value against a given prop type
// returns null if the prop type passes, or a string message if there's any
// warning or exception thrown
function checkPropType (propType, value) {
  let result = null
  // prop-types doesn't provide a good way to test a value like this, so we have
  // to monkeypatch console.error
  const _error = console.error
  console.error = (message) => { result = message }
  try {
    // PropTypes.checkPropTypes memorizes based on location and component so
    // that it doesn't repeatedly yield the same warning. randomizing the
    // arguments here busts out of that memorization
    PropTypes.checkPropTypes({value: propType}, {value}, "prop", uuidV4())
  }
  catch (ex) {
    result = ex.message
  }
  finally {
    console.error = _error
  }
  return result
}

export default checkPropType
