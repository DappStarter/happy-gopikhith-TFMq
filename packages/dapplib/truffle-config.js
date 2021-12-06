require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stool response script coin half entry borrow gaze'; 
let testAccounts = [
"0x8d0a9cdec90d343d83e2bb1f2d1cc9678c855fbe3e9910ce36851bd4a3f25c2f",
"0x55840a7996f2d9929244e65fe38e59b6e5780526e04551dbf0f97beb4faebe56",
"0x795f95bab692f955028bcb2b4ee7c9dcc732ba621f3d66b212cce32d3d402bff",
"0x18322909fd0afadf382de765e04dba782e68dfc05f20b06b54e047762972f9e6",
"0x9b4fd7eb3e4b9390d19feb5557c9be5b412c04c3cb8b7e44a9a3a296db8f989b",
"0x67562d24cc0e39a95498aa11764acf5eb392d998f6c5611ae704eefcba8d2aa9",
"0x4f894bda99ac088cdef88c2218d0a487d4feb71d32e7ccd3f0627db6566f6b73",
"0x47de470e7dde19f5a1c1b922dd28e59c4ad200320c10de618f33acd32cd7d7b0",
"0x8a2799ce4f16d24ceb93174dd1362b3c11bb73d7b52f29bc62c3b2d9bb6cceab",
"0x5eb46cbdff576696844e25ca1fae5e351a561a678042cd93b494f40afa6497ac"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


