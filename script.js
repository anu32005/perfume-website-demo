const perfumes=[
{name:"Rose Bloom",note:"floral",img:"https://images.unsplash.com/photo-1541643600914-78b084683601"},
{name:"Forest Wood",note:"woody",img:"https://images.unsplash.com/photo-1595425964071-6a1b6c4d31b7"},
{name:"Citrus Fresh",note:"citrus",img:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"},
{name:"Vanilla Sweet",note:"sweet",img:"https://images.unsplash.com/photo-1615631648086-325025c9e51e"}
]

let cart=0
let wish=0

function render(list){
document.getElementById("products").innerHTML=
list.map(p=>`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.note}</p>
<button class="add" onclick="addCart()">Add</button>
</div>
`).join("")
}

function filterNote(note){
if(note==='all') render(perfumes)
else render(perfumes.filter(p=>p.note===note))
}

render(perfumes)
