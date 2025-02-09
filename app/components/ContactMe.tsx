import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function ContactMe() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm();

    const [isFormValid, setIsFormValid] = useState(false);

    const watchFields = watch(["name", "email", "message"]);

    useEffect(() => {
        const allFieldsFilled = watchFields.every(field => field && field.trim() !== "");
        setIsFormValid(allFieldsFilled);
    }, [watchFields]);

    async function onSubmit(data: any) {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://formsubmit.co/rywyyn@gmail.com';

        Object.keys(data).forEach(key => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = data[key];
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        reset(); // Clear the form inputs after submission
    }

    return (
        <div className="pb-36 lg:flex flex-col gap-4 p-5 items-center justify-center">
            <p className="text-lg lg:text-3xl font-bold p-3 dark:text-[#dbd7d7]">
                Interested in a painting? Get in touch!
            </p>

            {/* FORM */}
            <form
                className="contactMe-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* NAME */}
                <input
                    className="border-dodgerblue focus:shadow-[0_0_8px_0_dodgerblue] focus:transform-scale-105 dark:bg-[#928f8f]"
                    type="text"
                    placeholder="Your Name"
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                    })}
                    name="name"
                />
                {errors.name && (
                    <p>
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Maximum length is 100 characters."}
                    </p>
                )}

                {/* EMAIL */}
                <input
                    className="border-dodgerblue focus:shadow-[0_0_8px_0_dodgerblue] focus:transform-scale-105 dark:bg-[#928f8f]"
                    type="email"
                    placeholder="Your Email"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    name="email"
                />
                {errors.email && (
                    <p>
                        {errors.email.type === "required" && "This field is required."}
                        {errors.email.type === "pattern" && "Invalid email address."}
                    </p>
                )}

                {/* PAINTING REFERENCE */}
                <input
                    className="border-dodgerblue focus:shadow-[0_0_8px_0_dodgerblue] focus:transform-scale-105 dark:bg-[#928f8f]"
                    type="text"
                    placeholder="Painting Name (if inquiring about specific piece)"
                    {...register("paintingReference")}
                    name="paintingReference"
                />

                {/* MESSAGE */}
                <textarea
                    className="border-dodgerblue focus:shadow-[0_0_8px_0_dodgerblue] focus:transform-scale-105 dark:bg-[#928f8f]"
                    rows={4}
                    placeholder="Your Message"
                    {...register("message", {
                        required: true,
                        maxLength: 2000,
                    })}
                    name="message"
                />
                {errors.message && (
                    <p>
                        {errors.message.type === "required" && "This field is required."}
                        {errors.message.type === "maxLength" && "Maximum length is 2000 characters."}
                    </p>
                )}

                {/* BUTTON */}
                <button type="submit" disabled={!isFormValid}>SEND INQUIRY</button>
            </form>
        </div>
    );
}
