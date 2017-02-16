

module.exports={
  mkfizbuz: function(number){
    var result=[]
    for(let i=1;i<=number;i++){
      i%3===0 && i%5===0 ?result.push('fizzbuzz'): i%5 === 0 ? result.push('buzz') : i%3 === 0 ? result.push('fizz'):res.push(i)
    }
    return result
}

}
