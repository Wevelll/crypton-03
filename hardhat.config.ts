import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "./tasks/index";

dotenv.config();
export const carsAddr = process.env.CARS_ADDR !== undefined ? process.env.CARS_ADDR : "";
export const gasAddr = process.env.GAS_ADDR !== undefined ? process.env.GAS_ADDR : "";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
  },
  etherscan: {
    apiKey: 
      process.env.ETHERSCAN_KEY !== undefined ? process.env.ETHERSCAN_KEY : ""
  }
};

export default config;
