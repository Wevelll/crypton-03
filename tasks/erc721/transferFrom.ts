import { task } from "hardhat/config";
import { carsAddr } from "../../hardhat.config";

task("transferFrom", "Transfers token <from> addr <to> another by <id> if approved")
.addParam("from", "Transfer token from")
.addParam("to", "Transfer token to")
.addParam("id", "ID of token to transfer")
.setAction( async (taskArgs, hre) => {
    const [me] = await hre.ethers.getSigners();
    const contract = await hre.ethers.getContractAt("Cars", carsAddr);
    const restult = await contract.transferFrom(taskArgs.from, taskArgs.to, taskArgs.id);
    console.log("Ok!");
})