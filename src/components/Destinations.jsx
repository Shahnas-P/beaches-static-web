import {borabora,borabora2 , maldives , maldives2 ,keywest} from '../assets'

const Destinations = ()=>{
    return (
        <section className="  max-w-[1240px] mx-auto py-16 px-4 text-center">
            <h1>All-Inclusive Resorts</h1>
            <p>On the Caribbean's Best Beaches</p>
            <div className='grid  grid-rows-none  md:grid-cols-5 py-4 gap-2 md:gap-4 '>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3  row-span-2' src={borabora} />
            <img className='w-full h-full object-cover' src={borabora2} />
            <img className='w-full h-full object-cover' src={maldives} />
            <img className='w-full h-full object-cover' src={maldives2} />
            <img className='w-full h-full object-cover' src={keywest} />

            </div>
        </section>
    )
}
export default Destinations; 