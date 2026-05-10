let friends = []
let expenses = []




function addFriend(){


let friendName = document.getElementById("friendname").value


if(friendName === "")
    
    {
        return
    }

    friends.push(friendName)



document.getElementById("friendname").value = ""
// reset input

 showFriends()
 showOptions()
showPeople()
}







function showFriends(){

    let friendList = document.getElementById("friendlist")

friendList.innerHTML = ""

friends.forEach(function(friend){

        friendList.innerHTML += `<div class="friend">${friend} </div> `
    })
}








function showOptions(){

let paidBy = document.getElementById("paidby")

paidBy.innerHTML = `<option value="">Paid By</option>`
// reset dropdown

friends.forEach(function(friend){

  paidBy.innerHTML += `<option value="${friend}">${friend}</option>`
    })
}








function showPeople(){

    let peopleBox = document.getElementById("peoplebox")

peopleBox.innerHTML = ""


friends.forEach(function(friend){

        peopleBox.innerHTML += `<label><input type="checkbox" value="${friend}">${friend}</label>`
    })
}









function addExpense(){

    let title = document.getElementById("expensetitle").value

    let amount = Number(

        document.getElementById("expenseamount").value
    )
    // string to numbers

 let paidBy = document.getElementById("paidby").value


// gets onlt checked box
 let checks = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    )

    let people = []

    checks.forEach(function(check){



        people.push(check.value)
    })


// checks required fields
    if(
    title === "" || amount === 0 || paidBy === "" || people.length === 0){
    
    
    
        return
    }







let expense = {

    title:title,
amount:amount,
    paidBy:paidBy,
    people:people
    }


expenses.push(expense)
// add expense into expense array






document.getElementById("expensetitle").value = ""


 document.getElementById("expenseamount").value = ""

    document.getElementById("paidby").value = ""





checks.forEach(function(check){

check.checked = false

})

// updates ui by calling functions 

showExpenses()

showBalance()
}










function showExpenses()
{

    let expenseList = document.getElementById("expenselist")

    expenseList.innerHTML = ""






 expenses.forEach(function(expense){

        expenseList.innerHTML += `
        
    <tr>
    <td>${expense.title}</td>


    <td>₹${expense.amount}</td>


    <td>${expense.paidBy}</td>

    <td>${expense.people.join(", ")}</td>
    </tr>`
    // converta array into string with comma and space
    })
}









function showBalance(){

    let balance = {}



friends.forEach(function(friend){

balance[friend] = 0
    })





 expenses.forEach(function(expense){

        let share = expense.amount / expense.people.length





 expense.people.forEach(function(person){
     balance[person] -= share
        })



        balance[expense.paidBy] += expense.amount
    })










    let balanceBox = document.getElementById("balancebox")

    balanceBox.innerHTML = ""



    friends.forEach(function(friend){

        let money = balance[friend].toFixed(2)
        // upto 2 decimal points

        let color = ""





     if(money >= 0){

            color = "plus"
     }

    else{

            color = "minus"
 }






        balanceBox.innerHTML += `<div class="balance ${color}"> ${friend} : ₹${money} </div>`
    })
}



// next save data locally 

