import React from 'react'

function Productons() {
    const company = [
        {
            id: 1,
            name: "Disney",
            image: "https://logocreator.io/wp-content/uploads/2023/11/images-1.jpeg"
        },
        {
            id: 2,
            name: "Marvel",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Marvel_Studios_logo.svg/2560px-Marvel_Studios_logo.svg.png"
        },
        {
            id: 3,
            name: "Star Wars",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gq9lna9srq_oa7h11aAkd6sivVlib6-J-A_RTf48dtEEMGkgVbWhGbt5z1yiFhuhO6c&usqp=CAU"
        },
        {
            id: 4,
            name: "Sony",
            image:"https://www.newscaststudio.com/wp-content/uploads/2023/04/sony-logo-780x440.jpg"
        }
    
    ];
  return (
    <div className='flex justify-between gap-11 px-16 py-4'>
        {company.map((item) => (
            <img src={item.image} alt={item.name} key={item.id} className='w-[200px] transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-[2px] border-gray-200 rounded-md'/>
        ))}
    </div>
  )
}

export default Productons