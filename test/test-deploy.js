const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

//describ("SimpleStorage".() => {})
describe("SimpleStorage", function () {
    //let simpleStorageFactory
    //let simpleStorage
    let simpleStorageFactory, SimpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        SimpleStorage = await simpleStorageFactory.deploy()
    })
    it("Should Start with a favorite number of 0", async function () {
        const currentValue = await SimpleStorage.retrieve()
        const expectedValue = "0"
        //assert
        //expect
        assert.equal(currentValue.toString(), expectedValue)
        // expect(currentValue.toString()).to.equal(expectedValue)
    })
    it("Should update when we call store", async function () {
        //it.only() choose specific test
        const expectedValue = "7"
        const transactionResponse = await SimpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await SimpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
