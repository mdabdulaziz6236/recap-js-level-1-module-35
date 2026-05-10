/*  Explore Local storage 
    and
    session storage with JSON 
 */


const handleAddtoStorage=()=>{
    const name = document.getElementById('name').value 
    const id = document.getElementById('id').value 
    // localStorage.setItem("name",name)
    // localStorage.setItem("email",email)


    const data = {id, name}
/*  loacl storage a sora sori "" object or array "" rakha jay na */

// data k json.stringify korte hobe
    localStorage.setItem(name, JSON.stringify(data))
    // console.log(data)
}

/* get from local storage */

// outpu asbe json data
const storedData = localStorage.getItem('Kameko Everett') //{"id":"8","name":"Kameko Everett"}

const pureData = JSON.parse(storedData) // {id: '8', name: 'Kameko Everett'}

// console.log(pureData)


/*  Clear storage */

const handleClear=()=>{

    localStorage.clear()
}

