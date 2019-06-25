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

        describe('Create - owner', function() {
            it('check if creator is owner at create', async() => {
                /* */
                var response = await ownerap.owner(owner1)
                console.log('response: ' + response)
                assert.equal(response, true, 'owner is wrong at create')
            })



            //O que mais deve ser verificado com o owner na criação do contrato?
        });

        describe('Create - quant', function() {
            it('check if minApproval = 1 at create', async() => {
                var response = await ownerap.minApproval()
                assert.equal(response, 1, 'minApproval is wrong at create')
            })

            it('check if quantOwner = 1 at create', async() => {
                    var qtd = await ownerap.quantOwner();
                    console.log("Quantidade:" + qtd);
                    assert.equal(qtd, 1, 'Qtd owner diferente de 1')
                })
                //O que mais deve ser verificado na criação do contrato?
        });

    })
    //Fimatlas quantum