require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepoliaETH: {
      url: "https://eth-sepolia.g.alchemy.com/v2/EK55l2JUV0Zuu_QJU5oghUA0NKjFsgpN",
      accounts: [
        "664e9487870ea99743d5de196b82998b6ea497fa77a68d77f66b1e7a5fcc6d6b",
      ],
    },
  },
};
