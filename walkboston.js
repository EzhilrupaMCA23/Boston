import {boston} from "./boston.js";
var Newboston=boston.data

var element="";

for(let i=0;i<Newboston.length;i++)
{
  for(let j=i+1;j<Newboston.length;j++)  
{
    if(Newboston[i][11]<Newboston[j][11]){
        let temp=Newboston[i]
        Newboston[i]=Newboston[j]
        Newboston[j]=temp
        
    }
}
}
var walk=Newboston.slice(0,5);
for(let i=0;i<5;i++)
{
element=element +"<h1>" + walk[i][8] + "</h1>" + "<h1>" + walk[i][11] + "</h1>"
}
document.getElementById("app").innerHTML=element;
