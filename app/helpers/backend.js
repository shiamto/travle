import { del, get, patch, post, postForm, put } from "./api";

export const sendOtp = (data) => post("/user/send-otp", data);
export const postRegister = (data) => post("/user/registration", data);
export const postLogin = (data) => post("/user/login", data);
export const postVerifyOtp = (data) => post("/user/verify-otp", data);
export const postResetPassword = (data) => post("/user/reset-password", data);
export const postChangePassword = (data) => post("/user/password", data);

export const fetchAllCountry = (data) => get("/countries", data);


export const postAdminLogin = (data) => post("/admin/login", data);
export const fetchUser = (data) => get("/admin/user-info", data);

export const fetchFiles = data => get('/admin/gallery', data)
export const postFiles = (data) => post('/admin/upload-image', data)

export const postGallery = (data) => post('/admin/gallery-page', data)

export const fetchTourList = (data) => get('/admin/tour-list', data)

export const fetchLandingPage = (data) => get('landing-page', data)
export const fetchAboutPage = (data) => get('/about-page', data)

export const postAdminAbout = (data) => postForm('admin/about-page', data)
export const postAdminLandingPage = (data) => postForm('admin/landing-page', data)