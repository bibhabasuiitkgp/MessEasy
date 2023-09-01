import React from 'react'

export default function Card() {
  return (
    <div><div>
    <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
<img src="https://media.istockphoto.com/id/1413566368/photo/indian-food-aloo-paratha-or-indian-potato-stuffed-flatbread-served-with-butter-pickle-and.webp?b=1&s=612x612&w=0&k=20&c=uxaqX26rwbvxD3KCR1mqwcX2UyjqQil0oivpfxQJhhs=" className="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Card title</h5>
<p className="card-text">you get kgps best food here.</p>
<div className='container w-100'> </div>
<select className='m-2 h-100  bg-success rounded'>
{
    Array.from(Array(6),(e,i)=>{
        return(
            <option key={i+1} value={i+1}>{i+1}</option>
        )
    })
}
</select>

<select className='m-2 h-100 bg-success rounded'>
<option value="half">Half</option>
<option value="full">full</option>
</select>
<div className='d-inline h-100 fs-5'>
total price
</div>
</div>
</div>

  
    </div></div>
  )
}
