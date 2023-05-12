import React,{useState} from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Navigate, useNavigate } from 'react-router-dom';
import './signIn.css'

function SignUp() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
      }) 

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login")
    };
      return (
        <div>
            <div>
                   <CssVarsProvider>
          <main className="auth-div">
            <Sheet
              sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
                backgroundcolor: '#49b933'
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body2">Sign in to continue.</Typography>
              </div>

              <form onSubmit={handleSubmit}>
                
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  // html input attribute
                  name="name"
                  value={input.name}
                  onChange={(e)=>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value
                    }
                  )}
                  type="name"
                  placeholder="Prathamesh"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  // html input attribute
                  name="email"
                  value={input.email}
                  onChange={(e)=>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value
                    }
                  )}
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  // html input attribute
                  name="password"
                  value={input.password}
                  onChange={(e)=>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value
                    }
                  )}
                  type="password"
                  placeholder="password"
                />
              </FormControl>
    
              <Button sx={{ mt: 1 /* margin top */ }} type="submit">Register</Button>
              </form>
            </Sheet>
          </main>
        </CssVarsProvider>
        </div>
        </div>
      )
    }

    export default SignUp;
    

