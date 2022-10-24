var btnDel = [], i;

for (i = 0; i < 5; i += 1) {
    btnDel[i] = "<button class='btnDel" + String(i) + "'>delete</button>";
}

var employeeList = [["Saurabh Deshpande", "CEO", 1111, btnDel[0]],
                    ["Pankaj Chohan", "Accountant", 2222, btnDel[1]],
                    ["Harsh Maheshwari", "Marketing", 3333, btnDel[2]],
                    ["Jay Gujarathi", "Sales", 4444, btnDel[3]],
                    ["Akshit Shah", "Manager", 5555, btnDel[4]]];

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function showEmployees() {
    "use strict";
    var row, col, table, tbody, tableString = "";
    
    table = document.getElementsByTagName("table")[0];
    tbody = document.createElement('tbody');
    
    $("qtyEmployee").innerHTML = "Showing " + employeeList.length + " employees";
        
    for (row = 0; row < employeeList.length; row += 1) {
        tableString += "<tr>";
        for (col = 0; col < 4; col += 1) {
            tableString += "<td>" + employeeList[row][col] + "</td>";
        }
        tableString += "</tr>";
    }
    tableString += "</tbody>";
    table.appendChild(tbody);
    $("tblBody").innerHTML = tableString;
}

var addEmployee = function () {
    "use strict";
    var name, title, extension, employee = [];
       
    name = $("name").value;
    title = $("title").value;
    extension = $("extension").value;
       
    // BASIC VALIDATION
    if (name === "") {
        $("requireName").innerHTML = "This field is required.";
        return;
    } else {
        $("requireName").innerHTML = "";
        employee.push(name);
    }
    
    if (title === "") {
        $("requireTitle").innerHTML = "This field is required.";
        return;
    } else {
        $("requireTitle").innerHTML = "";
        employee.push(title);
    }
    
    if (extension === "") {
        $("requireExt").innerHTML = "This field is required.";
        return;
    }
    
    if (isNaN(extension) || extension.length !== 4) {
        $("requireExt").innerHTML = "The extension must be a 4-digit number";
        return;
    } else {
        $("requireExt").innerHTML = "";
        employee.push(extension);
        window.console.log(employeeList.length);
        btnDel[employeeList.length + 1] = "<button class='btnDel" + String(employeeList.length + 1) + "'>delete</button>";
        employee.push(btnDel[employeeList.length + 1]);
    }
    
    if (employee.length > 0) {
        employeeList.push(employee);
    }
    showEmployees();
   
    $("regForm").reset();
    $("name").innerHTML = "";
    $("title").innerHTML = "";
    $("extension").innerHTML = "";
};

var deleteEmployee = function (index) {
    "use strict";
    employeeList.splice(index, 1);
    showEmployees();
};

window.addEventListener("load", function () {
    "use strict";
    showEmployees();
    $("add").addEventListener("click", addEmployee);
    $("tblBody").addEventListener("click", function (e) {
        if (e.target.textContent.match(/delete/)) {
            var i, index, tblBody, btnElements;

            tblBody = $("tblBody");
            btnElements = tblBody.getElementsByTagName("button");
            for (i = 0; i < btnElements.length; i += 1) {
                if (event.target.className === btnElements[i].className) {
                    index = i;
                }
            }
            deleteEmployee(index);
        }
    });
});