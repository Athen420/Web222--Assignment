//NAME: ALLAN JOHN
function format()
{
    let line1= "Name: ".bold() + this.name + "<br/>\n";
    let line2= "Address: ".bold() + this.address + "<br/>\n";
    let line3= "Work Phone: ".bold() + this.work + "<br/>\n";
    let line4= "Home Phone: ".bold() + this.home + "<hr/>\n";
    document.write(line1,line2,line3,line4);
}

function DisplayDetails(name,address,work,home)
{
    this.name = name;
    this.address = address;
    this.work = work;
    this.home = home;
    this.format = format;
}

//Adding the given data
let sue = new DisplayDetails("Sue Suthers","123 Elm Street","555-1234","555-9876");
let phred = new DisplayDetails("Phred Madsen","233 Oak Lane","555-2222","555-4444");
let henry = new DisplayDetails("Henry Tillman","233 Walnut Circle","555-1299","555-1344");

sue.format();
phred.format();
henry.format();