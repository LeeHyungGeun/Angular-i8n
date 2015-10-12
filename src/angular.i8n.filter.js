angular
.module('i8nFilter', [])
.filter('i8n', i8nFilter);
i8nFilter.$inject = [];
function i8nFilter () {
  var map = {
    "en_US": {
      "title": "Title",
      "description": "Description",
      "parameter": "Parameter"
    },
    "ko_KR": {
      "title": "타이틀",
      "description": "소개",
      "parameter": "파라미터"
    },
    "zh_CN": {
      "title": "题目",
      "description": "介绍",
      "parameter": "参数"
    }
  };
  var lang = 'ko_KR';
  return function (text, delang) {
    if (delang) {
      lang = delang;
    }
    angular.forEach(map[lang], mappingLanguage);
    function mappingLanguage (value, key) {
      if (text.indexOf(key) != -1) {
        var reg = eval('/' + key + '/gi');  // new Reg('/' + key + '/gi');
        text = text.replace(reg, value);
      }
    }
    return text;
  };
}
