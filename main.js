const cards=document.getElementById("cards");
const btn=document.getElementById("getElements");
const BaseLink="https://jsonplaceholder.typicode.com"


const getdata=()=>{
  const fetchdata=fetch(`${BaseLink}/users`)
  .then((x)=>{x.json})
  .then((data)=>{
    data?.map((item)=>{
      cards.innerHTML+=
    `<div class="card"">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">ID=${item.username}</h6>
        <p class="card-text">${item.address}</p>
      </div>
    </div>`
    })
  })

  return fetchdata
}


btn.addEventListener('click',getdata)
