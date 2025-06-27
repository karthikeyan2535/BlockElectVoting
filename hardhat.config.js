require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-amoy.polygon.technology/";
const NEXT_PUBLIC_PRIVATE_KEY = "YOUR_PRIVATE_KEY";

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 31337,
    },
     holesky: {
      url: process.env.HOLESKY_RPC_URL, // 👈 Make sure to set this in .env
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 17000,
    },
    // polygon_amoy: {
    //   url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
    //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    // },
  },
};
