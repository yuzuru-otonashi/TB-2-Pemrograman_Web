const txtElement = ['SEPTO ADRIANTO AZHAR'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function statementControl (){
	var my_name = "Septo Adrianto Azhar"
    var name = prompt("Ketik Nama Anda : ")
        if (name===my_name) {
            (confirm ("Data Yang Anda Masukkan Diterima. Klik OKE untuk masuk."))
		} else { 
			alert("Maaf Data Yang Anda Masukkan Salah.");
			}
	})();

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 250);

})();

function validasi(){
	var message = document.getElementById("message").value;
	var rating = document.getElementById("rating");
	var value_rating = rating.options[rating.selectedIndex].value;
	if (message !="" && rating !="" && value_rating !=0 ) {
		alert ("Thank You!");
	} else {
        alert('Please re-check again, dont let there be something that is not filled in!');
	}
}

function User(firstName, middleName, lastName) {
	this.firstName = firstName;
	this.middleName = middleName;
	this.lastName = lastName;
	
	this.fullName = function() {
		return `Website by "${this.firstName} ${this.middleName} ${this.lastName}".`
	}
	this.showName = function() {
		alert(this.fullName());
	}
}
var person = new User("Septo", "Adrianto", "Azhar");
person.showName();