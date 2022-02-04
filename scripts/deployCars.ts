import { ethers } from "hardhat";

async function main() {
  const carsContract = await ethers.getContractFactory("Cars");
  const cars = await carsContract.deploy();

  await cars.deployed();

  console.log("Staking deployed to:", cars.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
