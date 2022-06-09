import sdk from "./1-initialize-sdk.js";

const governanceTokenAddress = "0x80E10f741F10737E9ED9B80354bA8972c5b0a133";

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken(governanceTokenAddress);

(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1000000;
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();

    // Print out how many of our token's are out there now!
    console.log(
      "✅ There now is",
      totalSupply.displayValue,
      "$RAMEN in circulation"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
