import { Auth } from 'aws-amplify';
import { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { eventBusService } from '../services/event-bus.service';
import { userService } from '../services/user.service';
import { RootState } from '../store'

export const ConfrimSignin = () => {

    const history = useHistory()
    const loggedInUser: any = useSelector((state: RootState) => state.userModule.loggedInUser)

    const [confrim, handleChange] = useForm({
        code: '',
    })

    const onConfrimSubmit = async (ev: FormEvent<HTMLFormElement> | null = null) => {
        try {
            if (ev) ev.preventDefault();
            await userService.confirmSignUp(loggedInUser.username, confrim.code)
            eventBusService.showSuccessMsg(`Verfication Complete !`)
            history.push('/todo-app')
        } catch (error) {
            console.log('error confrim user ', error);
            eventBusService.showErrorMsg(`Incorrect Verfication Code!`)
        }
    }

    const resendConfirmationCode = async () => {
        try {
            await userService.resendCode(loggedInUser.username)
            eventBusService.showSuccessMsg(`Sent! check your Email! !`)
            console.log('code resent successfully');
        } catch (err) {
            eventBusService.showErrorMsg(`Canot resend code!`)
            console.log('error resending code: ', err);
        }
    }

    const { code } = confrim

    return (
        <section className="confrim-signin tac">
            <h1>Confrim your account!</h1>
            <div className="check-email" >
                <h3>Check youe email and enter the verfication code!</h3>
            </div>
            <form className="login-signup-form flex direction-col align-center justify-center" onSubmit={(ev) => onConfrimSubmit(ev)}>
                <input
                    type="text"
                    name="code"
                    value={code}
                    placeholder="Confirmation Code"
                    onChange={handleChange}
                    required
                />
                <button>Confrim!</button>
            </form>
            <button onClick={resendConfirmationCode}>Send code again!</button>
        </section>
    )
}
