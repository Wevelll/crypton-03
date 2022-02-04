import { task } from "hardhat/config";
import { carsAddr } from "../../hardhat.config";

task("burn", "Burns a car")
.addParam("id", "Id of car to burn")
.setAction( async (taskArgs, hre) => {
  const [me] = await hre.ethers.getSigners();
  const contract = await hre.ethers.getContractAt("Cars", carsAddr); 
  const result = await contract.burnACar(taskArgs.id);
  const total = await contract.totalSupply();
  console.log(total.toString());
});