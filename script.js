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
  myData.sort(function (a,b) {
    return a.id > b.id;
  });
  printTable();
});

buttons[1].addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.firstName > b.firstName;
  });
  printTable();
});

buttons[2].addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.lastName > b.lastName;
  });
  printTable();
});

buttons[3].addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.dateOfBirth > b.dateOfBirth;
  });
  printTable();
});

buttons[4].addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.company > b.company;
  });
  printTable();
});

buttons[5].addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.note > b.note;
  });
  printTable();
});

//filter functionality
// let allTableElementsTd = document.getElementsByTagName("td");
// let allTableElementsTr = document.getElementsByTagName("tr");

//functions fired at inputs that include letters
inputs[1].onkeyup = function checkElementLetters() {
  let firstNameInput = inputs[1].value.toLowerCase();
  myData.forEach(function(character) {
    console.log(character.firstName.toLowerCase(), firstNameInput)
    if (character.firstName.toLowerCase().includes(firstNameInput)) {
      console.log("tak")
    } else {
      console.log('nope')
    }
  })
}

inputs[2].onkeyup = function checkElementLetters() {
  let lastNameInput = inputs[2].value.toLowerCase();
  myData.forEach(function(character) {
    console.log(character.lastName, lastNameInput)
    if (character.lastName.toLowerCase().includes(lastNameInput)) {
      console.log("tak")
    } else {
      console.log('nope')
    }
  })
}

inputs[4].onkeyup = function checkElementLetters() {
  let companyInput = inputs[4].value.toLowerCase();
  myData.forEach(function(character) {
    console.log(character.company, companyInput)
    if (character.company.toLowerCase().includes(companyInput)) {
      console.log("tak")
    } else {
      console.log('nope')
    }
  })
}

//functions fired at inputs that include numbers
inputs[0].onkeyup = function checkElementLetters() {
  let idInput = inputs[0].value;
  myData.forEach(function(character) {
    console.log(character.id, idInput)
    if (character.id.includes(idInput)) {
      console.log("tak")
    } else {
      console.log('nope')
    }
  })
}

inputs[3].onkeyup = function checkElementLetters() {
  let DOBInput = inputs[0].value;
  myData.forEach(function(character) {
    console.log(character.dateOfBirth, DOBInput)
    if (character.dateOfBirth.includes(DOBInput)) {
      console.log("tak")
    } else {
      console.log('nope')
    }
  })
}

inputs[5].onkeyup = function checkElementLetters() {
  let noteInput = inputs[0].value;
  myData.forEach(function(character) {
    console.log(character.note, noteInput)
    if (character.note.includes(noteInput)) {
      console.log("tak")
    } else {
      console.log('nope')
    }
  })
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