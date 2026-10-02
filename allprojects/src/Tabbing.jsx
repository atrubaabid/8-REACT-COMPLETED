import React, { useState } from 'react'

export default function Tabbing() {

    const tabs = [
        {
            title: "Vision",
            body: "Vision Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam mollitia consequatur. Itaque provident dolorem expedita iste explicabo quaerat obcaecati laborum perspiciatis sit sequi? Iste iure quibusdam assumenda eveniet velit aut similique animi."
        },
        {
            title: "Mission",
            body: "Mission Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam mollitia consequatur. Itaque provident dolorem expedita iste explicabo quaerat obcaecati laborum perspiciatis sit sequi? Iste iure quibusdam assumenda eveniet velit aut similique animi."
        },
        {
            title: "Support",
            body: "Support Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam mollitia consequatur. Itaque provident dolorem expedita iste explicabo quaerat obcaecati laborum perspiciatis sit sequi? Iste iure quibusdam assumenda eveniet velit aut similique animi."
        },
        {
            title: "About",
            body: " About Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam mollitia consequatur. Itaque provident dolorem expedita iste explicabo quaerat obcaecati laborum perspiciatis sit sequi? Iste iure quibusdam assumenda eveniet velit aut similique animi."
        },


    ]

    let [activetitle, setActivetitle] = useState(0)
    // let [activebody, setActivebody] = useState(tabs[0])

    let updated = (i) => {
        setActivetitle(i)
        // setActivebody(tabs[i])

    }
    return (
        <div className='max-w-[1270px] bg-orange-400 p-6 mx-auto mt-3'>
            <h1 className='mb-6 font-bold'>29. Create Tabbing | PROJECT</h1>


            <div>

                <ul className='flex gap-3 items-center'>
                    {tabs.map((item, i) => {
                        return (
                            <li><button onClick={() => updated(i)} className={`bg-yellow-400 py-[5px] px-[10px] rounded ${activetitle == i ? 'border-4 border-yellow-700 shadow-md' : ''}`}>{item.title}</button></li>

                        )

                    })}

                </ul>

                {/* <p className='text-left pt-4 ps-1'>{activebody.body}</p> */}

                <p className='text-left pt-4 ps-1'>{tabs[activetitle].body}</p>



            </div>

        </div>
    )
}
