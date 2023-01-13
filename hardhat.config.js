require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
const Goerli_RPC_URL = process.env.Goerli_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
    //defaultNetworK: "hardhat"
    networks: {
        goerli: {
            url: Goerli_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
    },
    solidity: "0.8.17",
}
