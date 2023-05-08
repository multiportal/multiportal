const protocol = window.location.protocol;
const host = window.location.hostname;
const dominio = protocol + "//" + host + "/";
const path_url = window.location.pathname;
var path_url1 = path_url.replace("/", "");
//console.log(dominio+path_url1!="https://multiportal.webcindario.com/"+path_url1);
console.log("ssl:","Activado");
if(protocol=="http:" || dominio+path_url1!="https://multiportal.webcindario.com/"+path_url1){
  window.location="https://multiportal.webcindario.com/"+path_url1;
}
