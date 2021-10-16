const header = require("./header")

// @ponicode
describe("toggle", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "George", "Michael"], ["George", "Jean-Philippe", "George"], ["Michael", "Jean-Philippe", "Anas"]]
        inst = new header.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.toggle()
        }
    
        expect(callFunction).not.toThrow()
    })
})
