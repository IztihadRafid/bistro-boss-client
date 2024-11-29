import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    const {createUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data =>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.PhotoURL)
            .then(()=>{
                console.log("user updated");
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created Successfuly",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                  
            })
            .catch(error=>{
                console.log(error);
            })
        })
    }
    
    return (
        <>
        <Helmet>
            <title>Bistro Boss | Sign Up</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User name</span>
                            </label>
                            <input type="text" name="name" {...register("name",{ required: true })} placeholder="name" className="input input-bordered"  />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL",{ required: true })} placeholder="photoURL" className="input input-bordered"  />
                            {errors.PhotoURL && <span className="text-red-500">Photo Url is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered"  />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                { required: true,maxLength:15,minLength:4,pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,14}$/
                            })} name="password" placeholder="password" className="input input-bordered"  />
                            {errors.password?.type==="required" && <span className="text-red-500">password is required</span>}
                            {errors.password?.type==="minLength" && <span className="text-red-500">password must be 6 characters</span>}
                            {errors.password?.type==="maxLength" && <span className="Stext-red-500">password must be less than 10 characters</span>}
                            {errors.password?.type==="pattern" && <span className="text-red-500">password must have one uppercase, one lowercase, one special character, and one number</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary"/>
                        </div>
                        
                    </form>
                    <p className="text-center p-1 my-1"><small>Already Have an account? <Link className='text-blue-500 text-lg' to='/login'>Login</Link></small></p>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default SignUp;