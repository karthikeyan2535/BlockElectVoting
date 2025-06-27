# Build & Deploy Your First Decentralized Election Voting DApp | Solidity, Next.js, Hardhat

Build & Deploy Your First Decentralized Election Voting DApp | Solidity, Next.js, Hardhat

#### Install Vs Code Editor

```https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### DEPLOYMENT


```https://nodejs.org/en/download
  PROVIDER: Digital Ocean
```

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v18.12.2 / latest version
  NPM: 10.5.0
```

#### PInata IPFS

```https://www.pinata.cloud/
 GET: API_KEY
 GET:  SECRECT_KEY
```

## PInata IPFS IMAGE UPLOAD

```https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
            "Content-Type": "multipart/form-data",
          },
```

## PInata IPFS JSON DATA UPLOAD

```https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
             "Content-Type": "application/json",
          },
```

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v21.6.2 / latest version
  NPM: 10.5.0
```

#### Test Faucets

Alchemy will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```https://faucet.polygon.technology/
  Get: Free Test Faucets
```

#### RemixID

We are using RemixID for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```https://remix-project.org
  OPEN: RemixID
```
#### Formspree

```https://formspree.io/
  CREATE ACCOUNT: https://formspree.io/
  const [state, handleSubmit] = useForm("YOUR_KEY");
```
#### PACKAGE.JSON

```https://www.theblockchaincoders.com/SourceCode
  {
  "name": "voting-organization",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "axios": "^0.27.2",
    "ether": "^0.0.9",
    "next": "12.2.5",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-dropzone": "^14.2.2",
    "react-icons": "^4.4.0",
    "web3modal": "^1.9.9",
    "react-hot-toast": "^2.4.1",
    "@formspree/react": "^2.5.1"
  },
  "devDependencies": {
    "@nomicfoundation/hardhat-toolbox": "^2.0.0",
    "hardhat": "^2.11.2"
  }
}

```
