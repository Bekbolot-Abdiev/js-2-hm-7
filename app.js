const btns=document.querySelectorAll('button')
const list=document.querySelector('#list')
const dlt=document.querySelector('#delete')

const movies='https://api.sampleapis.com/movies/'

function getAnimation() {
    fetch(movies+'animation')
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        showMovies(data)
    })
}   
// getAnimation()

// CLASSIC 

function getClassic() {
    fetch(movies+'classic')
    .then(res=>res.json())
    .then(classic=>{
        console.log(classic);
        showMovies(classic)
    })
}
// getClassic()

// COMEDY

function getComedy() {
    fetch(movies+'comedy')
    .then(res=>res.json())
    .then(comedy=>{
        console.log(comedy);
        showMovies(comedy)
    })
}
// getComedy()

// DRAMA

function getDrama() {
    fetch(movies+'drama')
    .then(res=>res.json())
    .then(drama=>{
        console.log(drama);
        showMovies(drama)
    })
}
// getDrama() 

// HORROR

function getHorror() {
    fetch(movies+'horror')
    .then(res=>res.json())
    .then(horror=>{
        console.log(horror);
        showMovies(horror)
    })
}
// getHorror()

// FAMILY

function getFamily() {
    fetch(movies+'family')
    .then(res=>res.json())
    .then(family=>{
        console.log(family);
        showMovies(family)
    })
}
// getFamily()


// MYSTERY

function getMystery() {
    fetch(movies+'mystery')
    .then(res=>res.json())
    .then(mystery=>{
        console.log(mystery);
        showMovies(mystery)
    })
}
// getMystery()


// SCIFI-FANTASY

//  function getScifi() {
//     fetch(movies+'scifi-fantasy')
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//     })
//  }
//  getScifi()


// WESTERN 

function getWestern() {
    fetch(movies+'western')
    .then(res=>res.json())
    .then(western=>{
        console.log(western);
        showMovies(western)
    })
}
// getWestern()


btns[0].onclick=()=>{
    getAnimation()
}

btns[1].onclick=()=>{
    getClassic()
}

btns[2].onclick=()=>{
    getComedy()
}

btns[3].onclick=()=>{
    getDrama()
}

btns[4].onclick=()=>{
    getHorror()
}

btns[5].onclick=()=>{
    getFamily()
}

btns[6].onclick=()=>{
    getMystery()
}

btns[7].onclick=()=>{
    getWestern()
}

function showMovies(arr) {
    list.innerHTML=''
    for (const movi of arr) {
        list.innerHTML+=`
        <li>
           <img width='300px' src='${movi.posterURL}' />
           <h2>Фильмдин аталышы: ${movi.title}</h2>
        </li>
        `
    }
}

dlt.onclick=()=>{
    list.innerHTML=''
}