app.controller('docController', function($scope, $compile) {
        $scope.doctors = [
                        {
                            name: 'Fernadette Deung',
                            clinic: 1765765,
                            phone: '123-4567-890',
                            address:'DoctorLand Rd, DoctorLand Province'
                        },
                        {
                            name: 'Fernadette Deung',
                            clinic: 1765765,
                            phone: '123-4567-890',
                            address:'DoctorLand Rd, DoctorLand Province'
                        },
                        {
                            name: 'tester test',
                            clinic: 1765765,
                            phone: '123-4567-890',
                            address:'DoctorLand Rd, DoctorLand Province'
                        }
                 ];

        $scope.addDoc = function($event){
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

                $scope.firstSave = function($event) {
                  console.log("first save");
                }

                $scope.saveDoc = function($event) {
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

                $scope.editDoc = function($event) {
                    console.log("edit doc");
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

        $scope.delDoc = function($event) {
          console.log("delete doc");
          var par = $($event.target).parent().parent(); //tr
          par.remove();
        }


});

/*app.directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
  };
});*/