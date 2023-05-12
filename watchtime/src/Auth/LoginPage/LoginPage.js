import React,{useState} from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import './loginPage.css'



export default function LoginPage() {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
      }) 
    
      const handleLogin = (e) =>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        console.log("loggeduser", loggeduser)
        // console.log( "input values",input.email, input.password,
        // "loggedIn User Values", loggeduser.email , loggeduser.password,
        // typeof(input.email, input.password),
        // typeof(loggeduser.email , loggeduser.password)
        // )
        if(
            input.email === loggeduser.email &&
            input.password === loggeduser.password
        ){
            console.log("user",input)
            localStorage.setItem("loggedin", true)
          navigate("/home");
        } else {
            
          alert("Invalid Email OR Password")
        }
      }
      return (
        <div>
             <CssVarsProvider>
          <main className="login-modal">
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
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body2">Sign in to continue.</Typography>
              </div>
    
              <form onSubmit={handleLogin}>
                
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
    
              <Button type="submit" sx={{ mt: 1 /* margin top */ }}>Log in</Button>
              </form>
              <Typography 
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Don't have an account? <span><Link to="/signin"> Sign In </Link></span>
              </Typography>
            </Sheet>
          </main>
        </CssVarsProvider>
        </div>
      )
}
