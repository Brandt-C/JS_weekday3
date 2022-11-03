console.log('Hi world!')

/*  Js and the DOM - (Document Object model)
    -We can use JS to add, remove, hide, manipulate elements from our html
    -Because this is client-side, none of it causes a refresh!
*/

// selecting elements from html-
// This is how we interact with the document object
console.log(document)
// We can access tags in the html through the getElement methods
//  ^^--preferred, but I'll also show querySelector
console.log(document.getElementsByTagName('h1')[0].id, typeof document.getElementsByTagName('h1')[0].id);
console.log(document.getElementById('text').innerHTML, typeof document.getElementById('text').innerHTML);
console.log(document.querySelector('#text'))

//  Modify text of h1
setTimeout(() => {document.getElementById('text').innerHTML = 'JS has changed the TEXT!'}, 5000);

// eventlisteners  and how we modify html with a js functions
// an eventlistener is a JS func that looks for behavior

let changeColor = () => {
    //select the tag we're gonna change
    let header = document.getElementById('text')
    !header.className ? header.className = 'color-change1' :
    header.className === 'color-change1' ? header.className = 'color-change2' :
    header.className = '';
    console.log(header.className);
}

//select the button

let color_button = document.getElementById('color-button');
console.log(color_button);
// add eventlistener
color_button.addEventListener('click', changeColor);

// adding a button w/ JS
 let new_button = document.createElement('button');
 new_button.innerHTML = "I'm Alive!!!";
 document.body.append(new_button);

 let addText = () => {
    let new_text = document.createElement('h3');
    new_text.innerHTML = 'These young padawans will make good jedi';
    new_text.className = 'color-change2';
    document.body.append(new_text);
    
 }

 new_button.addEventListener('mouseover', addText);

 // any selector that select multiple elements gives you an array
 // you can use it through the drop-downs to accomplish what you want
 console.log(document.getElementsByTagName('button'));

 let formSubmit = (event) => {
    // we don't want the page to refresh- JS will freak if that happens here
    event.preventDefault();
    console.log(event);

    let fname = event.path[0][0].value;
    let lname = event.path[0][1].value;
    console.log(`form data- ${fname} ${lname}`);

//Demo w/ query selectors
    // let fname = document.querySelector('#first-name').value;
    // let lname = document.querySelector('#last-name').value;
    // console.log(`form data- ${fname} ${lname}`);
    form.reset();
    let new_html = document.createElement('h3');
    new_html.innerHTML = fname + ' ' + lname
    new_html.className = 'color-change1'
    form.after(new_html);

 }

 let form = document.getElementById('name-form');
 console.log(form);
 form.addEventListener('submit', formSubmit)
