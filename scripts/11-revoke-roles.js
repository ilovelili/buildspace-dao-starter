import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 governance token
const governanceTokenAddress = "0x80E10f741F10737E9ED9B80354bA8972c5b0a133";
const token = sdk.getToken(governanceTokenAddress);

(async () => {
  try {
    // Log the current roles.
    const allRoles = await token.roles.getAll();
    console.log("👀 Roles that exist right now:", allRoles);

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );

    console.log(
      "✅ Successfully revoked our superpowers from the ERC-20 contract"
    );
  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO trasury", error);
  }
})();
