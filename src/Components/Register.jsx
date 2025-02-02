import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const Register = () => {
    const handle_submit = (event) => {
        event.preventDefault();
        const email = evet.target.email.value;
        const password = evet.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log('ERROR', error);
        })
    }
    return (
        <div>
            <div className="text-3xl">This is Register...</div>

            <form onSubmit={handle_submit}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-accent mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;