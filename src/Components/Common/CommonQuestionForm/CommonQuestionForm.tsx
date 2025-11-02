import { useForm } from "react-hook-form";
import axios from "axios";
import CommonButton from "../CommonButton";
import CommonInput from "../CommonInput";
import "./CommonQuestionForm.scss";

export type QuestionData = {
    userName: string;
    email: string;
    phoneNumber: string;
    message: string;
};

const NamePattern = /^[\p{L}\s'.-]{6,50}$/u;
const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PhonePattern = /^\+?[0-9]{7,15}$/;

export default function CommonQuestionForm({ onSubmitSuccess }: {
    onSubmitSuccess: (status: boolean, data?: QuestionData) => void;
}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<QuestionData>({ mode: "onBlur" });
    const onSubmit = async (data: QuestionData) => {
        try {
            await axios.post("http://localhost:5000/questions", {
                ...data,
                createdAt: new Date().toISOString(),
            });
            onSubmitSuccess(true, data);
            reset();
        } catch (e) {
            console.error(e);
            onSubmitSuccess(false);
        }
    };
    return (
        <div className="questionForm w-100  pad-y-84 radius-25">
            <div className="container pad-x-57">
                <div className="questionForm__title">
                    <span className="sideText font-upper font-fm-se font-14 lh-24">Une question ?</span>
                    <h3 className="font-48 lh-56 font-w500 max-w600"><span>Posez votre question et </span>nous serons heureux de vous aider !</h3>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="questionForm__form form max-w500">
                    <div className="form__group">
                        <CommonInput
                            name="userName"
                            groupClassName="mg-b-16 pad-x-24 pad-y-16 w-100"
                            iconImg="UserIcon"
                            inputType="text"
                            inputClassName="w-100 ln-24 font-18"
                            placeholder="Nom"
                            register={register}
                            rules={{
                                required: "Required field.",
                                pattern: { value: NamePattern, message: "Names must be 6 characters or longer and may contain spaces." }
                            }}
                            error={errors.userName?.message}
                        />
                    </div>
                    <div className="form__group">
                        <CommonInput
                            name="email"
                            groupClassName="mg-b-16 pad-x-24 pad-y-16 w-100"
                            iconImg="MailIcon"
                            inputType="email"
                            inputClassName="w-100 ln-24 font-18"
                            placeholder="Email"
                            register={register}
                            rules={{
                                required: "Required field.",
                                pattern: { value: EmailPattern, message: "Email is invalid" },
                            }}
                            error={errors.email?.message}
                        />
                    </div>
                    <div className="form__group">
                        <CommonInput
                            name="phoneNumber"
                            groupClassName="mg-b-16 pad-x-24 pad-y-16 w-100"
                            iconImg="PhoneIcon"
                            inputType="number"
                            inputClassName="w-100 ln-24 font-18"
                            placeholder="Téléphone (optionnel)"
                            register={register}
                            rules={{
                                required: "Required field.",
                                pattern: { value: PhonePattern, message: "Phone numbers are 7 to 15 digits long and can start with a +." }
                            }}
                            error={errors.phoneNumber?.message}
                        />
                    </div>
                    <div className="form__group textarea">
                        <CommonInput
                            name="message"
                            groupClassName="mg-b-25 pad-x-24 pad-y-16 w-100 radius-25"
                            iconImg="ChatIcon"
                            inputType="textarea"
                            inputClassName="w-100 ln-24 font-18"
                            placeholder="Message"
                            register={register}
                            rules={{
                                required: "Required field.",
                            }}
                            error={errors.message?.message}
                        />
                    </div>
                    <div className="form__group textarea">
                        <CommonButton className="primary w-100" type="submit" text="Envoyer" />
                    </div>
                </form>
            </div>

        </div>
    )
}