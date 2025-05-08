import React from 'react'

const TaskCard = () => {
  return (
    <div>
       <div className='card lg:flex justify-between'>
            <div className='lg:flex gap-5 items-center space-y-2 w-[90%]
            lg:w-[70%]'>
                <div className=''>
                    <img className='lg:w-[7rem] lg:h-[rem] object-cover' 
                    src="https://static-cse.canva.com/blob/
                    612749/trabalhosacademicos.jpg" alt="" />
                </div>

                <div className='space-y-5'>
                    <div className='space-y-2'>
                        <h1 className='font-bold text-lg'>Trabalho Acadêmico</h1>
                        <p className='text-gray-500 text-sm'>realizar conforme as normas ABNT</p>
                    </div>
                    <div className='flex flex-wrap gap-2 items-center'>
                        {[1,1,1,1].map((item)=> <span className='py-1 px-5
                        rounded-full techStack'>
                            Angular
                        </span>)}
                    </div>
                </div>
            </div> 
        </div> 

    </div>
  )
}

export default TaskCard