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
while(true){
    console.log("");//Please choose the option
    var option = prompt("1)Display Contacts in AddressBook. \n2)Add Details in AddressBook\n3) Edit Contact using FirstName \n");
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
    }
}