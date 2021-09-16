const HDWalletProvider = require('@truffle/hdwallet-provider');
  
require('dotenv').config()
//Local
// const local_mnemonic = process.env.LOCAL_MNEMONIC
// const local_private_key = process.env.LOCAL_PRIVATE_KEY
// const local_url = process.env.LOCAL_0_URL;
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
  },
};

  // Set default mocha options here, use special reporters etc.
  // mocha: {
  //   // timeout: 100000
  // },

  // Configure your compilers
  // compilers: {
  //   solc: {
  //     version: "0.6.12", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
//     },
//   },
// };

// require('babel-register');
// require('babel-polyfill');

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
//     },
//   },
//   contracts_directory: './src/contracts/',
//   contracts_build_directory: './src/abis/',
//   compilers: {
//     solc: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   }
// }
