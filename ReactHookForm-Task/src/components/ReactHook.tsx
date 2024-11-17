import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  name: string;
  surname: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
}

function ReactHook() {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return ( 
    <Box sx={{
        background: "linear-gradient(135deg, #6b73ff 30%, #000dff 90%)", 
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
    }} >

         <Box sx={{ maxWidth: 400, margin: "auto", mt: 5,  backgroundColor: "#ffffff", 
          borderRadius: 3,
          boxShadow: 3, 
          width: "100%",
          padding: 4, }}>

        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#3f51b5" }}>
          React Hook Form
        </Typography>
    

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <Box mb={2}>
        <TextField variant="outlined" fullWidth label="Name" error={!!errors.name}  {...register("name", {
            required:"Enter Your Name"
        })}/>
        {errors.name && <Typography color="error">{errors.name.message}</Typography>}
        </Box>


        {/* Surname */}
        <Box mb={2}>
            <TextField variant="outlined" fullWidth label="Surname" error={!!errors.surname}  {...register("surname",{
                required:"Enter your Surname"
            })} />
            {errors.surname && <Typography color="error">{errors.surname.message}</Typography>}
        </Box>


        {/* Age */}
        <Box mb={2}>
            <TextField variant="outlined" fullWidth label="Age" error={!!errors.age}  {...register("age",{
                required:"Enter your Age",
                max:{
                    value:100,
                    message:"Maximum age is 90"
                },
                min:{
                    value:18,
                    message:"Minimum age is 18"
                }
            })} />
            {errors.age && <Typography color="error" >{errors.age.message}</Typography>}
        </Box>


        {/* Email */}
        <Box mb={2}>
            <TextField variant="outlined" type="email" fullWidth label="Email" error={!!errors.email} {...register("email",{
                required:"Enter your Email",
                pattern:{
                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
                    message:"Enter your email correctly...",
                }
            })} />
            {errors.email && <Typography color="error">{errors.email.message}</Typography>}
        </Box>


        {/* Password */}
        <Box mb={2}>
            <TextField variant="outlined" fullWidth label="Password" type="password" error={!!errors.password}  {...register("password",{
                required:"Enter your Password",
                minLength:{
                    value:6,
                    message:"Password must be at least 6 characters long."
                },
                pattern:{
                    value:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:"It must consist of at least one number, one uppercase letter, one lowercase letter and one symbol",
                }
            })} />
            {errors.password && <Typography color="error">{errors.password.message}</Typography>}
        </Box>


        {/*ConfirmPassword  */}
        <Box mb={2}>
            <TextField variant="outlined" fullWidth label="Confirm Password" type="password" error={!!errors.confirmPassword}  {...register("confirmPassword",{
                required:"Enter your Password",
                validate:(value)=>value==watch("password") ||  "Your Password is not the same"
            })} />
            {errors.confirmPassword && <Typography color="error">{errors.confirmPassword.message}</Typography>}
        </Box>


        {/* Button's */}
        <Box mb={2} sx={{ textAlign: "center" }}>
            <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
              Submit
            </Button>
            <Button type="button" variant="contained" color="warning" onClick={() => reset()}>
              Reset
            </Button>
          </Box>
      </form>
    </Box>
    </Box>
   
  );
}

export default ReactHook;
