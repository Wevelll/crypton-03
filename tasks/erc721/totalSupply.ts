import { task } from "hardhat/config";
import { carsAddr } from "../../hardhat.config";

task("totalSupply", "Prints total supply of tokens")
.setAction( async (taskArgs, hre) => {
    const [me] = await hre.ethers.getSigners();
    const contract = await hre.ethers.getContractAt("Cars", carsAddr);
    const result = await contract.totalSupply();
    console.log(result.toString());
})