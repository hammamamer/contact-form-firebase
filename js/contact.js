  var config = {
    apiKey: "AIzaSyCr9ySJtPWX4u2hcT9LQOxtPlDN7H-8iwc",
    authDomain: "espace-membre.firebaseapp.com",
    databaseURL: "https://espace-membre.firebaseio.com",
    projectId: "espace-membre",
    storageBucket: "espace-membre.appspot.com",
    messagingSenderId: "423256803821"
  };
  firebase.initializeApp(config);
document.getElementById("membre").addEventListener("submit",subform);

var membreRef=firebase.database().ref("membre");
function subform(e)
{
e.preventDefault();
name=getInputValue("name");
age=getInputValue("age");
mail=getInputValue("mail");
phone=getInputValue("telephone");
message=getInputValue("description");
saveMembre(name,age,mail,phone,message);
}
function getInputValue(id)
{
	return document.getElementById(id).value;
}
function saveMembre(name,age,mail,phone,message)
{
	var newMembreRef=membreRef.push();
	newMembreRef.set({
		name:name,
		age:age,
		mail:mail,
    phone :phone,
    message:message

	})
}
