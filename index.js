// add solution here
function theBeatlesPlay (musicians, instruments){
  var empty=[]
  
 for (var i = 0; i< musicians.length; i++) { 
 var  string= `${musicians[i]} plays ${instruments[i]}`  
    empty.push(string)
} 
  return empty
}


function johnLennonFacts(facts){
var i=0;
 while ( facts.length>i ){
  facts.push(facts.push(facts[i]+"!!!")
  i++
}
  return facts
}