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

//initially I wanted to hardcode table in the HTML however I think printing it is a better solution - I had to google how to print that and I need to admit that

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
let allTableElementsTd = document.getElementsByTagName("td");
let allTableElementsTr = document.getElementsByTagName("tr");
console.log(allTableElementsTr)

inputs[1].onkeyup = function checkElementLetters() {
  let firstLetter = inputs[1].value.toLowerCase();
  myData.forEach(function(character) {
    console.log(character.firstName)
  })
  //console.log(allTableElementsTd[1].innerHTML, firstLetter);
  // if (allTableElementsTd[1].innerHTML.includes(firstLetter) || allTableElementsTd[7].innerHTML.includes(firstLetter)
  //   || allTableElementsTd[13].innerHTML.includes(firstLetter) || allTableElementsTd[19].innerHTML.includes(firstLetter)
  //   || allTableElementsTd[25].innerHTML.includes(firstLetter) || allTableElementsTd[31].innerHTML.includes(firstLetter)
  //   || allTableElementsTd[37].innerHTML.includes(firstLetter)) {
  //   alert('dupa');
  // }
}

inputs[2].onkeyup = function checkElementLetters() {
  checkLetters(2);
}

inputs[4].onkeyup = function checkElementLetters() {
  checkLetters(4);
}

function checkLetters(i) {
  let letter = inputs[i].value.toLowerCase();
  console.log(letter);
  if (letter.indexOf('a') !== 0) {
    allTableElementsTd[0].style.display = "none";
    allTableElementsTd[1].style.display = "none";
    allTableElementsTd[2].style.display = "none";
    allTableElementsTd[3].style.display = "none";
    allTableElementsTd[4].style.display = "none";
    allTableElementsTd[5].style.display = "none";
  }
}

inputs[0].onkeyup = function checkElementLetters() {
  checkNumbers(0);
}

inputs[3].onkeyup = function checkElementLetters() {
  checkNumbers(3);
}

inputs[5].onkeyup = function checkElementLetters() {
  checkNumbers(5);
}

function checkNumbers(i) {
  let numerValue = inputs[i].value;
  console.log(allTableElementsTr[1].value.innerHTML)
  if (allTableElementsTr[1].value.innerHTML.includes(numerValue)) {
    allTableElementsTd[0].style.display = "none";
    allTableElementsTd[1].style.display = "none";
    allTableElementsTd[2].style.display = "none";
    allTableElementsTd[3].style.display = "none";
    allTableElementsTd[4].style.display = "none";
    allTableElementsTd[5].style.display = "none";
  }
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