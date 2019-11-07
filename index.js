function standard(){
    card = document.getElementsByClassName('standard')[0]
    console.log(card)
    includes = document.createElement('div')
    includesHTML = `
    <h6>HR Management</h6>
    <h6>Payroll Management</h6>`
    includes.innerHTML = includesHTML
    card.append(includes) 
} 

function enterprise(){
    card = document.getElementsByClassName('enterprise')[0]
    console.log(card)
    includes = document.createElement('div')
    includesHTML = `
    <h6>HR Management</h6>
    <h6>Payroll Management</h6>
    <h6>Mobile App</h6>
    <h6>Transport Management</h6>
    <h6>Canteen Management</h6>
    <h6>Account Management</h6>`
    includes.innerHTML = includesHTML
    card.append(includes) 
} 

function ultimate(){
    card = document.getElementsByClassName('ultimate')[0]
    console.log(card)
    includes = document.createElement('div')
    includesHTML = `
    <h6>HR Management</h6>
    <h6>Payroll Management</h6>
    <h6>Mobile App</h6>
    <h6>Transport Management</h6>
    <h6>Canteen Management</h6>
    <h6>Account Management</h6>
    <h6>Library Management</h6>
    <h6>Inventory Management</h6>`
    includes.innerHTML = includesHTML
    card.append(includes) 
} 