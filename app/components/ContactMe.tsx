import { useForm } from "react-hook-form";


export default function ContactMe() {

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    function onSubmit(e: any) {
        
    }

    return (

        <div className="flex flex-col gap-4 p-5 items-center justify-center">
            <p className="text-3xl font-bold p-3">Send me an email if you like what you see!</p>

            {/* FORM */}
            <form
                className="contactMe-form"
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
                action="https://formsubmit.co/tomer.vazana27@gmail.com"
            >
                {/* NAME */}
                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                    })}
                />
                {errors.name && (
                    <p>
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" &&
                            "Maximum lengtch is 100 characters."}
                    </p>
                )}

                {/* EMAIL */}
                <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />
                {errors.email && (
                    <p>
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                    </p>
                )}

                {/* MESSAGE */}
                <textarea
                    rows={4}
                    cols={50}
                    itemType="text"
                    placeholder="Message"
                    {...register("message", {
                        required: true,
                        maxLength: 2000,
                    })}
                />
                {errors.message && (
                    <p>
                        {errors.message.type === "required" &&
                            "This field is required."}
                        {errors.message.type === "maxLength" &&
                            "Maximum lengtch is 2000 characters."}
                    </p>
                )}

                {/* BUTTON */}
                <button type="submit">SUBMIT</button>
            </form>
            {/* <input className="portfolioInput" placeholder="name" type="name" />
                <input className="portfolioInput" placeholder="email" type="email" />
                <input className="portfolioInput" placeholder="message" type="text" /> */}
        </div>
    );

} 