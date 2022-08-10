import React, {useState} from 'react'
import Web3 from 'web3';
import './App.css';
import gNFT from '../abis/GoodNFTimers.json'
import CustomButton from './CustomButton';
import GTCLocal from '../abis/GTCLocal.json'

const GoodNFTimers = (props) => {
    const web3 = new Web3(window.ethereum)
    const [goodNFTs, setGoodNFTs] = useState([]) 
    const [loadedSupply, setLoadedSupply] = useState(0)
    const [gtcButtonText, setGtcButtonText] = useState("Pay 6.9GTC to Mint")
    const [mintButtonText, setMintButtonText] = useState("Pay 420 ONE to Mint")

    if(props.account !== 'Not Connected' && props.networkID === "1666600000"){
        var abi = gNFT.abi
        var networkData = gNFT.networks[props.networkID]
        var nftAddress = networkData.address
        var nftContract = new web3.eth.Contract(abi, nftAddress)
              //GTC smart contract
        var GTCAbi = GTCLocal.abi
        var GTCAddress = '0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5'
        //Local:
        // var GTCAddress = '0xEbAFA06a06d0bf794ED396B24E64F15348e9A0fd'
        var GTCContract = new web3.eth.Contract(GTCAbi, GTCAddress)
        
        nftContract.methods.totalSupply().call()
            .then(supply => checkSupply(supply)
            )

        var checkSupply = (supply) => {
            if(supply !== loadedSupply) {
                setLoadedSupply(supply)
                loadGoodNFTs(supply)
            }
        }
        
        const loadGoodNFTs = async (supply) => {
            var tempNFTs = []
            for (var j = supply-2; j <= supply; j++) {
                    let URI = await nftContract.methods.tokenURI(j).call()
                    let response = await fetch(URI);
                    let responseJson = await response.json();
                    let imageData = await responseJson.image;
                    let NFT = 'https://gateway.pinata.cloud/ipfs/'+imageData.slice(7)
                    tempNFTs.push(NFT)   
                }
            setGoodNFTs(tempNFTs)
            console.log("NFTs Updated")
            }
        } //end of if statement

    const mint = () => {
      setMintButtonText("Wait a minute!")
        nftContract.methods.mint(props.account, 1).send({ 
        from: props.account,
        value: web3.utils.toWei((420).toString(), "ether") 
        }).once('receipt', () => {
            nftContract.methods.totalSupply().call()
            .then(supply => checkSupply(supply));
            setMintButtonText("Pay 420 ONE to Mint")
        }).catch(()=>{
   setMintButtonText("Rejected, Retry?")})
    }

//button text goes from approve to pay to wait

    const payGTC = () => {
      setGtcButtonText("Hoooold up!")
        GTCContract.methods.approve(nftAddress, web3.utils.toWei((6.9).toString())).send({ 
        from: props.account})

            .once('receipt', () => {
            nftContract.methods.GTCmint(
                props.account,
                "1").send({from: props.account})
         
                .once('receipt', () => {
                    nftContract.methods.totalSupply().call()
         
                    .then(supply => checkSupply(supply)
                    );
                    setGtcButtonText("Pay 6.9GTC to Mint")
        }).catch(()=>{
   setGtcButtonText("Rejected, Retry?")
   })
        }).catch(()=>{
   setGtcButtonText("Rejected, Retry?")
   })
    }

return (
      <div className="redline my-5">
      <div className="row px-3">
      {/* this is the main sentence site */}
        <div className="col-s-8 ">
          <p className="siteHeading pt-5">Good NF Timers</p>
           </div>

           <hr/>
        <p className="primary text-center"> <strong>Mint yourself a beautiful, 420x69 pixel, Good NF Timer.</strong>
        <br/>They're not perfect, but they're Good NF.
        </p><hr/>

        {/* Button */}
        <div className="text-center mt-3 my-2">
          <p>There are two ways to mint: Pay 6.9GTC, or hold onto it and pay with ONE</p>
          <CustomButton buttonText = {mintButtonText} buttonFunction = {mint} account = {props.account} />
          <CustomButton buttonText = {gtcButtonText} buttonFunction = {payGTC} account = {props.account} />
        </div>
        <br />
        <p className="primary text-center my-2">{loadedSupply} out of 4269 Minted</p>
      </div>

          
      <div>
        <div className="row text-center">
          <p className="primary text-center my-2">Here are the last 3 minted:</p>
          {goodNFTs.slice(-3).reverse().map((NFT, key) => {
            return(
            <div key={key}>
              <div className="row justify-content-around">
                <div className="p-3">
                  <center><img className="goodnft shadow" src={NFT} alt="check" /></center>
                </div>
              </div>
            </div>
            )
          })}
          </div>
          
          <br />

          {/* admin functions (to be moved) */}
            
            {/* <button className="btn btn-large shadow-sm buttonText mx-2"  onClick={(event)=>{
                event.preventDefault()
                this.withdrawGTC()
            }}>Withdraw GTC</button>
            <button className="btn btn-large shadow-sm buttonText mx-2"  onClick={(event)=>{
                event.preventDefault()
                this.withdrawONE()
            }}>Withdraw ONE</button> */}
          
      <div className="row p-3">
       
        </div>
      </div>          
      </div>
    );
}

export default GoodNFTimers