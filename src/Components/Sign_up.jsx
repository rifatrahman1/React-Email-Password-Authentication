import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../Components/Sign.css'
import { auth } from '../Firebase/Firebase';
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


const Sign_up = () => {
    const [error, set_error] = useState('');
    const [success, set_success] = useState(false);
    const [show, set_show] = useState(false);

    const handle_signup = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        // create password authentication
        set_error('')
        set_success(false);
        // if (password < 6) {
        //     set_error('Password should be 6 cheracter or longer..')
        //     return;
        // } 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(password)) {
            set_error('❌Password must include at least 1 uppercase, 1 lowercase, 1 number, 1 special character and be at least 6 characters long.')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                set_success(true);
            })
            .catch(error => {
                console.log('ERROR', error.message);
                set_error('This is email already use..');
                set_success(false);
            })

    }
    return (
        <div className="login">
            <h1 className='mb-4'>Sign Up</h1>
            <form onSubmit={handle_signup} method="post" className=''>
                <input type="email" name="email" placeholder="Email" required="required" />
                <input type={show ? 'text' : 'password'} name="password" placeholder="Password" required="required" />
                <button onClick={() => set_show(!show)} className='cursor-pointer absolute right-3 top-27'>
                    {
                        show ? <FaRegEye /> : <FaRegEyeSlash />
                    }
                </button>
                <div className='form-control'>
                    <label className='label justify-start cursor-pointer'>
                        <input type="checkbox" name="terms" className='checkbox' id="" />
                        <span className='lable-text ml-2'>Accept Our Terms and Condition..</span>
                    </label>
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-large">Sign Up</button>
            </form>
            {
                error && <p className='text-red-500 text-xl mt-2'>{error}</p>
            }
            {
                success && <p className='text-green-500 text-xl mt-2'>Sign up successfull..</p>
            }
        </div>
    );
};

export default Sign_up;