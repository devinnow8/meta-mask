import metaImg from "../assets/images/meta-1.jpg";
import metaImg2 from "../assets/images/meta-2.jpg";

export const homeCardSlider = [
  {
    id: 1,
    title: "Let's get started",
    content:
      "Trusted by millions, MetaMask is a secure wallet making the world of web3 accessible to all.",
    img: metaImg2,
  },
  {
    id: 2,
    title: "Explore decentralized apps",
    content: "Store, send and spend crypto currencies and assets.",
    img: metaImg,
  },
  {
    id: 3,
    title: "Say hello to your wallet",
    content:
      "Use your MetaMask to login to decentralized apps - no signup needed.",
    img: metaImg2,
  },
];

export const termsCardContent = {
  title: "Help us improve MetaMask",
  desc1: `MetaMask would like to gather usage data to better understand how our users interact with MetaMask. This data will be used to provide the service, which includes improving the service based on your use.
MetaMask will...`,
  list: [
    { id: 1, img: "", content: "Always allow you to opt-out via Settings" },
    { id: 2, img: "", content: "Send anonymized click and pageview events" },
    {
      id: 3,
      img: "",
      content:
        "Never collect information we don’t need to provide the service (such as keys, addresses, transaction hashes, or balances)",
    },
    { id: 4, img: "", content: "Never collect your full IP address*" },
    { id: 5, img: "", content: "Never sell data. Ever!" },
  ],
  desc2: `This data is aggregated and is therefore anonymous for the purposes of General Data Protection Regulation (EU) 2016/679.
* When you use Infura as your default RPC provider in MetaMask, Infura will collect your IP address and your Ethereum wallet address when you send a transaction. We don’t store this information in a way that allows our systems to associate those two pieces of data. For more information on how MetaMask and Infura interact from a data collection perspective, see our update here. For more information on our privacy practices in general, see our Privacy Policy here.`,
};
