import React, { use, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import "./Sidebar.css"
import Button from '@mui/material/Button';
import CreateNewTaskForm from '../Task/CreateTask';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../ReduxToolKit/AuthSlice';
import { useDispatch } from 'react-redux';

const menu =[
    {name:"Home",value:"Home", role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"DONE",value:"DONE", role:["ROLE_ADMIN","ROLE_CUSTOMER"]},
    {name:"ASSIGNED",value:"ASSIGNED", role:["ROLE_ADMIN"]},
    {name:"NOT ASSIGNED",value:"PENDING", role:["ROLE_ADMIN"]},
    {name:"Create New Task",value:"", role:["ROLE_ADMIN"]},
    {name:"Notification",value:"NOTIFICATION", role:["ROLE_CUSTOMER"]},
]



const role = "ROLE_ADMIN" // this should be dynamic, but for now it is hardcoded

const Sidebar = () => {
    const location = useLocation();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [activeMenu, setActiveMenu] = useState("DONE");

    const [openCreateTaskForm, setOpenCreateTaskForm] = useState(false);
  
    const handleCloseCreateTaskForm = () => {
      setOpenCreateTaskForm(false);
    };
  
    const handleOpenCreateTaskModel = () => {
      setOpenCreateTaskForm(true);
      
    };


    const handleMenuChange = (item) => {
        
        const updateParams = new URLSearchParams(location.search);

        if (item.name=="Create New Task") {
            handleOpenCreateTaskModel();
        }
        else if(item.name=="Home"){
            updateParams.delete("filter");
            const queryString = updateParams.toString();
            const updatedPath = queryString ? `${location.pathname}?${queryString}`
            : location.pathname;
            navigate(updatedPath);
        }
        else{
            updateParams.set("filter", item.value);
            navigate(`${location.pathname}?${updateParams.toString()}`);
        }

        
        setActiveMenu(item.name)
    }
    const handleLogout = () => {
        dispatch(logout());
        console.log("handle logout");
    }


    return (
    <><div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>

        <div className='space-y-5 h-full'>
            <div className='flex justify-center'>
                <Avatar
                sx={{width:"8rem",height:"8rem"}}
                className='border-2 border-[#c24dd0]'
                src='https://i.pinimg.com/736x/c4/36/4b/c4364b3482696855d3f5002680cfefad.jpg'></Avatar>
            </div>
            {
                menu.filter((item)=>item.role.includes(role))
                .map((item)=><p onClick={()=>handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer
                 ${activeMenu===item.name?"activeMenuItem":"menuItem"}`}>
                    {item.name}
                </p>)
            }
            <Button onClick={handleLogout} sx={{padding:".7rem",borderRadius:"2rem"}} fullWidth className='logoutButton'>
                logout
            </Button>

        </div>


    </div>
    <CreateNewTaskForm open={openCreateTaskForm} handleClose=
    {handleCloseCreateTaskForm}/>
    </>
    
        
            
        
)
}

export default Sidebar