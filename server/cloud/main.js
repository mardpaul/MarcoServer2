
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("login", function(request, response) {
var username ="Christopher";
var password="1337"
Parse.User.login(username ,password, {

  success :function(user) {
  
  response.success("good");
  alert("you are logged in");
  },
 error: function(user,error) {
 response.error("holt");
 };

});









 
});
Parse.Cloud.define("findTox" , function(request , response{

var currentUser= Paser.User.Current();
 query.equalTo.("COLOUR", request.params.currentUser);
 query.find({
 success : function(results){
	alert("milk" + results[0].get("COLOUR"));
	}
	},
	error: function(error) {
	alert("error" +error.code+ " " +error.message);
})


 
 
 });
);
