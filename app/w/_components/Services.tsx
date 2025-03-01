import style from './style.module.css'

const Services = () => {
  return (
    <div className='flex justify-center items-center flex-col my-10'>
      <p className={`${style.text} mb-5`}>Services</p>
      <div className='flex flex-col gap-10 relative bg-[--dark-color] w-[70%]'>
        <div className='flex flex-col items-start bg-inherit z-[1]'>
            <div className='w-[70%] text-end border-white border-[0.5px] rounded-2xl flex justify-center items-center flex-col p-5'>
                <p className='text-[2.5rem]'>UI components</p>
                <p className='text-center'>Provide ready-to-use React UI Components for Front-end Developers</p>
            </div>
        </div>
        <div className='flex flex-col items-end bg-inherit z-[1]'>
            <div className='w-[70%] text-end border-white border-[0.5px] rounded-2xl flex justify-center items-center flex-col p-5'>
                <p className='text-[2.5rem]'>API Handling</p>
                <p className='text-center'>Provide ready-to-use API fetch, boosting asynchronous features of the web</p>
            </div>
        </div>
        <div className='flex flex-col items-start bg-inherit z-[1]'>
            <div className='w-[70%] text-end border-white border-[0.5px] rounded-2xl flex justify-center items-center flex-col p-5'>
                <p className='text-[2.5rem]'>Async State Management</p>
                <p className='text-center'>Provide better way to deal with async state management using Promise techniques</p>
            </div>
        </div>
        <div className='flex flex-col items-end bg-inherit z-[1]'>
            <div className='w-[70%] text-end border-white border-[0.5px] rounded-2xl flex justify-center items-center flex-col p-5'>
                <p className='text-[2.5rem]'>Usability</p>
                <p className='text-center'>Provide small detail implementations</p>
            </div>
        </div>
        <div className='absolute border-white border-[1px] w-[1px] h-full top-0 left-[50%] z-[0]'></div>
      </div>
    </div>
  )
}

export default Services
