import Link from "next/link";
import Image from "next/image";
import classes from '../auth.module.scss';

function Login(){
    return(
        <div className={classes.container}>
            <Image width={32} height={25.6} src="/assets/logo.svg" alt="logo" />
            <div className={classes.login}>
                <h1 className={classes.title}>Login</h1>
                <form name="login">
                    <fieldset className={classes.inputs}>
                        <label className={classes["input-container"]} htmlFor="email">
                            <input className={classes.input} name="text" type="email" placeholder="Email address" required />
                        </label>
                        <label className={classes["input-container"]} htmlFor="password">
                            <input className={classes.input} name="password" type="password" placeholder="Password" required />
                        </label>
                    </fieldset>
                    <button type="submit" className={classes.button}>Login to your account</button>
                </form>
                <div className={classes.additional}>Don’t have an account? <Link href='/sign-up' className={classes.link}>
                Sign Up</Link></div>
            </div>
        </div>
    )
}

export default Login;