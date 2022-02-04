import { task } from "hardhat/config";
import { gasAddr } from "../../hardhat.config";

task("fill", "Fills some gas of <type>")
.addParam("type", "Type of gas to fill")
.addParam("value", "Amount of gas to fill")
.setAction( async (taskArgs, hre) => {
    const [me] = await hre.ethers.getSigners();
    const contract = await hre.ethers.getContractAt("Gasoline", gasAddr);
    const result = await contract.fill(taskArgs.type, hre.ethers.utils.parseEther(taskArgs.value))
})