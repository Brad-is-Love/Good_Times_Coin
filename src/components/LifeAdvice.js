import React, {useState} from 'react'
import Web3 from 'web3';
import './App.css';
import Color from '../abis/Color.json'
// import logo from '../GTC Full Logo.jpg';
import { firstPart, secondPart, thirdPart, lastPart } from '../Arrays';
import CustomButton from './CustomButton';

const LifeAdvice = (props) => {
    const web3 = new Web3(window.ethereum)
    const [sentences, setSentences] = useState([]) 
    const [loadedSupply, setLoadedSupply] = useState(0)
    
    if(props.account !== 'Not Connected' && props.networkID === "1666600000"){
        var abi = Color.abi
        var networkData = Color.networks[props.networkID]
        var address = networkData.address
        var contract = new web3.eth.Contract(abi, address)
        
        contract.methods.totalSupply().call()
            .then(supply => checkSupply(supply)
            )

        var checkSupply = (supply) => {
            if(supply !== loadedSupply) {
                setLoadedSupply(supply)
                loadSentences(supply)
            }
        }
        
        const loadSentences = async (supply) => {
            var tempSentences = []
            for (var j = supply-2; j <= supply; j++) {
                var sentence = await contract.methods.colors(j - 1).call()
                tempSentences.push(sentence)
            }
            setSentences(tempSentences)
        } 
    }

    var mint = (sentence) => {
        contract.methods.mint(sentence).send({ from: props.account })
            
          .once('receipt', () => {
              contract.methods.totalSupply().call()
              .then(supply => checkSupply(supply)
              )    
          })
    }

    var getRandomInt = (arrayLength) => {
        return Math.floor(Math.random() * arrayLength);
    }
  
    var  sentenceGenerator = () => {
        let firstWord = firstPart[getRandomInt(firstPart.length)]
        let secondWord = secondPart[getRandomInt(secondPart.length)]
        let thirdWord = thirdPart[getRandomInt(thirdPart.length)]
        let lastWord = lastPart[getRandomInt(lastPart.length)]
        let fifthWord = thirdPart[getRandomInt(thirdPart.length)]
        let sentence = '"'+firstWord+" "+secondWord+" "+thirdWord+" "+lastWord+" "+fifthWord+'"'
        mint(sentence)
    }

    return (
        <div className='redline my-5'>
            <div class="row px-3">
      {/* this is the main sentence site */}
        <div class="col-s-8">
          <p class="siteHeading pt-5">Life Advice NFT Generator</p>
          <p>We all want good times, but sometimes we just don't know <em> how</em>. <br />
            <br /> This sophisticated algorithm generates accurate and relevant life advice, guaranteed to bring you good times.
            <br />These are text-based NFT's. There's no image. They're stored 100% on-chain, as opposed to most NFTs, that just point to an image URL
            <br /><br />The contract is <a href="https://explorer.harmony.one/address/0x8d1d098661856aa4a1143f68a882451d9b0e3f9a" target="_blank" rel="noopener noreferrer">here.</a>
            <br /><br />Mint yourself a <strong> free</strong> NFT on the Harmony Network!
          </p>
          
        </div>
        {/* Button */}
        <div class="text-center mt-3 my-2">
          <CustomButton buttonText = "Mint Life Advice" buttonFunction = {sentenceGenerator} account = {props.account} />
        </div>
        <br />
        <p class="primary text-center my-2">{loadedSupply} out of 6969 Minted</p>
      </div>

      <div>
        <div classname="row text-center">
          {sentences.slice(-1).reverse().map((sentence, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around">
                <div class="border rounded p-3 bg-dark bg-gradient">
                  <center><h4>{sentence}</h4></center>
                </div>
              </div>
            </div>
            )
          })}
          </div>
          <br />
          <div classname="row text-center">
          {sentences.slice(-2,-1).reverse().map((sentence, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around faded">
                <div class="border rounded p-3 bg-dark bg-gradient">
                  <center><h4>{sentence}</h4></center>
                </div>
              </div>
            </div>
            )
          })}
          </div>
          <br />
          <div classname="row text-center">
          {sentences.slice(-3,-2).reverse().map((sentence, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around moreFaded">
                <div class="border rounded p-3 bg-dark bg-gradient">
                  <center><h4>{sentence}</h4></center>
                </div>
              </div>
            </div>
            )
          })}
      </div>
      <div class="row p-3">
       
        <p>
       <br />
       <hr />
       <br />
          If you want to go deeper, copy your ONE address and head to the 
          <a href="https://explorer.harmony.one/" target="_blank" rel="noopener noreferrer"> block explorer</a>,
          paste your address and click on the transaction hash of your last transaction. Then scroll down, and check out "Internal Transactions" There is your NFT text straight from the blockchain!
        </p>
        </div>
      </div>          
        </div>
    )
}

export default LifeAdvice