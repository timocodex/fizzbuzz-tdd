
const chai = require('chai')
const should = chai.should()
const chaiArrays = require('chai-arrays');
chai.use(chaiArrays);


const fizzbuzz = require('../fizbuz')



describe('tes fizzbuzz',function(){
  it('seharusnya mengembalikan mkfizbuz function',function(){
    fizzbuzz.mkfizbuz.should.be.ok
  })


})
