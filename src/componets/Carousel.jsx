import { useEffect, useState } from "react"
import axios from 'axios'
import apiUrl from '../apiUrl'
import Arrow from "./Arrow"

export default function Carousel() {

    const [categories, setCategories] = useState([])
    const [counter, setCounter] = useState(0)
    useEffect(
        () => {
            axios(apiUrl + '/categories')
                .then(res => {
                    //console.log(res)
                    setCategories(res.data.response)
                })
                .catch(err => console.log(err))
        },
        []
    )

    let next = () => (counter !== categories.length - 1) ? setCounter(counter + 1) : setCounter(0)
    let prev = () => (counter !== 0) ? setCounter(counter - 1) : setCounter(categories.length - 1)

    const d_left = "M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    const d_right = "M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    return (
        <div className='flex items-center  justify-evenly w-3/4 bg-gradient-to-r from-[#FF5722] to-[#F97316] rounded-lg mt-20 hidden px-5 my-9 md:w-11/12
        md:flex md:h-56'>
            <Arrow color={categories[counter]?.color} d={d_left} onClick={prev} />
            <img className='h-56 lg:h-64 self-end ' src={categories[counter]?.character_photo} />
            <img className='object-cover w-40 h-56 mx-10 mb-12 self-end' src={categories[counter]?.cover_photo} />
            <div className='text-l p-5 px-10 text-white
            sm:w-10/12
            xl:w-6/12'>
                <h3 className='text-2xl' style={{ color: categories[counter]?.color }}>{categories[counter]?.name.toUpperCase()}</h3>
                <p className='text-xs
                xl:text-sm' style={{ color: categories[counter]?.color }}>{categories[counter]?.description}</p>
            </div>
            <Arrow color={categories[counter]?.color} d={d_right} onClick={next} />
        </div>
    )
}