import { cn } from '@/lib/cn'
import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Heading, HeadingContentContainer, MainContentContainer, TopCornorBox, BottomCornorBox } from '@/components/Common/index'

import { questionSchema } from "@/schema/question.schema";
import type { QuestionFormData } from "@/schema/question.schema";

import toast from 'react-hot-toast'


const acceskey = import.meta.env.VITE_WEB3FORMS_KEY;

export const AskQuestionForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<QuestionFormData>({
        resolver: zodResolver(questionSchema),
    });

    const onSubmit = async (data: QuestionFormData) => {



        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: acceskey,
                ...data,
            }),
        });

        const result = await response.json();

        if (result.success) {
            toast.success('Successfully Sent')
            reset();
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <MainContentContainer className={cn("border-t border-x border-border-default relative mt-1")}>

            <div>
                <HeadingContentContainer>
                    <Heading heading="Connect With Us" paragraph="Connect with Creative Bugs Media to craft visually compelling content designed to inspire, engage, and elevate your brand." />
                </HeadingContentContainer>
            </div>

            <div className={cn("pb-20 px-4",)}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-xl mx-auto space-y-6"
                >
                    {/* Name */}
                    <div>
                        <label className={cn("block text-sm", "card-md:text-sm", "card-lg:text-base")}>Name</label>
                        <input
                            {...register("name")}
                            type="text"
                            className={cn("w-full border border-border-default rounded-sm px-3 py-2 mt-1")}
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <p className="text-icon-heart text-xs mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className={cn("block text-sm", "card-md:text-sm", "card-lg:text-base")}>Email</label>
                        <input
                            {...register("email")}
                            type="email"
                            className="w-full border border-border-default rounded-sm px-3 py-2 mt-1"
                            placeholder="your@email.com"
                        />
                        {errors.email && (
                            <p className="text-icon-heart text-xs mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Subject */}
                    <div>
                        <label className={cn("block text-sm", "card-md:text-sm", "card-lg:text-base")}>Subject</label>
                        <input
                            {...register("subject")}
                            type="text"
                            className="w-full border border-border-default rounded-md px-3 py-2 mt-1"
                            placeholder="Project subject"
                        />
                        {errors.subject && (
                            <p className="text-icon-heart text-xs mt-1">
                                {errors.subject.message}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className={cn("block text-sm", "card-md:text-sm", "card-lg:text-base")}>Message</label>
                        <textarea
                            {...register("message")}
                            rows={5}
                            className="w-full border border-border-default rounded-md px-3 py-2 mt-1"
                            placeholder="Write your question..."
                        />
                        {errors.message && (
                            <p className="text-icon-heart text-xs mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
                    >
                        {isSubmitting ? "Sending..." : "Send Question"}
                    </button>
                </form>
            </div>

            <TopCornorBox />
            <BottomCornorBox />
        </MainContentContainer>
    )
}
