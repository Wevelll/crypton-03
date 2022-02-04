import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Cars, Cars__factory } from "../typechain";

describe("Cars contract", function () {
  let Cars: Cars;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  before(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const CarsFactory = (await ethers.getContractFactory(
      "Cars", owner
    )) as Cars__factory;

    Cars = await CarsFactory.deploy();
  })

  describe("Deployment", function () {
    it("Should successfully deploy", async function () {
      expect (
        await Cars.name()
      ).to.be.equal("Cars");

    });
  });

  describe("Minting", function () {
    it("Should mint a car", async function () {
      await expect (
        Cars.mintACar()
      ).to.satisfy;
    });

    it("Cannot mint more that limit", async function () {
      await Cars.mintACar();
      await Cars.mintACar();
      await Cars.mintACar();
      await Cars.mintACar();
      await expect (
        Cars.mintACar()
      ).to.be.reverted;
    });

  });

  describe("Burning", function () {
    it("Owner can burn the tokens", async function () {
      await expect (
        Cars.burnACar(5)
      ).to.satisfy;
    });

    it("Others cant burn the tokens", async function () {
      await expect (
        Cars.connect(addr1).burnACar(1)
      ).to.be.reverted;
    });
  });

  describe("Token URIs", function () {
    it("Should get URI", async function () {
      const uri = await Cars.tokenURI(1);
      console.log(uri);
    });

    it("Cannot get unexistent URI", async function () {
      await expect (
        Cars.tokenURI(0)
      ).to.be.reverted;
    });
  });
});
