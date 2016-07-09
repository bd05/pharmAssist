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
                        }
                 ];

        $scope.addDoc = function(){
                          angular.element(document.querySelector('#tblData')).append(
                              "<tr>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='text'/></td>"+
                              "<td><input type='button' class='btn btn-info' id='btnSave' value='Save' ng-click='saveDoc($event)'></td>"+
                              "<td><p></p></td>"+
                              "</tr>");
                  }

                $scope.saveDoc = function(obj) {
                  console.log("save button does sth");
                      // var id = obj.target.attributes.id.value;
                      // console.log(id);
                      // var par = id.parentElement.parentElement; //tr
                      // console.log(par);
                      // var tdName = par.children("td:nth-child(1)");
                      // var tdClinic = par.children("td:nth-child(2)");
                      // var tdPhone = par.children("td:nth-child(3)");
                      // var tdAddress = par.children("td:nth-child(4)");
                      // var tdEditButton = par.children("td:nth-child(5)");
                      // var tdBlank = par.children("td:nth-child(6)");

                      // tdName.html(tdName.children("input[type=text]").val());
                      // tdClinic.html(tdClinic.children("input[type=text]").val());
                      // tdPhone.html(tdPhone.children("input[type=text]").val());
                      // tdAddress.html(tdAddress.children("input[type=text]").val());
                      // tdEditButton.html("<input type='button' class='btn btn-warning' id='btnEdit' value='Edit'>");
                      // tdBlank.html("<p></p>");
                  }

                $scope.editDoc = function($event) {
                    console.log("edit doc");
                    var par = $($event.target).parent().parent();
                    console.log(par);
                    var tdName = par.children("td:nth-child(1)");
                    var tdClinic = par.children("td:nth-child(2)");
                    var tdPhone = par.children("td:nth-child(3)");
                    var tdAddress = par.children("td:nth-child(4)");
                    var tdSaveButton = par.children("td:nth-child(5)");
                    var tdDeleteButton = par.children("td:nth-child(6)");

                  tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
                  tdClinic.html("<input type='text' id='txtClinic' value='"+tdClinic.html()+"'/>");
                  tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
                  tdAddress.html("<input type='text' id='txtAddress' value='"+tdAddress.html()+"'/>");
                  tdSaveButton.html("<input type='button' class='btn btn-success' id='btnSave' value='Save'>");
                  tdDeleteButton.html("<input type='button' class='btn btn-danger' id='btnDelete' value='Delete'>");

                  /*var divTemplate = "<input type='button' class='btn btn-danger' id='btnDelete' value='Delete'>";
                  var temp = $compile(divTemplate)($scope); */

                  /*var div = angular.element(document.querySelector('#btnDelete'));
                  console.log(div);
                  div.bind('click', $scope.delDoc());*/

                  var btnhtml = '<button type="button" ng-click="delDoc()">Click Me</button>';
                  var temp = $compile(btnhtml)($scope);
                  angular.element(document.querySelector('#tblData')).append(temp);

                }     

        $scope.delDoc = function() {
          console.log("delete doc");
        }


});

app.directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
  };
});