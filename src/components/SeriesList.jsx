import React from 'react'
import Series from './Series'

function SeriesList() {
    const genere = [
        {
            id: 35,
            name: "Series"
        }
    ]
    return (
        <div>
            {genere.map((item) => (
                <div className="p-8 px-8 md:px-16" key={item.id}>
                    <h1 className="text-[20px] font-bold">{item.name}</h1>
                    <Series genereId={item.id} />
                </div>
            ))}
        </div>
    )
}

export default SeriesList
