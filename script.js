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
const tableWebsite = document.querySelector('.table');
const inputs = document.querySelectorAll('.filter');
const buttons = document.querySelectorAll('.sort');

//initially I wanted to hardcode table in the HTML however I think printing it is a better solution
//I had to google how to print table from json
function printTable() {
let table = `<table><thead><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>DoB</th><th>Company</th><th>Note</th></tr></thead>`;
  table += '<tbody>';
  for (var i in myData) {
    table += `<tr>
    <td>${myData[i].id}</td>
    <td>${myData[i].firstName}</td>
    <td>${myData[i].lastName}</td>
    <td>${myData[i].dateOfBirth}</td>
    <td>${myData[i].company}</td>
    <td>${myData[i].note}</td>
    </tr>`;
  }
//innerHTML is the devil of devils, however right now it is the only solution I can come up with,
//innerText is much safer but will not work in this case
tableWebsite.innerHTML = table;
}

printTable();

//sorting functionality needs improvment because of the code repetition
//however I don't know how to pass values in sort() function for each button

buttons[0].addEventListener("click", function(){
  myData.sort((a,b) => a.id > b.id);
  printTable();
});

buttons[1].addEventListener("click", function() {
  myData.sort((a,b) => a.firstName > b.firstName);
  printTable();
});

buttons[2].addEventListener("click", function() {
  myData.sort((a,b) => a.lastName > b.lastName);
  printTable();
});

buttons[3].addEventListener("click", function() {
  console.log(myData.forEach(x => x.dateOfBirth.split("")))
  myData.sort((a,b) => a.dateOfBirth > b.dateOfBirth);
  printTable();
});

buttons[4].addEventListener("click", function() {
  myData.sort((a,b) => a.company > b.company);
  printTable();
});

buttons[5].addEventListener("click", function() {
  myData.sort((a,b) => a.note > b.note);
  printTable();
});

//filter functionality

// let allTableElementsTd = document.getElementsByTagName("td");
// let allTableElementsTr = document.getElementsByTagName("tr");

//functions fired at inputs that include letters
inputs[1].onkeyup = function checkElementLetters() {
  let firstNameInput = inputs[1].value.toLowerCase();
  myData.forEach(function(character) {
    let index = myData.indexOf(character);
    if (character.firstName.toLowerCase().includes(firstNameInput)) {
      console.log(`${index} ${character.firstName} contains the letter from input`)
    } else {
      console.log(`${index} ${character.firstName} does not contain the letter from input`);
      myData.splice(index, 1);
    }
  });
  printTable();
}

inputs[2].onkeyup = function checkElementLetters() {
  let lastNameInput = inputs[2].value.toLowerCase();
  myData.forEach(function(character) {
    let index = myData.indexOf(character);
    if (character.lastName.toLowerCase().includes(lastNameInput)) {
      console.log(`${index} ${character.lastName} contains the letter from input`)
    } else {
      console.log(`${index} ${character.lastName} does not contain the letter from input`);
      myData.splice(index, 1);
    }
  });
  printTable();
}

inputs[4].onkeyup = function checkElementLetters() {
  let companyInput = inputs[4].value.toLowerCase();
  myData.forEach(function(character) {
    let index = myData.indexOf(character);
    if (character.company.toLowerCase().includes(companyInput)) {
      console.log(`${index} ${character.company} contains the letter from input`)
    } else {
      console.log(`${index} ${character.company} does not contain the letter from input`);
      myData.splice(index, 1);
    }
  });
  printTable();
}

//functions fired at inputs that include numbers
inputs[0].onkeyup = function checkElementLetters() {
  let idInput = inputs[0].value;
  myData.forEach(function(character) {
    let index = myData.indexOf(character);
    if (character.id == idInput) {
      console.log(`${index} ${character.id} contains the number from input`)
    } else {
      console.log(`${index} ${character.id} does not contain the number from input`);
      myData.splice(index, 1);
    }
  });
  printTable();
}

inputs[3].onkeyup = function checkElementLetters() {
  let DOBInput = inputs[3].value;
  myData.forEach(function(character) {
    let index = myData.indexOf(character);
    if (character.dateOfBirth.includes(DOBInput)) {
      console.log(`${index} ${character.dateOfBirth} contains the number from input`)
    } else {
      console.log(`${index} ${character.dateOfBirth} does not contain the number from input`);
      myData.splice(index, 1);
    }
  });
  printTable();
}

inputs[5].onkeyup = function checkElementLetters() {
  let noteInput = inputs[5].value;
  myData.forEach(function(character) {
    let index = myData.indexOf(character);
    if (character.note.includes(noteInput)) {
      console.log(`${index} ${character.note} contains the number from input`)
    } else {
      console.log(`${index} ${character.note} does not contain the number from input`);
      myData.splice(index, 1);
    }
  });
  printTable();
}

//pagination


// not sure if I am able to access the data from additional fila data.json, might be possible with local server and using ajax

// $.ajax({
//   dataType: "json",
//   url: 'data.json',
//   data: data,
//   success: success
// });
// //var mydata = JSON.parse(data);
// //console.log(MyData)
// */