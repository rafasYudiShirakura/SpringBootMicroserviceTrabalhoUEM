import React from 'react';  
import Avatar from '@mui/material/Avatar';
import "./Navbar.css"
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {task, auth} = useSelector(store=>store);
    
    return (
        <div className='w-full z-10 sticky top-0 py-3 px-5 lg:px-10 flex justify-between items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white'> 

            <p className='font-bold text-lg'>Gerenciador de Tarefas</p>

            <div className='flex items-center gap-5'>
                <p>{auth.user?.fullName}</p>
                <Avatar src='https://i.pinimg.com/736x/87/9e/f6/879ef63c4974d0ef530292298016f0ea.jpg'>R</Avatar>
            </div>
        </div>
    )
}

export default Navbar;
