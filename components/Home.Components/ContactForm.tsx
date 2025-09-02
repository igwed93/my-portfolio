"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactSchema } from "@/lib/validations/contactSchema";
import { useState } from "react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactSchema) => {
        try {
            setIsSubmitting(true);
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send message");

            alert("Message sent successfully ✅");
        } catch (error) {
            alert("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
            <div>
                <label className="block text-sm font-medium p-2">Name</label>
                <input
                type="text"
                {...register("name")}
                className="w-full rounded-md border p-2"
                />
                {errors.name && <p className="text-red-500 text-sm p-1">{errors.name.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium p-2">Email</label>
                <input
                type="email"
                {...register("email")}
                className="w-full rounded-md border p-2"
                />
                {errors.email && <p className="text-red-500 text-sm p-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium p-2">Message</label>
                <textarea
                {...register("message")}
                className="w-full rounded-md border p-2"
                rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm p-1">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-[#C1F025] text-black font-semibold rounded-md"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
  );
}