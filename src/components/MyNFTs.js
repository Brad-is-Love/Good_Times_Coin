import React, {useState, useEffect} from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
import GoodNFT from '../abis/GoodNFTimers.json'

const MyNFTs = (props) => {
    
    const web3 = new Web3(window.ethereum)
    const [balance, setBalance] = useState(0)
    const [nftBalance, setNftBalance] = useState(0)
    const [sentences, setSentences] = useState([])
    const [goodNFTs, setGoodNFTs] = useState([])
    const [loadedNFTs, setLoadedNFTs] = useState(0)
    const [loadedSenBal, setLoadedSenBal] = useState (0)

    useEffect(() => {
      window.scroll(0,0)
    }, [])

    if(props.account !== 'Not Connected' && props.networkID === "1666600000"){
        let account = props.account
        var nftabi = GoodNFT.abi
        var networkData = GoodNFT.networks[props.networkID]
        var nftAddress = networkData.address
        var nftContract = new web3.eth.Contract(nftabi, nftAddress)
        
        var colorabi = Color.abi
        var colorNetwork = Color.networks[props.networkID]
        var address = colorNetwork.address
        var colorContract = new web3.eth.Contract(colorabi, address)
        
        //Sentences
        colorContract.methods.balanceOf(account).call()
            .then(balance => checkBalance(balance)
                )

        const checkBalance = (balance) => {
            if(balance !== loadedSenBal) {
              setLoadedSenBal(balance)
              collectSentences(balance)
              setBalance(balance)
            }
        }
        
        var collectSentences = async (balance) => {
            var tempSentences = []
            for (var tokenId = 1; tokenId <=balance; tokenId++){
                let tokenIndex = await colorContract.methods.tokenOfOwnerByIndex(account,tokenId-1).call()
                let sentence = await colorContract.methods.colors(tokenIndex-1).call()
                tempSentences.push(sentence)
            }
            setSentences(tempSentences)
        }
          //GNFTs
        nftContract.methods.balanceOf(account).call()
            .then(nftBalance => checkNftBalance(nftBalance)
                )

        const checkNftBalance = (nftBalance) => {
            if(nftBalance !== loadedNFTs) {
              setLoadedNFTs(nftBalance)
              collectNFTs(nftBalance)
              setNftBalance(nftBalance)
            }
        }

        const collectNFTs = async (nftBalance) => {
          var tempNFTs = []
          for (var nftIndex = 1; nftIndex <= nftBalance; nftIndex++) {
            let nftId = await nftContract.methods.tokenOfOwnerByIndex(account,nftIndex-1).call()
            let URI = await nftContract.methods.tokenURI(nftId).call()
              let response = await fetch(URI);
              let responseJson = await response.json();
              let imageData = await responseJson.image;
              let NFT = 'https://gateway.pinata.cloud/ipfs/'+imageData.slice(7)
              console.log(NFT)
              tempNFTs.push(NFT)   
            }
            setGoodNFTs(tempNFTs)
          }
        }

  return <div>
          <p className="specialMobile d-lg-none d-xl-none d-md-none">My NFT Inventory</p>
            <p className="special d-none d-lg-block d-xl-block d-md-block">My NFT Inventory</p>

          My {nftBalance} Good NF Timers pick me up when I'm feeling blue:
        <br />
        <div classname="row text-center">
          {goodNFTs.map((myGNFT, key) => {
            return(
            <div key={key}>
              <div className="row justify-content-around px-2 py-3">
                  <center><img className="goodnft shadow" src={myGNFT} alt="check" /></center>
                <br />
              </div>
            </div>
            )})}
        </div>
        <br />
        <br />

          These {balance} Life Advice NFTs guide me through the ups and downs of life:
        <br />

        <div classname="row text-center">
          {sentences.map((myTokens, key) => {
            return(
            <div key={key}>
              <div className="row justify-content-around">
                <div className="border rounded p-3 m-3 bg-dark bg-gradient">
                  <center><h4>{myTokens}</h4></center>
                </div>
              </div>
            </div>
            )})}
        </div>
        <br />
        <br />
        </div>
};

export default MyNFTs;
