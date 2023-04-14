import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

export const getWeb3 = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    const web3 = new Web3(provider);
    try {
      await provider.request({ method: "eth_requestAccounts" });
      return web3;
    } catch (error) {
      throw new Error("User denied account access");
    }
  } else {
    throw new Error("No provider available");
  }
};
