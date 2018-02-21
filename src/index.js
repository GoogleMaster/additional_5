module.exports = function check(str, bracketsConfig) {
  // your solution
    if(str.length % 2 != 0) return false;
    var result = str;
    var regex = '';
    if(bracketsConfig.length > 1) {
        for (var i = 0; i < bracketsConfig.length; i++) {
            if (i > 0) {
                regex += '|';
            }
            //regex += '(\\' + bracketsConfig[i][0] + '\\' + bracketsConfig[i][1] + ')';
            if(bracketsConfig[i][0] == '[' || bracketsConfig[i][0] == '\\' || bracketsConfig[i][0] == '^' || bracketsConfig[i][0] == '$' || bracketsConfig[i][0] == '.' || bracketsConfig[i][0] == '|' || bracketsConfig[i][0] == '?' || bracketsConfig[i][0] == '*' || bracketsConfig[i][0] == '+' || bracketsConfig[i][0] == '(' || bracketsConfig[i][0] == ')'){
                regex += '(\\' + bracketsConfig[i][0];
            }else{
                regex += '(' + bracketsConfig[i][0];
            }
            if(bracketsConfig[i][1] == '[' || bracketsConfig[i][1] == '\\' || bracketsConfig[i][1] == '^' || bracketsConfig[i][1] == '$' || bracketsConfig[i][1] == '.' || bracketsConfig[i][1] == '|' || bracketsConfig[i][1] == '?' || bracketsConfig[i][1] == '*' || bracketsConfig[i][1] == '+' || bracketsConfig[i][1] == '(' || bracketsConfig[i][1] == ')'){
                regex += '\\' + bracketsConfig[i][1] + ')';
            }else{
                regex += bracketsConfig[i][1] + ')';
            }
        }
    }else{
        //regex = '(\\' + bracketsConfig[0][0] + '\\' + bracketsConfig[0][1] + ')';
        if(bracketsConfig[0][0] == '[' || bracketsConfig[0][0] == '\\' || bracketsConfig[0][0] == '^' || bracketsConfig[0][0] == '$' || bracketsConfig[0][0] == '.' || bracketsConfig[0][0] == '|' || bracketsConfig[0][0] == '?' || bracketsConfig[0][0] == '*' || bracketsConfig[0][0] == '+' || bracketsConfig[0][0] == '(' || bracketsConfig[0][0] == ')'){
            regex += '(\\' + bracketsConfig[0][0];
        }else{
            regex += '(' + bracketsConfig[0][0];
        }
        if(bracketsConfig[0][1] == '[' || bracketsConfig[0][1] == '\\' || bracketsConfig[0][1] == '^' || bracketsConfig[0][1] == '$' || bracketsConfig[0][1] == '.' || bracketsConfig[0][1] == '|' || bracketsConfig[0][1] == '?' || bracketsConfig[0][1] == '*' || bracketsConfig[0][1] == '+' || bracketsConfig[0][1] == '(' || bracketsConfig[0][1] == ')'){
            regex += '\\' + bracketsConfig[0][1] + ')';
        }else{
            regex += bracketsConfig[0][1] + ')';
        }
    }
    regex = new RegExp(regex, 'g');
    for(i = 0; i < str.length / 2; i++){
        result = result.replace(regex, '');
        if(result == ''){
            //i = str.length;
            return true;
        }
    }
    return false;
}
