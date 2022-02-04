import { task } from "hardhat/config";
import { carsAddr } from "../../hardhat.config";

task("mint", "Mints a car")
.setAction( async (taskArgs, hre) => {
  const [me] = await hre.ethers.getSigners();

  const contract = await hre.ethers.getContractAt("Cars", carsAddr); 
  const result = await contract.mintACar();
  const total = await contract.totalSupply();
  console.log(total.toString());
});