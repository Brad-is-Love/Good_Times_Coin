const HDWalletProvider = require('@truffle/hdwallet-provider');
  
require('dotenv').config()
//Local
// const local_mnemonic = process.env.LOCAL_MNEMONIC
// const local_private_key = process.env.LOCAL_PRIVATE_KEY
// const local_url = process.env.LOCALNET_URL;
// //Testnet
// const mnemonic = process.env.TESTNET_MNEMONIC
// const privateKeyTest = process.env.TESTNET_PRIVATE_KEY
// const testnet_url = process.env.TESTNET_0_URL
// //const testnet_0_url = process.env.TESTNET_0_URL
// //const testnet_1_url = process.env.TESTNET_1_URL
// //Mainnet
// const mainnet_mnemonic = process.env.MAINNET_MNEMONIC
// const mainnet_private_key = process.env.MAINNET_PRIVATE_KEY
// const mainnet_url = process.env.MAINNET_0_URL;

const mnemonic = process.env.TESTNET_MNEMONIC
const privateKeyTest = process.env.TESTNET_PRIVATE_KEY



module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    
    testnet: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: 'https://api.s0.b.hmny.io', // https://api.s0.t.hmny.io for mainnet
          derivationPath: `m/44'/1023'/0'/0/`
        });
      },
      network_id: 1666700000, // 1666600000 for mainnet
    },
    testnetHar: {
      provider: () => {
        if (!privateKeyTest.trim()) {
          throw new Error(
            'Please enter a private key with funds, you can use the default one'
          );
        }
        return new HDWalletProvider({
          privateKeys: [privateKeyTest],
          providerOrUrl: 'https://api.s0.b.hmny.io',
        });
      },
      network_id: 1666700000,
    },
    
    mainnet: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic,
          providerOrUrl: 'https://api.s0.t.hmny.io', // https://api.s0.t.hmny.io for mainnet
          derivationPath: `m/44'/1023'/0'/0/`
        });
      },
      network_id: 1666600000, // 1666600000 for mainnet
    },

  },
    mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  contracts_build_directory: "./src/contracts/",
  compilers: {
    solc: {
      version: "^0.8.0", // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false,
  },
};


  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */


  // Set default mocha options here, use special reporters etc.



