import { task } from "hardhat/config";
import { carsAddr } from "../../hardhat.config";

task("tokenURI", "Prints URI of token by <id>")
.addParam("id", "ID of requested token")
.setAction(async (taskArgs, hre) => {
    const [me] = await hre.ethers.getSigners();
    const contract = await hre.ethers.getContractAt("Cras", carsAddr);
    const result = await contract.tokenURI(taskArgs.id);
    console.log(result.toString());
})