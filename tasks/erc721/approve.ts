import { task } from "hardhat/config";
import { carsAddr } from "../../hardhat.config";

task("approve", "Approves")
.addParam("to", "Address to be approved")
.addParam("id", "Id of token to approve")
.setAction(async (taskArgs, hre) => {
    const [me] = await hre.ethers.getSigners();
    const contract = await hre.ethers.getContractAt("Cars", carsAddr);
    const result = await contract.approve(taskArgs.to, taskArgs.id);
    console.log("Done!");
})