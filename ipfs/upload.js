async function run() {
    const { createHelia  } = await import('helia');
    const helia = await createHelia ();

    const { unixfs } = await import('@helia/unixfs')
    
    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "My First NFT",
            attributes: [
            {
                "trait_type": "Peace",
                "value": "10" 
            },
            {
                "trait_type": "Love",
                "value": "100"
            },
            {
                "trait_type": "Web3",
                "value": "1000"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/QmRJ17mNbCeJNrjT5zCDLuJW2Hs5d3Ae2wvkM1TjNmprTP",
            description: "So much PLW3!"
        })
    };

    const fs = unixfs(helia)
    const cid = await fs.addBytes(metadata)

    console.log(cid);

    process.exit(0);
}

run();