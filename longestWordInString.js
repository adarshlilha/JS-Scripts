//Returns length of the longest word in the string
function findLongestWord(str) {
  str = str.split(' ');
  var largestLength = str[0].length;
  for (var i in str){
    if (largestLength < str[i].length){
      largestLength = str[i].length;
    }
  }
  return largestLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");