


 
  function addOption(selectbox,text,value )
{
               var optn = document.createElement("OPTION");
               optn.text = text;
               optn.value = value;
               selectbox.options.add(optn);
}
 
function addOption_list(){
   var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://api.fixer.io/latest", false);
      xhttp.send();
      var data = xhttp.responseText;
      var json = JSON.parse(data);
      var keys = Object.keys(json.rates);
for (var i=0; i < keys.length;++i){
 
addOption(document.drop_list.initialCurr, keys[i], keys[i]);
 
addOption(document.drop_list.finalCur, keys[i], keys[i]);
}
}
    function UserAction() {
 
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "https://api.fixer.io/latest", false);
      xhttp.send();
      var data = xhttp.responseText;
      var json = JSON.parse(data);
      var keys = Object.keys(json.rates);
      var a = document.getElementById("finalCur").options[document.getElementById("finalCur").selectedIndex].value;
      var b = document.getElementById("initialCurr").options[document.getElementById("initialCurr").selectedIndex].value;
      var temp = this.amount.value / json.rates[b];
      var result = temp * json.rates[a];
      alert(result);
     
 
    }
 
  