import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // This is the address of our ERC-20 governance token
    const governanceTokenAddress = "0x80E10f741F10737E9ED9B80354bA8972c5b0a133";

    const voteContractAddress = await sdk.deployer.deployVote({
      // Give your governance contract a name.
      name: "Ramen DAO",
      // This is the location of our governance token, our ERC-20 contract!
      voting_token_address: governanceTokenAddress,
      // These parameters are specified in number of blocks.
      // Assuming block time of around 13.14 seconds (for Ethereum)
      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      voting_delay_in_blocks: 0,
      // How long do members have to vote on a proposal when it's created?
      // we will set it to 1 day = 6570 blocks
      voting_period_in_blocks: 6570,
      // The minimum % of the total supply that need to vote for
      // the proposal to be valid after the time for the proposal has ended.
      voting_quorum_fraction: 0,
      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress
    );
  } catch (error) {
    console.error("Failed to deploy vote contract", err);
  }
})();
