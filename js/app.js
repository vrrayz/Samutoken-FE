import { BigNumber, ethers } from "./ethers-5.2.esm.min.js";

// Contract addresses and abi == mainnet
// const tokenAddress = "0x22D0ff0e2430e0536196Ae10Ec5441d931Fa9D82";
// const cakeLpAddress = "0x0b49b30c66e251a849e83dd8efa8205e863aa3b8";
// const stakingContractAddress = "0x366E3f426545dcd635139A3452aCfBEF782E10AB";

// Contract addresses and abi == testnet
const tokenAddress = "0xc7FA4424C6bb96ADCA9cb9cFc4A9CAF7cA074F1a";
const cakeLpAddress = "0xD50b89510168131853D5e42C3e57dCe2B3bFc96A";
const stakingContractAddress = "0x1793419Ba987ae77D909c2142812601F33B9eCc3";
const tokenABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const cakeLpAbi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      { indexed: true, internalType: "address", name: "to", type: "address" },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "burn",
    outputs: [
      { internalType: "uint256", name: "amount0", type: "uint256" },
      { internalType: "uint256", name: "amount1", type: "uint256" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "factory",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getReserves",
    outputs: [
      { internalType: "uint112", name: "_reserve0", type: "uint112" },
      { internalType: "uint112", name: "_reserve1", type: "uint112" },
      { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "_token0", type: "address" },
      { internalType: "address", name: "_token1", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "kLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "mint",
    outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "to", type: "address" }],
    name: "skim",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "uint256", name: "amount0Out", type: "uint256" },
      { internalType: "uint256", name: "amount1Out", type: "uint256" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "swap",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "sync",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token0",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token1",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
const stakingContractABI = [
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "changeCakeToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "changeOriginalToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_split",
				"type": "uint256"
			}
		],
		"name": "changeSplit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimCakeTokenEarnings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimOriginalTokenEarnings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "depositCake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "depositOriginalToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_cakeApy",
				"type": "uint256"
			}
		],
		"name": "setCakeApy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_originalTokenApy",
				"type": "uint256"
			}
		],
		"name": "setOriginalTokenApy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "contract ERC20",
				"name": "_lpAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawCake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdrawOriginalToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cakeApy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cakeBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cakeLpToken",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "calculateUserCakeEarnings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "calculateUserOriginalTokenEarnings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "originalToken",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "originalTokenApy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "originalTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakingDetails",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "lastOriginalTokenClaimTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalOriginalTokenStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "lastCakeClaimTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalConvertedCakeStaked",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalActualCakeStaked",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalCakeDeposited",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalOriginalTokenDeposited",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

//  Create WalletConnect Provider
const wcDefault = new WalletConnectProvider.default({
  rpc: {
    97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    // 56: "https://bsc-dataseed.binance.org/",
  },
});

const decimals = 18;

let provider;
let signer;
let userAddress;
let tokenContract;
let stakingContract;
let cakeLpContract;
let tokenSupply;

let originalTokenApy = 50;
let dateRange = 365 * 24 * 60 * 60;

let connectBtns = document.getElementsByClassName("connectBtns");
let walletModalBtn = document.getElementsByClassName("unlockWalletBtn");
// document.getElementById("tokenAddress").innerText = tokenAddress;
let connectedStakingDetails = document.getElementsByClassName(
  "connected-staking-details"
);

// Variables smudge
let depositSmudgeModal = document.getElementById("depositSmudgeModal");
let depositSmudgeButton = document.querySelector("#depositSmudge");
let approveSmudgeButton = document.querySelector("#approveSmudgeButton");
let stakeSmudgeButton = document.querySelector("#stakeSmudgeButton");
let depositSmudgeInput = document.querySelector("#depositSmudgeInput");
let depositSmudgeModalBs = new bootstrap.Modal(depositSmudgeModal);
let zzEarned = document.querySelector("#zzEarned");
let zzStaked = document.querySelector("#zzStaked");
let claimSmudgeButton = document.querySelector("#claimSmudge");

let withdrawSmudge = document.querySelector("#withdrawSmudge");
let withdrawSmudgeModalBs = new bootstrap.Modal(withdrawSmudgeModal);
let withdrawSmudgeButton = document.querySelector("#withdrawSmudgeButton");
let withdrawSmudgeInput = document.querySelector("#withdrawSmudgeInput");

