import { ethers } from "hardhat";

async function main() {
  const gasContract = await ethers.getContractFactory("Gasoline");
  const gas = await gasContract.deploy();

  await gas.deployed();

  console.log("Gasoline deployed to:", gas.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
