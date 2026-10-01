import React from 'react'
import { useState } from 'react';
import { questions } from './Data/question';

export default function Faqproject() {

    // USESTATE
    let [faqshow, setFaqshow] = useState(questions[0].id)

    // MAP
    let allitems = questions.map((item, i) => {
        let itemdetail = {
            item,
            faqshow,
            setFaqshow
        }
        return (
            <Items itemdetail={itemdetail} />
        )
    })

    return (
        <div className='max-w-[1270px] bg-orange-500 p-6 mx-auto mt-3'>
            <h1 className='mb-6 font-bold'>25. Create FAQ with Props Drilling | PROJECT</h1>

            <div>
                {/* UPDATED MAP SHOW ON THE BROWSER */}
                {allitems}
            </div>


        </div>
    )
}




// Items
function Items({ itemdetail }) {

    let { item, faqshow, setFaqshow } = itemdetail;

    return (
        <div className='mb-3'>

            <h3 className='bg-yellow-400 text-left ps-[20px] font-bold  py-2 cursor-pointer' onClick={() => setFaqshow(item.id)}>{item.id} {item.title}</h3>

            <p className={`ps-[20px] text-left border-[5px] border-yellow-400 duration-[0.5s] transition-all  overflow-hidden ${faqshow == item.id ? 'h-auto opacity-100 translate-y-0 py-3' : 'h-0 translate-y-[-40px] opacity-0 '}`}>{item.body}</p>

        </div>
    )
}
