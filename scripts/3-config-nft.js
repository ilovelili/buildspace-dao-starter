import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editDropAddress = "0x0820e8067e9bAE6BA6D513496f3D4E3850cA836A";
const editionDrop = sdk.getEditionDrop(editDropAddress);

// because it's an ERC-1155, all our members will mint the same NFT
(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Ramen ticket",
        description: "This NFT will give you access to RamenDAO!",
        image: readFileSync("scripts/assets/ticket.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
