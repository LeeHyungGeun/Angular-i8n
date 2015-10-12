# Angular-i8n
It is a example of what how to make a i8n filter.

### how to make an i8n(global languages) filter.

#### 1. Make a i8n.filter.
```javascript
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
```

#### 2. Add the above i8n.filter on your main javascript source.
```javascript
angular
.module('exampleModule', ['i8nFilter'])
.controller('exampleController', exampleController);
exampleController.$inject = ['$scope'];
function exampleController ($scope) {
}
```

#### 3. Using the filter in your html.
```html
<span>{{ 'title' | i8n }}</span>
<span>{{ 'description' | i8n }}</span>
<span>{{ 'parameter' | i8n }}</span>
```

### NOTE
you just need to change the map, which is data, on your projects.

### Developer information
email: lhg4031@gmail.com
