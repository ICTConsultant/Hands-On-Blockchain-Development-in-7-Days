module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 7545,//8545
      network_id: "*" // Match any network id
    }
  }
};
