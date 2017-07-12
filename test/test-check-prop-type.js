/*global describe, it*/

import chai from "chai"
import sinonChai from "sinon-chai"
import checkPropType from "../src/check-prop-type"
import PropTypes from "prop-types"

chai.use(sinonChai)
const expect = chai.expect

describe("checkPropType", function () {
  it("should return a string warning for an invalid prop", function () {
    const result = checkPropType(PropTypes.string, 1)
    expect(result).to.be.a("string")
  })
  it("should return null for a valid prop", function () {
    const result = checkPropType(PropTypes.string, "asd")
    expect(result).to.be.null
  })
  it("should handle isRequired cases", function () {
    const result = checkPropType(PropTypes.string.isRequired, undefined)
    expect(result).to.be.a("string")
  })
})
