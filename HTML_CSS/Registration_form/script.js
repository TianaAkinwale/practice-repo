/*let body = body.style.backgroundColor;
body = 'rgb(1, 1, 31)';
document.body.append(body)*/

let heading = document.createElement('h1');
            heading.style.fontSize = '34px';
            heading.textContent = 'Registration Form';
            heading.style.textAlign = 'center';
            heading.style.paddingTop = '40px';

let paragraph = document.createElement('p');
            paragraph.style.fontSize = 'larger';
            paragraph.textContent = 'Please fill out this form with the required information';
            paragraph.style.textAlign = 'center';
            paragraph.style.paddingTop = '20px';
            paragraph.style.paddingBottom = '40px';
            
document.body.append(heading, paragraph);

let form = document.createElement('form');
            form.style.marginLeft = 'auto';
            form.style.marginRight = 'auto';
            form.style.paddingLeft = '30px';
            form.style.paddingRight = '20px';
            form.style.maxWidth = '600px';
            form.style.fontSize = 'large';

document.body.append(form);

let label1 = document.createElement('label');
label1.id = 'firstName';
label1.innerHTML = 'Enter Your First Name:'
form.appendChild(label1);

//document.body.appendChild(label);
//let label;
/*for (let i = 0; i < 11; i++) {
    label = document.createElement('label');
    
    form.appendChild(label);
}*/