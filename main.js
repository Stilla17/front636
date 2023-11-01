let row = document.querySelectorAll('.row')
let title = document.querySelector('#title')
let content = document.querySelector('#content')
let button = document.querySelector('.btn')
let container = document.querySelector('.container')


container.addEventListener('click', function (e) {
    if (e.target.classList.contains('row')) {
        e.target.nextElementSibling.classList.toggle('active');
    }
});

button.addEventListener('click', function (e) {
    e.preventDefault();

    container.innerHTML += `<div class="box">
        <div class="row">
            <h1>${title.value}</h1>
            <p>></p>
        </div>
        <div class="overhidden">
            <p>${content.value}</p>
        </div>
    </div>`;
});


for (let i = 0; i < row.length; i++) {
    row[i].addEventListener('click', function activeToggle(e) {
        row[i].nextElementSibling.classList.toggle('active')
    })
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    activeToggle()

    container.innerHTML += `<div class="box">
    <div class="row">
        <h1>${title.value}</h1>
        <p>></p>
    </div>
    <div class="overhidden">
        <p>${content.value}</p>
    </div>
</div>`
})


let ul = document.querySelectorAll('li')

for (let i = 0; i < ul.length; i++) {
    ul[i].addEventListener('click', (e) => {
        console.log(e.target.innerText);

    }, false)
}