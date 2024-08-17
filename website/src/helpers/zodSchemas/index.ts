import { z } from "zod";

export const RegisterSchema = z.object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email().min(1, "Please enter a valid email"),
    mobile: z.number().min(10, "Please enter a valid mobile number"),
    gender: z.string().min(1, "Please select a gender"),
    purpose: z.string().min(1, "Please select a purpose"),
})