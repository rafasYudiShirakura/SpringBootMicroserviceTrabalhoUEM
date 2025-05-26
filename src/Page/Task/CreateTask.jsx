import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, Grid, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTask } from '../../ReduxToolKit/TaskSlice';
import { useDispatch } from 'react-redux';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline: 'none',
  boxShadow: 24,
  p: 4,
};
const tags = ["Angular", "React", "Vue", "JavaScript", "Python", "Java", "C++", "C#", "PHP", "Ruby", "Swift", "Go", "Kotlin", "Dart", "TypeScript", "HTML", "CSS"];

export default function CreateNewTaskForm({handleClose,open}) {

  const dispatch = useDispatch();
  const [formData,setFormData] = useState({
    title: "",
    image: "",
    description: "",
    tags: [],
    deadline: new Date(),
  });

  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleTagsChange = (event, value)=>{
    setSelectedTags(value);
  }

  const handleDeadlineChange = (date) => {
    setFormData({
      ...formData,
      deadline: date,

    })
  }

  const formateDate = (input) => {
    let{
      $y: year,
      $M: month,
      $D: day,
      $H: hour,
      $m: minute,
      $s: second,
      $ms: millisecond,
    } = input;

    const date = new Date(year, month, day, hour, minute, second, millisecond);

    const formatedDate = date.toISOString();

    return formatedDate;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {deadline} = formData;
    formData.deadline = formateDate(deadline);
    formData.tags = selectedTags;
    dispatch(createTask(formData));
    console.log("formData",formData,"deadline : ",formData.deadline);
    handleClose();
  }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <form onSubmit={handleSubmit} className="w-full">
            <Grid container spacing = {2} alignItems="center" >
              <Grid item xs={12} className="w-full">
                <TextField
                  label="Title"
                  fullWidth
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} className="w-full">
                <TextField
                  label="Image"
                  fullWidth
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                />
              </Grid> 
              <Grid item xs={12} className="w-full" >
                <TextField
                  label="Description"
                  fullWidth
                  multiline
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid items xs={12} className="w-full">
                <Autocomplete
                  multiple
                  id="multiple-limit-tags"
                  options={tags}
                  onChange={handleTagsChange}
                  getOptionLabel={(option) => option}
                  renderInput={(params) =><TextField
                    label="Tags"
                    fullWidth
                    {...params}
                  />}
                />
              </Grid>

              <Grid item xs={12} className="w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  
                  <DateTimePicker className="w-full" label="Deadline" 
                  onChange={handleDeadlineChange}
                  renderInput={(params) => <TextField {...params} />}
                  />
                  
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} className="w-full">
                <Button fullWidth
                className="customButton w-full"
                type="submit"
                sx={{padding:".9rem"}}>
                  Create
                </Button>
                  
              </Grid>

            </Grid>
          </form>
        </Box>
        
      </Modal>
    </div>
  );
}