
console.log("Hello there world!")

//.fetch('URL')
const res = fetch('https://catfact.ninja/fact')
.then((res) => {return res.json()})
.then((data) => {console.log(`Simple Fetch- `, data)})

const getCatFactFetch = async () => {
    const resp = await fetch('https://catfact.ninja/fact');
    const dat = await resp.json();
    console.log(`Async / await / fetch -`, dat);
    return dat
}
getCatFactFetch()

// EXAMPLE FOR POST/PUT/DELETE ROUTES/ headers, etc.
// const getCatFactFetch = async () => {
//     const resp = await fetch('https://catfact.ninja/fact', {
//         method : 'POST',
//         body : {},
//         headers : {}
//     });
//     const dat = await resp.json();
//     console.log(`Async / await / fetch -`, dat);
//     return dat
// }
// getCatFactFetch()

let getData = async () => {
    let response = await axios.get('https://catfact.ninja/fact');
    if (response.status == 200){
        console.log('Async / await / Axios', response.data)
        return response.data
    }
    return 'API call is not working!'
}
getData()

let loadData = async () => {
    let data = await getData();
    console.log(data);
    let new_row = `<tr><td scope='row'>${data.fact}</td></tr>`;
    document.getElementById("catFactbody").insertAdjacentHTML('afterbegin', new_row);
}

let clearData = () => {
    document.getElementById('catFactbody').innerHTML='';
}

let form = document.querySelector('#f1Form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let season = event.path[0][0].value
    console.log(season);
    loadF1(season);
    form.reset();
})

let getF1 = async (season)=> {
    try {
        let response =  await axios.get(`https://ergast.com/api/f1/${season}/3.json`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
getF1('2021')

let loadF1 = async (season) => {
    let data = await getF1(season);
    console.log(data);
    let new_rows = `<tr><td scope='row'>${data.MRData.RaceTable.Races[0].raceName}</td></tr>`;
    document.getElementById('f1tbody').insertAdjacentHTML('afterbegin', new_rows);
}


