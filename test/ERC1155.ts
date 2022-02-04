import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { Gasoline, Gasoline__factory } from "../typechain";

describe("Gasoline contract", function () {
  let Gas: Gasoline;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addr3: SignerWithAddress;
  let ownerBalance: BigNumber;

  before(async function () {
    [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const gasFactory = (await ethers.getContractFactory(
      "Gasoline", owner
      )) as Gasoline__factory;

     Gas = await gasFactory.deploy();
  });

  describe("Deployment", function () {
    it("Should assign the total supply of tokens to the owner", async function () {
    });
  });

  describe("Filling", function () {
    it("Owner can fill some gas", async function () {
      const toFill = await ethers.utils.parseEther("100");
      const balance1 = await Gas.balanceOf(owner.address, 1);
      console.log("Balance1: " + balance1);
      await Gas.fill(1, toFill);
      const balance2 = await Gas.balanceOf(owner.address, 1);
      console.log("Balance2: " + balance2);
    });

    it("Others cannot fill", async function () {
      const toFill = await ethers.utils.parseEther("100");
      await expect (
        Gas.connect(addr1).fill(1, toFill)
      ).to.be.reverted;
    });

    it("Cannot fill unknown type", async function () {
      const toFill = await ethers.utils.parseEther("100");
      await expect (
        Gas.fill(5, toFill)
      ).to.be.reverted;
    });
  });
});