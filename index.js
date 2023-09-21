
//list for labels
var list1 = [];
var list2 = [];

//value for row and column

//row
var r = 1 ;
//column
var c = 0 ; 

function addRow(){

    var SelectTabble = document.getElementById("nortable");
    
    var tablerow = document.createElement("tr");
    // var tableBody = document.getElementsByTagName("tbody");
    // console.log(tableBody);
    list1[c] = document.getElementById("fname").value; 
  list2[c] = document.getElementById("cempno").value; 
  console.log(document.getElementById("fname").value);
  console.log(document.getElementById("cempno").value);

  var nameData = document.createElement("td");
  var empData = document.createElement("td");

  nameData.innerHTML = list1[c];
  empData.innerHTML = list2[c];

 tablerow.appendChild(nameData) ; 
 tablerow.appendChild(empData) ; 
//  console.log(tablerow);

//  tableBody.appendChild(tablerow);
 SelectTabble.appendChild(tablerow)































    
    // //select a table in dom 
    // var SelectTable = document.getElementById("nortable");
    
    // //add row in table
    // var AddRow = SelectTable.insertRow(r);
    // var AddColumn = AddRow.insertCell()
    //  list1[c] = document.getElementById("fname").value; 
    //  list2[c] = document.getElementById("cempno").value; 
    // console.log(document.getElementById("cempno").value);
    // console.log(document.getElementById("fname").value);

    // var cel1 = AddColumn.document.createElement("td");
    // var cel2 = AddColumn.document.createElement("td");
    
    //    cel1.innerHtml = list1[c];
    //    cel2.innerHtml = list2[c];

    //    r++
    //    c++
       
}