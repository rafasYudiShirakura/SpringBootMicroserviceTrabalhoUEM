import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../ReduxToolKit/AuthSlice";

const Signup = ({togglePanel}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    console.log("loginForm", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">Cadastro</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nome Completo"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Entre com seu nome completo..."
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Entre com seu email..."
        />
        <TextField
          fullWidth
          label="Senha"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Entre com sua senha..."
        />
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cargo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.role}
          label="Cargo"
          name="role"
          onChange={handleChange}
        >
          <MenuItem value={"ROLE_CUSTOMER"}>USUÁRIO</MenuItem>
          <MenuItem value={"ROLE_ADMIN"}>ADMIN</MenuItem>
          
        </Select>
      </FormControl>
        <div>
          <Button
            fullWidth
            className="customButton"
            type="submit"
            sx={{ padding: ".9rem" }}
          >
            Registrar-se
          </Button>
        </div>
      </form>
    
        <div className="mt-5 flex items-center gap-2 py-5 justify-center">
            <span>Já possui conta?</span>
            <Button onClick={togglePanel}>Entrar</Button>
        </div>

    </div>


  );
};

export default Signup;
