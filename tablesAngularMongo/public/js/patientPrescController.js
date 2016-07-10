app.controller('patientPrescController', function($scope) {
        $scope.prescHistory = [
            {
                name: 'example med',
                prescNum: 1765765,
                DIN: '1111111',
                doctor:'Dr.Spaceman',
                quantity:'250g',
                refill:'1x/month',
                expiration: 'July 10, 2017',
                instructions: 'take one with every meal'
            },
            {
                name: 'example med',
                prescNum: 1765765,
                DIN: '2222222',
                doctor:'Dr.Spaceman',
                quantity:'250g',
                refill:'1x/month',
                expiration: 'July 10, 2017',
                instructions: 'take one with every meal'
            }
        ];

        $scope.addPresc = function($event){
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
                    $scope.saveDoc(e);
                });
        }

        $scope.savePresc = function($event) {
                console.log("save button does sth");
                var par = $($event.target).parent().parent(); //tr
                console.log(par);
                var tdName = par.children("td:nth-child(1)");
                var tdClinic = par.children("td:nth-child(2)");
                var tdPhone = par.children("td:nth-child(3)");
                var tdAddress = par.children("td:nth-child(4)");
                var tdEditButton = par.children("td:nth-child(5)");
                var tdBlank = par.children("td:nth-child(6)");

                tdName.html(tdName.children("input[type=text]").val());
                tdClinic.html(tdClinic.children("input[type=text]").val());
                tdPhone.html(tdPhone.children("input[type=text]").val());
                tdAddress.html(tdAddress.children("input[type=text]").val());
                //edit row button
                var editBtnHTML = "<input type='button' class='btn btn-warning' id='btnEdit' value='Edit' ng-click='editDoc($event)'> ";
                var editButton = $compile(editBtnHTML)($scope);
                tdEditButton.html(editButton);
                tdBlank.html("<p></p>"); //to erase the delete button
        }

        $scope.editPresc = function($event) {
                console.log("edit prescription");
                var par = $($event.target).parent().parent(); //tr
                console.log(par);
                var tdName = par.children("td:nth-child(1)"); //td
                var tdClinic = par.children("td:nth-child(2)");
                var tdPhone = par.children("td:nth-child(3)");
                var tdAddress = par.children("td:nth-child(4)");
                var tdSaveButton = par.children("td:nth-child(5)");
                var tdDeleteButton = par.children("td:nth-child(6)");

                tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
                tdClinic.html("<input type='text' id='txtClinic' value='"+tdClinic.html()+"'/>");
                tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
                tdAddress.html("<input type='text' id='txtAddress' value='"+tdAddress.html()+"'/>");
                //save row button
                var saveBtnHTML = "<input type='button' class='btn btn-success' id='btnSave' value='Save' ng-click='saveDoc($event)'> ";
                saveButton = $compile(saveBtnHTML)($scope);
                tdSaveButton.html(saveButton);
                //delete row button
                var delBtnHTML = "<input type='button' class='btn btn-danger' id='btnDelete' value='Delete' ng-click='delDoc($event)'> ";
                var deleteButton = $compile(delBtnHTML)($scope);
                tdDeleteButton.html(deleteButton);
        }     

        $scope.delPresc = function($event) {
          console.log("delete prescription");
          var par = $($event.target).parent().parent(); //tr
          par.remove();
        }

});
