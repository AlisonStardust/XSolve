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

const tableWebsite = document.querySelector('.table');

const inputs = document.querySelectorAll('.filter');
console.log(inputs)
const buttons = document.querySelectorAll('.sort');
console.log(buttons)

const buttonID = document.querySelector('.sort-ID');
const buttonFirstName = document.querySelector('.sort-firstName');
const buttonLastName = document.querySelector('.sort-lastName');
const buttonDateOfBirth = document.querySelector('.sort-DateOFBirth');
const buttonCompany = document.querySelector('.sort-Company');
const buttonNote = document.querySelector('.sort-Note');

//innitialy I wanted to hardcode table in the HTML however I think printing it is a better solution - I had to google how to print that and I need to admit that

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
//innerHTML is the devil of devils, however right now it is the only solution I can come up with, innerText will not work and is much safer
tableWebsite.innerHTML = table;
}

printTable();

//sorting functionality needs improvment because of the code repetition, however I don't know how to pass values in function for each button

buttonID.addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.id > b.id;
  });
  printTable();
});

buttonFirstName.addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.firstName > b.firstName;
  });
  printTable();
});

buttonLastName.addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.lastName > b.lastName;
  });
  printTable();
});

buttonDateOfBirth.addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.dateOfBirth > b.dateOfBirth;
  });
  printTable();
});

buttonCompany.addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.company > b.company;
  });
  printTable();
});

buttonNote.addEventListener("click", function() {
  myData.sort(function (a,b) {
    return a.note > b.note;
  });
  printTable();
});

//filter

let nachwile = [];

inputs[0].onkeyup = function sprawdzic() {
  nachwile.push(inputs[0].value);
  dupa();
}

function dupa () {
  if (nachwile.indexOf('a') === 0) {
    alert('ass')
  }
}

//pagination



// const first = document.querySelectorAll('.first td');
// const second = document.querySelectorAll('.second td');
// const third = document.querySelectorAll('.third td');
// const fourth = document.querySelectorAll('.fourth td');
// const fifth = document.querySelectorAll('.fifth td');
// const sixth = document.querySelectorAll('.sixth td');
// const button = document.querySelector('.sort-ID');

// let ids = MyData.map(function(character) {
//   return character.id;
// });

// let firstNames = MyData.map(function(character) {
//   return character.firstName;
// });

// let lastNames = MyData.map(function(character) {
//   return character.lastName;
// });

// let datesOfBirth = MyData.map(function(character) {
//   return character.dateOfBirth;
// });

// let companies = MyData.map(function(character) {
//   return character.company;
// });

// let notes = MyData.map(function(character) {
//   return character.note;
// });


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