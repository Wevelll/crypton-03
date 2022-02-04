import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
//import { carsAddr } from "../hardhat.config";

dotenv.config();
export const ipfsURI = process.env.IPFS_URI !== undefined ? process.env.IPFS_URI : "";
export const carsAddr = process.env.CARS_ADDR !== undefined ? process.env.CARS_ADDR : "";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("grant", "You know anyways", async (taskArgs, hre) => {
  const [me] = await hre.ethers.getSigners();

  const contract = await hre.ethers.getContractAt("Cars", carsAddr); 
  const result = await contract.mintACar();
  console.log(result.toString());
});

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
  }
};

export default config;
