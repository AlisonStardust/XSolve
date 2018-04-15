let myData = [
  {
    "id": 1,
    "firstName": "Jan",
    "lastName": "Kowalski",
    "dateOfBirth": "1.7.1990 11:35",
    "company": "XSolve",
    "note": 90
  },
  {
    "id": 4,
    "firstName": "Justyna",
    "lastName": "Kowalska",
    "dateOfBirth": "4.02.1976 14:37",
    "company": "XSolve",
    "note": 91
  },
  {
    "id": 2,
    "firstName": "Krzysztof",
    "lastName": "Krawczyk",
    "dateOfBirth": "28.10.1950 2:15",
    "company": "Chilid",
    "note": 27
  },
  {
    "id": 3,
    "firstName": "Bogusław",
    "lastName": "Linda",
    "dateOfBirth": "03.01.1963 23:10",
    "company": "XSolve",
    "note": 50
  },
  {
    "id": 5,
    "firstName": "Krzysztof",
    "lastName": "Kononowicz",
    "dateOfBirth": "10.10.1910 18:00",
    "company": "Chilid",
    "note": 77
  },
  {
    "id": 6,
    "firstName": "Maryla",
    "lastName": "Rodowicz",
    "dateOfBirth": "29.02.1936 11:35",
    "company": "XSolve",
    "note": 8
  }
]

//selectiong all DOM elements
//I tend to make global variables when it comes to "catching" DOM elements
//not sure if it's fine or should I change my habit regarding that
const tableWebsite = document.querySelector('.table');
const inputs = document.querySelectorAll('.filter');
const buttons = document.querySelectorAll('.sort');

//initially I wanted to hardcode table in the HTML however I think printing it is a better solution
//I had to google how to print table from json
function printTable(tableToPrint) {
let table = `<table><thead><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>DoB</th><th>Company</th><th>Note</th></tr></thead>`;
  table += '<tbody>';
  for (var i in tableToPrint) {
    table += `<tr>
    <td>${tableToPrint[i].id}</td>
    <td>${tableToPrint[i].firstName}</td>
    <td>${tableToPrint[i].lastName}</td>
    <td>${tableToPrint[i].dateOfBirth}</td>
    <td>${tableToPrint[i].company}</td>
    <td>${tableToPrint[i].note}</td>
    </tr>`;
  }
//innerHTML is the devil of devils, however right now it is the only solution I can come up with,
//innerText is much safer but will not work in this case
tableWebsite.innerHTML = table;
}

printTable(myData);

//sorting functionality needs improvment because of the code repetition
//however I am not sure how to pass myData values in sort() function for each button

buttons[0].addEventListener("click", function(){
  myData.sort((a,b) => a.id > b.id);
  printTable(myData);
});

buttons[1].addEventListener("click", function() {
  myData.sort((a,b) => a.firstName > b.firstName);
  printTable(myData);
});

buttons[2].addEventListener("click", function() {
  myData.sort((a,b) => a.lastName > b.lastName);
  printTable(myData);
});

//functionality for dateOfBirth does not work
buttons[3].addEventListener("click", function() {
  console.log(myData.forEach(x => x.dateOfBirth.split("")))
  myData.sort((a,b) => a.dateOfBirth > b.dateOfBirth);
  printTable(myData);
});

buttons[4].addEventListener("click", function() {
  myData.sort((a,b) => a.company > b.company);
  printTable(myData);
});

buttons[5].addEventListener("click", function() {
  myData.sort((a,b) => a.note > b.note);
  printTable(myData);
});

//filter functionality also needs improvment because of the code repetition

inputs[1].onkeyup = function checkElementLetters() {
  let firstNameInput = inputs[1].value.toLowerCase();
  let newTable = myData.filter((character) => character.firstName.toLowerCase().includes(firstNameInput));
  printTable(newTable);
}

inputs[2].onkeyup = function checkElementLetters() {
  let lastNameInput = inputs[2].value.toLowerCase();
  let newTable = myData.filter((character) => character.lastName.toLowerCase().includes(lastNameInput));
  printTable(newTable);
}

inputs[4].onkeyup = function checkElementLetters() {
  let companyInput = inputs[4].value.toLowerCase();
  let newTable = myData.filter((character) => character.company.toLowerCase().includes(companyInput));
  printTable(newTable);
}

//id functionality does not work
inputs[0].onkeyup = function checkElementLetters() {
  let idInput = inputs[1].value;
  let newTable = myData.filter((character) => character.id === idInput);
  printTable(newTable);
}

inputs[3].onkeyup = function checkElementLetters() {
  let DOBInput = inputs[3].value;
  let newTable = myData.filter((character) => character.dateOfBirth.includes(DOBInput));
  printTable(newTable);
}

inputs[5].onkeyup = function checkElementLetters() {
  let noteInput = inputs[5].value;
  let newTable = myData.filter((character) => character.note.includes(DOBInput));
  printTable(newTable);
}

//pagination - unfortunatelly at this moment I do not know how to do pagination.


/* Additional comments:

1. I was not sure if I am able to access the data from additional fila data.json.
I think it might be possible with local server or using ajax.
That's why I copied json file to script.js and used it here - otherwise I would be unable to access data.
I know it is not save to include sensitive data (ex. employees data) in public script, however
I was unable to go pass the accessing the data.json file.

2. There is a lot of code repetition and I try to avoid that at all costs, however
in this task it was very confusing for me how to decrease repetition (especially when it comes to values in objects).

3. I didn't finish all the required tasks and I am aware of that.

$.ajax({
  dataType: "json",
  url: 'data.json',
  data: data,
  success: success
});
var mydata = JSON.parse(data);
console.log(MyData)
*/