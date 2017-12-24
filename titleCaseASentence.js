//Returns a string with each word in title case(First letter capital)
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  var str1 = [];
  for (var i in str){
    str1[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
  }
  str1 = str1.join(' ');
  return str1;
}

titleCase("I'm a little tea pot");