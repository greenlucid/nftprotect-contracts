module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: { enabled: true, runs: 200 },
  },

  contractSizer: {
    runOnCompile: true,
    disambiguatePaths: false
  }
};
