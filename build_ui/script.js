import html from "./core"

const car =['BWM','Prosche','Mercesdes']
const isSuccess=true
const output=html`
    <h1>${isSuccess&&'Thành công'}</h1>
    <ul>
        ${cars.map(car=>`<li>${car}</li>`)}
    </ul>
`
console.log(output)