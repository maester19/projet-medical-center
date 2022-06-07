const {errorSMS} =  require('./globals')
module.exports = {
    sendObject: function(res, status, success, result){
        res.status(status).json({
            success: success,
            type: "object",
            total: 1,
            data: result,
            details: errorSMS[`${status}`]
        });
    }, 

    sendList: function(res, status, success, result){
        res.status(status).json({
            success: success,
            type: "list",
            total: result.length,
            data: result,
            details: errorSMS[`${status}`]
        });
    }, 

    sendMore: function(res, status, success, result, scroll_id){
        res.status(status).json({
            success: success,
            type: "list",
            total: result.length,
            data: result,
            details: errorSMS[`${status}`],
            _scroll_id: scroll_id
        });
    },

    removeSpecials: function (str){
        return removeSpecials(str)
    }
}

function removeSpecials(str) {
    var lower = str.toLowerCase();
    var upper = str.toUpperCase();
  
    var res = "";
    for(var i=0; i<lower.length; ++i) {
        if(lower[i] != upper[i] || lower[i].trim() === '' || lower[i] == '.'){
          if(lower[i] == ' '){
            res += '_';
          }
          else if (lower[i] == '.'){
              res += '.';
          }
          else{
            res += str[i];
          }
          
        }     
    }
    return res;
  }