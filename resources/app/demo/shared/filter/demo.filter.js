angular.module('app.demo').filter('exact', function(){
  return function(items, match){
    var matching = [], matches, falsely = true;
    
    // Return the items unchanged if all filtering attributes are falsy
    angular.forEach(match, function(value, key){
      falsely = falsely && !value;
    });
    if(falsely){
      return items;
    }
    
    angular.forEach(items, function(item){
      matches = true;
      angular.forEach(match, function(value, key){
        if(!!value){ // do not compare if value is empty
          matches = matches && (item.orgName[key] === value);  
        }
      });
      if(matches){
        matching.push(item);  
      }
    });
    return matching;
  }
});