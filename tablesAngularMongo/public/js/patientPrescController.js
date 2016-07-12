app.controller('patientPrescController', function($scope, $compile) {
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
                console.log("got to add presc");
                angular.element(document.querySelector('#prescriptionTable')).append(
                    "<tr>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='text'/></td>"+
                    "<td><input type='button' class='btn btn-info' id='btnSave' value='Save''></td>"+
                    "<td><p></p></td>"+ //for edit button
                    "<td><p></p></td>"+ //for refill input field
                    "<td><p></p></td>"+ //for refill button
                    "</tr>");

                angular.element(document.querySelector('#btnSave')).bind("click", function(e){
                    console.log("gonna go to button save");
                    $scope.savePresc(e);
                });
        }

        $scope.savePresc = function($event) {
                console.log("save button does sth");
                var par = $($event.target).parent().parent(); //tr
                console.log(par);
                var tdName = par.children("td:nth-child(1)");
                var tdNum = par.children("td:nth-child(2)");
                var tdDIN = par.children("td:nth-child(3)");
                var tdDoc = par.children("td:nth-child(4)");
                var tdQuantity = par.children("td:nth-child(5)");
                var tdFreq = par.children("td:nth-child(6)");
                var tdExp = par.children("td:nth-child(7)");
                var tdInstruction = par.children("td:nth-child(8)");
                var tdEditButton = par.children("td:nth-child(9)");
                var tdRefillReq = par.children("td:nth-child(10)");
                var tdRefillButton = par.children("td:nth-child(11)");
                //var tdBlank = par.children("td:nth-child(12)");

                tdName.html(tdName.children("input[type=text]").val());
                tdNum.html(tdNum.children("input[type=text]").val());
                tdDIN.html(tdDIN.children("input[type=text]").val());
                tdDoc.html(tdDoc.children("input[type=text]").val());
                tdQuantity.html(tdQuantity.children("input[type=text]").val());
                tdFreq.html(tdFreq.children("input[type=text]").val());
                tdExp.html(tdExp.children("input[type=text]").val());
                tdInstruction.html(tdInstruction.children("input[type=text]").val());
                //edit row button
                var editBtnHTML = "<input type='button' class='btn btn-warning' id='btnEdit' value='Edit' ng-click='editPresc($event)'> ";
                var editButton = $compile(editBtnHTML)($scope);
                tdEditButton.html(editButton);

                tdRefillReq.html("<input type='text' placeholder='enter number of pills'>");
                //tdBlank.html("<p></p>"); //to erase the delete button
                //refill button
                var refillBtnHTML = "<input type='button' class='btn btn-success' id='btnRefill' value='Refill' ng-click='refill()''> ";
                var refillButton = $compile(refillBtnHTML)($scope);
                tdRefillButton.html(refillButton);
        }

        $scope.editPresc = function($event) {
                console.log("edit prescription");
                var par = $($event.target).parent().parent(); //tr
                var tdName = par.children("td:nth-child(1)"); //td
                var tdNum = par.children("td:nth-child(2)");
                var tdDIN = par.children("td:nth-child(3)");
                var tdDoc = par.children("td:nth-child(4)");
                var tdQuantity = par.children("td:nth-child(5)");
                var tdFreq = par.children("td:nth-child(6)");
                var tdExp = par.children("td:nth-child(7)");
                var tdInstruction = par.children("td:nth-child(8)");
                var tdSaveButton = par.children("td:nth-child(9)");
                var tdDeleteButton = par.children("td:nth-child(10)");
                var tdBlank = par.children("td:nth-child(11)");

                tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
                tdNum.html("<input type='text' id='txtNum' value='"+tdNum.html()+"'/>");
                tdDIN.html("<input type='text' id='txtDIN' value='"+tdDIN.html()+"'/>");
                tdDoc.html("<input type='text' id='txtDoc' value='"+tdDoc.html()+"'/>");
                tdQuantity.html("<input type='text' id='txtQuantity' value='"+tdQuantity.html()+"'/>");
                tdFreq.html("<input type='text' id='txtFreq' value='"+tdFreq.html()+"'/>");
                tdExp.html("<input type='text' id='txtExp' value='"+tdExp.html()+"'/>");
                tdInstruction.html("<input type='text' id='txtInstruction' value='"+tdInstruction.html()+"'/>");


                //save row button
                var saveBtnHTML = "<input type='button' class='btn btn-success' id='btnSave' value='Save' ng-click='savePresc($event)'> ";
                saveButton = $compile(saveBtnHTML)($scope);
                tdSaveButton.html(saveButton);
                //delete row button
                var delBtnHTML = "<input type='button' class='btn btn-danger' id='btnDelete' value='Delete' ng-click='delPresc($event)'> ";
                var deleteButton = $compile(delBtnHTML)($scope);
                tdDeleteButton.html(deleteButton);

                tdBlank.html("<p></p>"); //to erase refill button
        }     

        $scope.delPresc = function($event) {
          console.log("delete prescription");
          var par = $($event.target).parent().parent(); //tr
          par.remove();
        }

        $scope.refill = function($event) {
            console.log("photon stuff");
        }

});
