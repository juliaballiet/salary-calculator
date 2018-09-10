console.log('js');

$(readyNow);

function readyNow() {
    $('#submitButton').on('click', buttonClicked)
    $('#employees').on('click', '.deleteEmployee', deleteEmployee)
} //end readyNow

let totalMonthlyExpenses = 0;

let employeeArray = [];

class Employee{
    constuctor(firstName, lastName, id, title, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.salary = salary;
    } //end constructor
} //end Employee class

function buttonClicked() {
    let firstName = $('#firstNameInput').val()
    let lastName = $('#lastNameInput').val()
    let id = $('#idInput').val()
    let title = $('#titleInput').val()
    let salary = $('#salaryInput').val()

    employeeArray.push(new Employee(firstName, lastName, id, title, salary));

    console.log('button clicked');

    $('#employeesList').append(`
    <tr id="${salary}">
        <td> ${firstName} </td>
        <td> ${lastName} </td>
        <td> ${id} </td>
        <td> ${title} </td>
        <td> ${salary} </td>
        <td> <button class="deleteEmployee">delete</button> </td>
    </tr>
    `)

    salaryValue = '#' + salary;

    $(salaryValue).data("salary", salary);

    totalMonthlyExpenses = totalMonthlyExpenses + (salary / 12)

    $('#expenses').html('$' + Math.round(100 * totalMonthlyExpenses)/100)

    if (totalMonthlyExpenses > 20000) {
        $('#totalExpenses').css('background', 'red')
    }

    clearInputs();

} //end buttonClicked

function deleteEmployee() {
    console.log('delete clicked');

    console.log($(this).parent().parent().data())

    thisEmployeeExpenses = $(this).parent().parent().data("salary") / 12

    console.log(thisEmployeeExpenses)

    totalMonthlyExpenses = totalMonthlyExpenses - thisEmployeeExpenses;

    $('#expenses').html('$' + Math.round(100 * totalMonthlyExpenses)/100)

    if (totalMonthlyExpenses <= 20000) {
        $('#totalExpenses').css('background', '#80331B')
    }

    $(this).parent().parent().remove();
} //end deleteEmployee

function clearInputs() {
    $('#firstNameInput').val('')
    $('#lastNameInput').val('')
    $('#idInput').val('')
    $('#titleInput').val('')
    $('#salaryInput').val('')
} //end clearInputs