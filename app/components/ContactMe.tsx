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
        <section id="contactme">
            <h2>Get in Touch</h2>
            <form className="contactMe-form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                    />
                </div>
                
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Your message"
                        required
                    ></textarea>
                </div>
                
                <button type="submit">
                    Send Message
                </button>
            </form>
        </section>
    );
}