// Variables cake
let depositCakeModal = document.getElementById("depositCakeModal");
let depositCakeButton = document.querySelector("#depositCake");
let approveCakeButton = document.querySelector("#approveCakeButton");
let stakeCakeButton = document.querySelector("#stakeCakeButton");
let depositCakeInput = document.querySelector("#depositCakeInput");
let depositCakeModalBs = new bootstrap.Modal(depositCakeModal);
let zzCakeEarned = document.querySelector("#zzCakeEarned");
let zzCakeStaked = document.querySelector("#zzCakeStaked");
let claimCakeButton = document.querySelector("#claimCake");

let withdrawCake = document.querySelector("#withdrawCake");
let withdrawCakeModalBs = new bootstrap.Modal(withdrawCakeModal);
let withdrawCakeButton = document.querySelector("#withdrawCakeButton");
let withdrawCakeInput = document.querySelector("#withdrawCakeInput");

// deposit
depositSmudgeButton.addEventListener("click", function () {
  toggleDepositSmudgeButton();
});
depositCakeButton.addEventListener("click", function () {
  toggleDepositCakeButton();
});

//   approve
approveSmudgeButton.addEventListener("click", function () {
  approveSmudge(depositSmudgeInput.value);
});
approveCakeButton.addEventListener("click", function () {
  approveCake(depositCakeInput.value);
});

// stake
stakeSmudgeButton.addEventListener("click", function () {
  stakeSmudge(depositSmudgeInput.value);
});
stakeCakeButton.addEventListener("click", function () {
  stakeCake(depositCakeInput.value);
});
//   claim
claimSmudgeButton.addEventListener("click", function () {
  claimSmudge();
});
claimCakeButton.addEventListener("click", function () {
  claimCake();
});

//   withdraw
withdrawSmudge.addEventListener("click", function () {
  toggleWithdrawSmudgeButton();
});
withdrawSmudgeButton.addEventListener("click", function () {
  withdrawSmudgeToken(withdrawSmudgeInput.value);
});
withdrawCake.addEventListener("click", function () {
  toggleWithdrawCakeButton();
});
withdrawCakeButton.addEventListener("click", function () {
  withdrawCakeToken(withdrawCakeInput.value);
});

// modal toggles
function toggleDepositSmudgeButton() {
  getUserSmudgeBalance();
  depositSmudgeModalBs.show();
}
function toggleDepositCakeButton() {
  getUserCakeBalance();
  depositCakeModalBs.show();
}
function toggleWithdrawSmudgeButton() {
  withdrawSmudgeModalBs.show();
}
function toggleWithdrawCakeButton() {
  withdrawCakeModalBs.show();
}
// If the user is already connected
Array.prototype.map.call(walletModalBtn, (x) => {
  x.addEventListener("click", async function () {
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum);
    } else if (wcDefault) {
      await wcDefault.enable();
      provider = new ethers.providers.Web3Provider(wcDefault);
    }
    let myModal = new bootstrap.Modal(
      document.getElementById("chooseWalletModal"),
      { keyboard: false }
    );
    signer = provider.getSigner();
    await signer.getAddress().then(
      (res) => {
        userAddress = res;
        hideConnectBtn();
        getTokenSupply();
        updateDetails();
      },
      () => {
        myModal.show();
      }
    );
  });
});

for (let index = 0; index < connectBtns.length; index++) {
  let walletType = "";
  if (index == 0) {
    walletType = "metamask";
  }
  if (index == 1) {
    walletType = "walletconnect";
  }
  connectBtns[index].addEventListener("click", function (event) {
    event.preventDefault();
    connectWallet(walletType);
  });
}
async function connectWallet(walletType) {
  event.preventDefault();
  try {
    if (walletType == "metamask") {
      // / A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      provider = new ethers.providers.Web3Provider(window.ethereum);
      // MetaMask requires requesting permission to connect users accounts
      await provider.send("eth_requestAccounts", []);
    } else if (walletType == "walletconnect") {
      //  Enable session (triggers QR Code modal)
      await wcDefault.enable();

      provider = new ethers.providers.Web3Provider(wcDefault);
    } else {
      alert("incorrect wallet sent");
      return;
    }
  } catch (error) {
    console.log(error);
  }
  signer = provider.getSigner();
  userAddress = await signer.getAddress();
  hideConnectBtn();
  updateDetails();
  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  $("#chooseWalletModal").modal("hide");
}

