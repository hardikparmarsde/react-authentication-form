import { emailValidationRegex } from "@/utils/validations";
import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    vEmail: yup
        .string()
        .trim()
        .required("Email address is required")
        .matches(emailValidationRegex, "Please enter a valid email address")
        .min(2, "Email address must be at least 2 characters long")
        .max(70, "Email address must not exceed 70 characters"),
    vPassword: yup
        .string()
        .trim()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long")
        .max(15, "Password must not exceed 15 characters"),
});


export const ResetPasswordSchema = yup.object().shape({
    password: yup.string()
        .trim()
        .required("New Password is required")
        .matches(/^\S*$/, "New password cannot contain spaces")
        .max(15, "New Password must not exceed 15 characters"),
    confirmpassword: yup
        .string()
        .trim()
        .matches(/^\S*$/, "Password cannot contain spaces")
        .required("Confirm password is required")
        .min(6, "Confirm Password must be at least 6 characters long")
        .max(15, "Confirm Password must not exceed 15 characters")
        .oneOf([yup.ref("password"), null], "New password and Confirm password don't match"),
})

export const ForgotPasswordSchema = yup.object().shape({
    vEmail: yup
        .string()
        .trim()
        .required("Email address is required")
        .matches(emailValidationRegex, "Please enter a valid email address")
        .min(2, "Email address must be at least 2 characters long")
        .max(70, "Email address must not exceed 70 characters"),
})