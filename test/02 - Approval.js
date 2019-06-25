//Inicio
const truffleAssert = require('truffle-assertions');

const Ownerap = artifacts.require('Ownerap');

const {
    decimals,
    ether,
    addressZero,
    owner1,
    owner2,
    owner3,
    owner4,
    owner5,
    nonowner1,
    nonowner2,
    info1,
    info2
} = require('./dataTest');


contract('Ownerap', function() {

        let ownerap

        beforeEach('setup for each test', async() => {
            ownerap = await Ownerap.new()
        })

        describe('Approval', function() {

            it('owner can approve', async() => {

                await ownerap.doApproval();

                let index = await ownerap.mapApproval(owner1);
                let lessThanOrEqualsZero = index <= 0;
                console.log("index: " + index);
                assert.isFalse(lessThanOrEqualsZero, 'owner can approve failed')
            })

            it('nononwer cannont doApproval', async() => {
                await truffleAssert.reverts(ownerap.doApproval({ from: nonowner1 }))
            })

            it('notApproved', async() => {
                await ownerap.doApproval();
                assert.isFalse(false, 'address already approved')
            })

        });
    })
    //Fim