function hideConnectBtn() {
  if (userAddress) {
    walletModalBtn[0].style.display = "none";
    walletModalBtn[1].style.display = "none";
    for (let index = 0; index < connectedStakingDetails.length; index++) {
      connectedStakingDetails[index].classList.toggle("d-none");
      connectContract();
    }
    //   swapSection.style.display = "block";
  }
}

async function connectContract() {
  tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
  tokenContract = await tokenContract.deployed();
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  cakeLpContract = new ethers.Contract(cakeLpAddress, cakeLpAbi, provider);
  cakeLpContract = await cakeLpContract.deployed();
}

async function getTokenSupply() {
  let totalS = await tokenContract.totalSupply();
  totalS = ethers.utils.formatUnits(totalS, decimals);
  // totalS = BigNumber.from(totalS._hex).toString()
  tokenSupply = totalS;
}
async function getUserSmudgeBalance() {
  let balance = await tokenContract.balanceOf(userAddress);
  balance = ethers.utils.formatUnits(balance, decimals);
  let smudgeBalanceElement = document.querySelectorAll(".smudgeBalance");
  for (let index = 0; index < smudgeBalanceElement.length; index++) {
    smudgeBalanceElement[index].innerText = balance;
  }
}
async function getUserCakeBalance() {
  let balance = await cakeLpContract.balanceOf(userAddress);
  balance = ethers.utils.formatUnits(balance, decimals);
  let cakeBalanceElement = document.querySelectorAll(".cakeBalance");
  for (let index = 0; index < cakeBalanceElement.length; index++) {
    cakeBalanceElement[index].innerText = balance;
  }
}
async function approveSmudge(amount) {
  // console.log(amount)
  let nAmount = BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
  // let nAmount = ethers.utils.parseUnits(amount, decimals);
  await tokenContract
    .connect(signer)
    .approve(stakingContractAddress, nAmount)
    .then((res) => {
      tokenContract.on("Approval", (owner, spender, amount, event) => {
        approveSmudgeButton.style.display = "none";
        stakeSmudgeButton.removeAttribute("disabled");
        console.log("Approved " + spender + " allowance " + amount);
      });
    });
}
async function approveCake(amount) {
  // console.log(amount)
  let nAmount = BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
  // let nAmount = ethers.utils.parseUnits(amount, decimals);
  await cakeLpContract
    .connect(signer)
    .approve(stakingContractAddress, nAmount)
    .then((res) => {
      cakeLpContract.on("Approval", (owner, spender, amount, event) => {
        approveCakeButton.style.display = "none";
        stakeCakeButton.removeAttribute("disabled");
        console.log("Approved " + spender + " allowance " + amount);
      });
    });
}
async function stakeSmudge(amount) {
  // console.log(amount)
  let nAmount = BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
  // let nAmount = ethers.utils.parseUnits(amount, decimals);
  await stakingContract
    .connect(signer)
    .depositOriginalToken(nAmount)
    .then((res) => {
      tokenContract.on("Transfer", (from, to, value, event) => {
        // approveSmudgeButton.style.display = "none";
        // stakeSmudgeButton.removeAttribute("disabled");
        // console.log(from+" Transferred  "+value+" to "+to);
        if (from == userAddress && to == stakingContractAddress) {
          depositSmudgeModalBs.hide();
          updateDetails();
        }
      });
    });
}
async function stakeCake(amount) {
  let nAmount = BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
  await stakingContract
    .connect(signer)
    .depositCake(nAmount)
    .then((res) => {
      cakeLpContract.on("Transfer", (from, to, value, event) => {
        // approveSmudgeButton.style.display = "none";
        // stakeSmudgeButton.removeAttribute("disabled");
        // console.log(from+" Transferred  "+value+" to "+to);
        if (from == userAddress && to == stakingContractAddress) {
          depositCakeModalBs.hide();
          updateDetails();
        }
      });
    });
}
async function updateDetails() {
  updateZZEarned();
  updateZZStaked();

  updateZZCakeEarned();
  updateZZCakeStaked();
}

async function updateZZEarned() {
  zzEarned.innerText = await getZZEarned();
}
async function updateZZCakeEarned() {
  zzCakeEarned.innerText = await getZZCakeEarned();
}

