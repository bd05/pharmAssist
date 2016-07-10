app.controller('patientDirController', function($scope, $compile) {
        $scope.patients = [
            {
                name: 'Fernadette Deung',
                sin: 1765765,
                gender: 'M',
                birth: '01/24/1988',
                phone: '123-4567-890'
            },
            {
                name: 'Fasfdad',
                sin: 1765765,
                gender: 'M',
                birth: '01/24/1988',
                phone: '123-4567-890'
            }
        ];

        $scope.addPatient = function($event){
                angular.element(document.querySelector('#tblData')).append(
                    "<tr>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='button' class='btn btn-info' id='btnSave' value='Save''></td>"+
                    "<td><p></p></td>"+
                    "</tr>");

                angular.element(document.querySelector('#btnSave')).bind("click", function(e){
                    console.log("gonna go to button save");
                    $scope.savePatient(e);
                });
        }

        $scope.savePatient = function($event) {
                console.log("save button does sth");
                var par = $($event.target).parent().parent(); //tr
                console.log(par);
                var tdName = par.children("td:nth-child(1)");
                var tdSIN = par.children("td:nth-child(2)");
                var tdGender = par.children("td:nth-child(3)");
                var tdBirth = par.children("td:nth-child(4)");
                var tdPhone = par.children("td:nth-child(5)");
                var tdEditButton = par.children("td:nth-child(6)");
                var tdBlank = par.children("td:nth-child(7)");

                tdName.html(tdName.children("input[type=text]").val());
                tdSIN.html(tdSIN.children("input[type=text]").val());
                tdGender.html(tdGender.children("input[type=text]").val());
                tdBirth.html(tdBirth.children("input[type=text]").val());
                tdPhone.html(tdPhone.children("input[type=text]").val());
                //edit row button
                var editBtnHTML = "<input type='button' class='btn btn-warning' id='btnEdit' value='Edit' ng-click='editPatient($event)'> ";
                var editButton = $compile(editBtnHTML)($scope);
                tdEditButton.html(editButton);
                tdBlank.html("<p></p>"); //to erase the delete button
        }

        $scope.editPatient = function($event) {
                console.log("edit patient");
                var par = $($event.target).parent().parent(); //tr
                console.log(par);
                var tdName = par.children("td:nth-child(1)");
                var tdSIN = par.children("td:nth-child(2)");
                var tdGender = par.children("td:nth-child(3)");
                var tdBirth = par.children("td:nth-child(4)");
                var tdPhone = par.children("td:nth-child(5)");
                var tdSaveButton = par.children("td:nth-child(6)");
                var tdDeleteButton = par.children("td:nth-child(7)");

                tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
                tdSIN.html("<input type='text' id='txtClinic' value='"+tdSIN.html()+"'/>");
                tdGender.html("<input type='text' id='txtAddress' value='"+tdGender.html()+"'/>");
                tdBirth.html("<input type='text' id='txtAddress' value='"+tdBirth.html()+"'/>");
                tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
                //save row button
                var saveBtnHTML = "<input type='button' class='btn btn-success' id='btnSave' value='Save' ng-click='savePatient($event)'> ";
                saveButton = $compile(saveBtnHTML)($scope);
                tdSaveButton.html(saveButton);
                //delete row button
                var delBtnHTML = "<input type='button' class='btn btn-danger' id='btnDelete' value='Delete' ng-click='delPatient($event)'> ";
                var deleteButton = $compile(delBtnHTML)($scope);
                tdDeleteButton.html(deleteButton);
        }     

        $scope.delPatient = function($event) {
          console.log("delete patient");
          var par = $($event.target).parent().parent(); //tr
          par.remove();
        }
});

