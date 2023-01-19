//UC1

//UC2

//UC3

//UC4
const prompt = require("prompt-sync")();
class AddressBook{
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    printDetails(){
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.address);
        console.log(this.city);
        console.log(this.state);
        console.log(this.zip);
        console.log(this.phoneNumber);
        console.log(this.email);

    }
}
var contact1=new AddressBook("charu","v","abc","xyz","Telangana",506164,8235263526,"charu@gmail.com");//contact1.printDetails();
var contact2=new AddressBook("vishwa","s","def","uvw","hyd",500010,8265263524,"vishwa@gmail.com");//contact2.printDetails();
var contact3=new AddressBook("riya","k","ghi","rst","tn",500106,8237526526,"riya@gmail.com");////contact3.printDetails();
var map1= new Map();
map1.set(1,contact1);
map1.set(2,contact2);
map1.set(3,contact3);
//console.log(map1.size);
var array=[];
array.push(contact1);
array.push(contact2);
array.push(contact3);
console.log(array[0].firstName);
function addDetails(){
    var contact = new AddressBook();
    contact.firstName = prompt("Please enter the firstName :");
    contact.lastName = prompt("Please enter the lastName :");
    contact.address = prompt("Please enter the address :");
    contact.city = prompt("Please enter the city :");
    contact.state = prompt("Please enter the state :");
    contact.zip = prompt("Please enter the zip :");
    contact.phoneNumber = prompt("Please enter the phoneNumber :");
    contact.email = prompt("Please enter the email :");
    array.push(contact);
}
while(true){
    console.log("1");//choose the option
    var option = prompt("1)Add Details in AddressBook\n");
    switch(option){
        case "1":
            addDetails();
            break;
    }
}