async function updateZZStaked() {
  zzStaked.innerText = await getZZStaked();
}
async function updateZZCakeStaked() {
  zzCakeStaked.innerText = await getZZCakeStaked();
}
async function getZZEarned() {
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let zE = await stakingContract.calculateUserOriginalTokenEarnings(
    userAddress
  );

  console.log("++++ Earnings +++");
  console.log(zE);
  let userEarnings = ethers.utils.formatUnits(zE, decimals);
  // let zE = await stakingContract.stakingDetails(
  //   userAddress
  // );
  // console.log(zE.totalOriginalTokenStaked);
  // let totalOriginalTokenStaked = ethers.utils.formatUnits(zE.totalOriginalTokenStaked, decimals);

  // let lastOriginalTokenClaimTime = zE.lastOriginalTokenClaimTime;

  // if (totalOriginalTokenStaked > 0) {
  //   let timePassed = parseInt((new Date().getTime() / 1000).toFixed(0)) - lastOriginalTokenClaimTime;
  //   let currentPercentageReturns = (((timePassed * originalTokenApy) / dateRange) * totalOriginalTokenStaked) / 100;
  //   let percentageValue = (currentPercentageReturns * 100) / totalOriginalTokenStaked;
  //   // console.log(currentPercentageReturns)
  //   if(percentageValue >= 1){
  //     claimSmudgeButton.removeAttribute('disabled');
  //   }
  //   return parseInt(currentPercentageReturns) + " ("+percentageValue.toFixed(2)+"%)";
  // }
  // console.log(totalOriginalTokenStaked)
  return userEarnings;
}
async function getZZCakeEarned() {
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let zE = await stakingContract.calculateUserCakeEarnings(userAddress);
  zE = ethers.utils.formatUnits(zE, decimals);
  // console.log(zE)
  return zE;
}
async function getZZStaked() {
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let zS = await stakingContract.stakingDetails(userAddress);
  // zS = ethers.utils.formatUnits(zS.totalOriginalTokenStaked,decimals)
  return ethers.utils.formatUnits(zS.totalOriginalTokenStaked, decimals);
  // return zE
}
async function getZZCakeStaked() {
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let zS = await stakingContract.stakingDetails(userAddress);
  // zS = ethers.utils.formatUnits(zS.totalOriginalTokenStaked,decimals)
  return ethers.utils.formatUnits(zS.totalActualCakeStaked, decimals);
  // return zE
}
async function claimSmudge() {
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let action = await stakingContract
    .connect(signer)
    .claimOriginalTokenEarnings()
    .then((res) => {
      tokenContract.on("Transfer", (from, to, value, event) => {
        // approveSmudgeButton.style.display = "none";
        // stakeSmudgeButton.removeAttribute("disabled");
        // console.log(from+" Transferred  "+value+" to "+to);
        if (from == stakingContractAddress && to == userAddress) {
          updateDetails();
        }
      });
    });
}
async function claimCake() {
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let action = await stakingContract
    .connect(signer)
    .claimCakeTokenEarnings()
    .then((res) => {
      cakeLpContract.on("Transfer", (from, to, value, event) => {
        if (from == stakingContractAddress && to == userAddress) {
          updateDetails();
        }
      });
    });
}
async function withdrawSmudgeToken(amount) {
  let nAmount = BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let action = await stakingContract
    .connect(signer)
    .withdrawOriginalToken(nAmount)
    .then((res) => {
      tokenContract.on("Transfer", (from, to, value, event) => {
        // approveSmudgeButton.style.display = "none";
        // stakeSmudgeButton.removeAttribute("disabled");
        // console.log(from+" Transferred  "+value+" to "+to);
        if (from == stakingContractAddress && to == userAddress) {
          updateDetails();
          withdrawSmudgeModalBs.hide();
        }
      });
    });
}
async function withdrawCakeToken(amount) {
  let nAmount = BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals));
  stakingContract = new ethers.Contract(
    stakingContractAddress,
    stakingContractABI,
    provider
  );
  stakingContract = await stakingContract.deployed();
  let action = await stakingContract
    .connect(signer)
    .withdrawCake(nAmount)
    .then((res) => {
      cakeLpContract.on("Transfer", (from, to, value, event) => {
        // approveSmudgeButton.style.display = "none";
        // stakeSmudgeButton.removeAttribute("disabled");
        // console.log(from+" Transferred  "+value+" to "+to);
        if (from == stakingContractAddress && to == userAddress) {
          updateDetails();
          withdrawCakeModalBs.hide();
        }
      });
    });
}
