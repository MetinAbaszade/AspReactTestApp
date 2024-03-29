import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from 'swiper/core';

import { NavLink } from "react-router-dom";
import useLoginFormValidation from "../../Validations/useLoginFormValidation";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function LoginCard() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    SwiperCore.use([Navigation]);

    const { formik } = useLoginFormValidation(selectedImage);

    async function LoginButtonClick() {
        setLoading(true);
        await formik.submitForm();
        setLoading(false);
    }

    return (
        <form className="login-form" onSubmit={formik.handleSubmit}>
            <div className="w-96">
                <img className="mx-auto" src="/UserLogo2.jpeg" alt="UserLogo" />
               </div>
            <h2 className="text-center font-mono text-2xl">CarUniverse</h2>
            <div className="username mt-3">
                <input
                    type="userName"
                    name="userName"
                    spellCheck="false"
                    className="control"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                ></input>
                <label className={`text-danger ps-2 ${formik.errors.userName ? "visible" : ""}`}>
                    {formik.errors.userName}
                </label>
            </div>

            <div className={`${formik.errors.userName ? "w-100" : "w-100"}`}>
                <input
                    type="password"
                    name="password"
                    spellCheck="false"
                    className="control"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                <label className={`text-danger ps-2 ${formik.errors.password ? "visible" : ""}`}>
                    {formik.errors.password}
                </label>
            </div>

            <button className="control mt-4" type="submit" onClick={LoginButtonClick}>
                {loading ? (
                    <div className="spinner visible text-center m-auto"></div>
                ) : (
                    "Next"
                )}
            </button>

            <div className="text-center mt-2">
                <NavLink to="/auth/register" className="text-xl font-bold hover:text-red-600">Join Now</NavLink>
            </div>
        </form >
    )
}

