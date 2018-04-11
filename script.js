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

//innerHTML is the devil of devils, however right now it is the best solution I can come up with
tableWebsite.innerHTML = table;


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

// //sorting function
// button.addEventListener("click", myFunction);

// function myFunction (){
//   ids.sort();
//   // firstNames.sort();
//   // lastNames.sort();
//   // datesOfBirth.sort();
//   // companies.sort();
//   // notes.sort();
//   // console.log(ids, firstNames)
//    print()
// }

// function print() {
//   for (i=0; i < ; i++) {
//     first[i].innerText = ids[i];
//     second[i].innerText = firstNames[i];
//     third[i].innerText = lastNames[i];
//     fourth[i].innerText = datesOfBirth[i];
//     fifth[i].innerText = companies[i];
//     sixth[i].innerText = notes[i];
//   }
// }

// print()
// /*

// not sure if I am able to access the data from additional fila data.json, might be possible with local server and using ajax
// read more about this

// $.ajax({
//   dataType: "json",
//   url: url,
//   data: data,
//   success: success
// });
// //var mydata = JSON.parse(data);
// //console.log(MyData)
// */