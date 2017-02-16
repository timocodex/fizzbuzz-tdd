
const chai = require('chai')
const should = chai.should()
const chaiArrays = require('chai-arrays');
chai.use(chaiArrays);


const fizzbuzz = require('../fizbuz')



describe('tes fizzbuzz',function(){
  it('seharusnya mengembalikan mkfizbuz function',function(){
    fizzbuzz.mkfizbuz.should.be.ok
  })
  it('seharusnya mengembalikan fizz jika habis dibagi 3 ,buzz jika habis dibagi 5 dan fizzbuzz jika habis dibagi 5 dan 3',function(){
    fizzbuzz.mkfizbuz(15).should.equalTo([ 1,
  2,
  'fizz',
  4,
  'buzz',
  'fizz',
  7,
  8,
  'fizz',
  'buzz',
  11,
  'fizz',
  13,
  14,
  'fizzbuzz'
]

)

  })
})
