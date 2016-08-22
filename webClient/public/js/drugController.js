app.controller('drugController', function($scope, $compile) {
      $scope.drugs = [
            {
                name: 'Example med 1',
                din: 1111111,
                description: 'Oral antibacterial.',
                instructions: 'Once per day.'
            },
            {
                name: 'Example med 2',
                din: 2222222,
                description: 'Painkiller',
                instructions: 'Take one with each meal, three times a day.'
            }
       ]; 

        $scope.addDrug = function($event){
                angular.element(document.querySelector('#tblData')).append(
                    "<tr>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='button' class='btn btn-info' id='btnSave' value='Save''></td>"+
                    "<td><p></p></td>"+
                    "</tr>");

                angular.element(document.querySelector('#btnSave')).bind("click", function(e){
                    console.log("gonna go to button save");
                    $scope.saveDrug(e);
                });
        }

        $scope.saveDrug = function($event) {
                console.log("save button does sth");
                var par = $($event.target).parent().parent(); //tr
                console.log(par);
                var tdName = par.children("td:nth-child(1)");
                var tdDIN = par.children("td:nth-child(2)");
                var tdDescription = par.children("td:nth-child(3)");
                var tdInstruction = par.children("td:nth-child(4)");
                var tdEditButton = par.children("td:nth-child(5)");
                var tdBlank = par.children("td:nth-child(6)");

                tdName.html(tdName.children("input[type=text]").val());
                tdDIN.html(tdDIN.children("input[type=text]").val());
                tdDescription.html(tdDescription.children("input[type=text]").val());
                tdInstruction.html(tdInstruction.children("input[type=text]").val());
                //edit row button
                var editBtnHTML = "<input type='button' class='btn btn-warning' id='btnEdit' value='Edit' ng-click='editDrug($event)'> ";
                var editButton = $compile(editBtnHTML)($scope);
                tdEditButton.html(editButton);
                tdBlank.html("<p></p>"); //to erase the delete button
        }

        $scope.editDrug = function($event) {
                console.log("edit drug");
                var par = $($event.target).parent().parent(); //tr
                console.log(par);
                var tdName = par.children("td:nth-child(1)");
                var tdDIN = par.children("td:nth-child(2)");
                var tdDescription = par.children("td:nth-child(3)");
                var tdInstruction = par.children("td:nth-child(4)");
                var tdSaveButton = par.children("td:nth-child(5)");
                var tdDeleteButton = par.children("td:nth-child(6)");

                tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
                tdDIN.html("<input type='text' value='"+tdDIN.html()+"'/>");
                tdDescription.html("<input type='text' value='"+tdDescription.html()+"'/>");
                tdInstruction.html("<input type='text' value='"+tdInstruction.html()+"'/>");
                //save row button
                var saveBtnHTML = "<input type='button' class='btn btn-success' id='btnSave' value='Save' ng-click='saveDrug($event)'> ";
                saveButton = $compile(saveBtnHTML)($scope);
                tdSaveButton.html(saveButton);
                //delete row button
                var delBtnHTML = "<input type='button' class='btn btn-danger' id='btnDelete' value='Delete' ng-click='delDrug($event)'> ";
                var deleteButton = $compile(delBtnHTML)($scope);
                tdDeleteButton.html(deleteButton);
        }     

        $scope.delDrug = function($event) {
          console.log("delete drug");
          var par = $($event.target).parent().parent(); //tr
          par.remove();
        }

});

