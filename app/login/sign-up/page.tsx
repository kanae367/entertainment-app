import Link from "next/link";
import Image from "next/image";
import classes from '../login.module.scss';

function SignUp(){
    return(
         <div className={classes.container}>
            <Image width={32} height={25.6} src="/assets/logo.svg" alt="logo" />
            <div className={classes.login}>
                <h1 className={classes.title}>Sign Up</h1>
                <form name="login">
                    <fieldset className={classes.inputs}>
                        <label className={classes["input-container"]} htmlFor="email">
                            <input className={classes.input} name="text" type="email" placeholder="Email address" required />
                        </label>
                        <label className={classes["input-container"]} htmlFor="password">
                            <input className={classes.input} name="password" type="password" placeholder="Password" required />
                        </label>
                        <label className={classes["input-container"]} htmlFor="passwordRepeat">
                            <input className={classes.input} name="passwordRepeat" type="password" placeholder="Repeat Password" required />
                        </label>
                    </fieldset>
                    <button type="submit" className={classes.button}>Create an account</button>
                </form>
                <div className={classes.additional}>
                    Already have an account? <Link href='/login' className={classes.link}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;