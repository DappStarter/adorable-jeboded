require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember erosion give kite bone similar'; 
let testAccounts = [
"0x2b9acc87f7ee26549153c94912e15780d7f56b7944e95a30be69ef9130dfda32",
"0xbeaf05ff882d6c0090bb5f8d6e131740ee991cb3dd4dfedfdf90e8ed46e1c50c",
"0xff545df6ac9af60b9a418c83373913f909f994c04977282e3ed79e8c8207bac6",
"0x088f1a9016125511f19dd86ce221ba6650734a6a9df53bde6de9547e2430cc3d",
"0x108cd9ad5b604b779274f87859f3742a45b3e1df62153ddeb325e1a1b27c25db",
"0xe7804a1f0446a2228bd4f2dcbef668b469d60a1698404c9391e1eaaf76531be5",
"0x70006c38d80a8fb8da7062efc6016073adb3534dc51a8fa355becee02b2f4201",
"0x52198a6f24a353e4a1a565bd329d8c58b6cbac8654a863e65724cd1c7b78134e",
"0x25907c723f7c7cdd801b0ce2bce1a197855a68b572f69c8d2fddc929f3c61496",
"0x0bedc2067b4fb611bcbc3807e6d708860ac455fb25968fb8900ed143425bf0e4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
