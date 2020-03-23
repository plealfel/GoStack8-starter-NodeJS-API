var fs = require("fs");
fs.readFile("./test.json" , "utf8", function(err, data){
  if(err){
    return console.log("Erro ao ler arquivo");
  }
  
  var jsonData = JSON.parse(data); 

  var convert = {
      id: jsonData.user.id,
      name: jsonData.user.name,
      email: jsonData.user.email,
      token: jsonData.token
  }

  const {user: {id,name, email}, token } = jsonData;

  console.log(convertS)

});