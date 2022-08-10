const { assert, should, expect } = require("chai")

const UserProfile=artifacts.require("UserProfile")

contract("UserProfile", (accounts) => {
    before(async () => {
        instance = await UserProfile.deployed()
    })
//Mapping should give account[0] -> Brad
    it('can set name to Brad for account 0', async()=>{
        await instance.setUserName(accounts[0],'Brad')
        let name = await instance.getNameByAddress(accounts[0])
        assert.equal(name, 'Brad', 'Name should be Brad')
    })

//Account can be changed only by owner //Regect!
    it('Account can be changed only by owner', async()=>{
        try{
            await instance.setUserName(accounts[0],'DirtyDogg69',{from: accounts[1]})
        } catch(e){
            assert(e.message.includes("You can only change your own user name"))
            return;
        }
        assert(false);
        
        //let name = await instance.getNameByAddress(accounts[1])
        //assert.fail(name, 'DirtyDogg69', 'Name should be DirtyDogg69')
        
    })

}) 