import React from 'react';  
import Avatar from '@mui/material/Avatar';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5
         lg:px-10, flex justify-between items-center'> 

            <p className='font-bold text-lg'>Gerenciador de Tarefas</p>

            <div className='flex items-center gap-5'>
                <p>rafasyudi</p>
                <Avatar src='https://i.pinimg.com/736x/87/9e/f6/879ef63c4974d0ef530292298016f0ea.jpg'>R</Avatar>
            </div>
        </div>
    )
}

export default Navbar;