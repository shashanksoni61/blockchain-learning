module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
  },

  compilers: {
    solc: {
      version: "0.5.1", // Fetch exact version from solc-bin (default: truffle's version)
      // changed version from "0.8.13" to 0.5.1 for learning ,
    },
  },
};
