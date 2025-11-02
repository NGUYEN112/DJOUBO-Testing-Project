import { useForm } from "react-hook-form"
import axios from "axios";
import CommonInput from "../../Components/Common/CommonInput";
import { IMAGES } from "../../Constants/images";
import CommonButton from "../../Components/Common/CommonButton";
import CommonPopup from "../../Components/Common/CommonPopup";
import { usePopup } from "../../Context/PopupContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export type LoginFormDataType = {
    username: string;
    password: string;
};

type User = {
    id: number;
    username: string;
    password: string;
};

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormDataType>();
    const { openPopup } = usePopup();
    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = async (values: LoginFormDataType) => {
        try {
            const { data } = await axios.get<User[]>(
                "http://localhost:5000/users",
                { params: { username: values.username } }
            );
            const user = data[0];

            if (!user) {
                openPopup("Username is not exist")
                // setError("username", { type: "manual", message: "Username is not exist" });
                return;
            }
            if (user.password !== values.password) {
                openPopup("Wrong password")
                // setError("password", { type: "manual", message: "Wrong password" });
                return;
            }
            login({ id: user.id, username: user.username });
            navigate("/driver-list");
        } catch (err) {
            setError("root", {
                type: "server",
                message: "Unable to connect to data. Please try again..",
            });
        }

    }
    return (
        <div className="login pad-y-67">
            <div className="container login-container">
                <div className="lgr1 login__image">
                    <picture>
                        <img src={IMAGES.LoginImg} alt="image" />
                    </picture>
                </div>
                <div className="lgr2 login__formInfo formInfo max-w500">
                    <div className="lgr2c1 formInfo__title mg-b-40">
                        <h4 className="font-32 lh-32 font-w700 mg-b-22">I already have a Djoubo account</h4>
                        <p>Log in using your existing account details.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="lgr2c2 formInfo__form form">
                        <div className="form__group">
                            <CommonInput
                                name="username"
                                iconImg="User02Icon"
                                groupClassName="mg-b-16 pad-x-24 pad-y-16 w-100"
                                inputClassName=" ln-24 font-18"
                                inputType="text"
                                placeholder="username"
                                register={register}
                                rules={{
                                    required: "Required field.",
                                }}
                                error={errors.username?.message}
                            />
                        </div>
                        <div className="form__group">
                            <CommonInput
                                name="password"
                                iconImg="LockIcon"
                                groupClassName="mg-b-16 pad-x-24 pad-y-16 w-100"
                                inputClassName="ln-24 font-18"
                                inputType="password"
                                placeholder="Password"
                                register={register}
                                rules={{
                                    required: "Required field.",
                                }}
                                error={errors.password?.message}
                            />
                        </div>
                        <a className="forgot-password" href="">forgot password</a>
                        <div className="form-checkbox mg-t-40 mg-b-32">
                            <input type="checkbox" id="remember" name="remember" className="mg-r-12" />
                            <label htmlFor="remember" className="font-16 lh-24 font-fm-se">Remember my username</label>
                        </div>
                        <CommonButton type="submit" text="Login" className="btn primary pad-x-47 w-100 mg-b-16" />
                        <div className="go-to-register">
                            New to Djoubo? <a href="/register">Create an account</a>
                        </div>
                    </form>
                </div>
            </div>
            <CommonPopup />
        </div>
    )
}