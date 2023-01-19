//UC1
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
//uc2
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
//uc3
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
//uc4
function editContact(){
    var name = prompt("enter the firstname of contact you want to Edit");
    for(let i=0;i<array.length;i++){
        if(array[i].firstName == name){
            var choice = prompt("choose what you want to edit : \n1)firstName \n2)lastName \n3)Address \n4)city \n5)State \n6)Zip \n7)Phone Number \n8)Email \n");
            switch(choice){
                case "1":
                    array[i].firstName=prompt("enter the firstName");
                    break;
                case "2":
                    array[i].lastName = prompt("enter the lastName");
                    break;
                case "3":
                    array[i].address = prompt("enter the address");
                    break;
                case "4":
                    array[i].city=prompt("enter the city");
                    break;
                case "5":
                    array[i].state = prompt("enter the state");
                    break;
                case "6":
                    array[i].zip = prompt("enter the zip");
                    break;
                case "7":
                    array[i].phoneNumber=prompt("enter the phoneNumber");
                    break;
                case "8":
                    array[i].email = prompt("enter the email");
                    break;
                default:
                    console.log("invalid option");
                    break;
            }
        }
    }
}
//uc5
function deleteContact()
{
    var name = prompt("enter firstname of contact you want to delete :");
    for(let i=0;i<array.length;i++){
        if(array[i].firstName == name){
            array.splice(i,1);
        }
    }
}
//uc6
function countOfContacts(data) {
    return data.reduce((sum, a) => sum + 1, 0);
}
while(true){
    console.log("choose the option");
    var option = prompt("1)Display Contacts in AddressBook. \n2)Add Details in AddressBook\n3) Edit Contact using FirstName\n4) Delete contact \n5) count using Reduce\n");
    switch(option){
        case "1":
            displayContacts();
            break;
        case "2":
            addDetails();
            break;
        case "3":
            editContact();
            break;
        case "4":
            deleteContact();
            break;
        case "5":
            var coun = countOfContacts(array);
            console.log(coun);
            break;
    }
}