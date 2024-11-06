import { useEffect, useState } from "react";
import { useCart } from "../store/cart"
import { checkoutFormShema } from "../validation/checkoutFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function Checkout() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
        resolver: zodResolver(checkoutFormShema),
    });
    const onSubmit = (data) => {
        // отправка данных
        console.log(data);
    };

    return (
        <div className="container mx-auto flex flex-col gap-4">
            <h1 className="text-2xl">Оформление заказа</h1>
            <form className="flex flex-col gap-4 items-start"
                onSubmit={handleSubmit(onSubmit)}>

                <label className="flex flex-col gap-4 items-start">
                    Имя
                    <input name="name" className="outline" {...register("name")} />
                    {!!errors.name && (
                        <div className="text-red-500">{errors.name.message}</div>
                    )}
                </label>

                <label className="flex flex-col gap-4 items-start">
                    Номер телефона
                    <input name="phone" className="outline" {...register("phone")} />
                    {!!errors.phone && (
                        <div className="text-red-500">{errors.phone.message}</div>
                    )}
                </label>

                <label className="flex flex-col gap-4 items-start">
                    Город
                <select name="city" className="outline" {...register("city")}>
                    <option value=""> Выберите город </option>
                    <option value="Улан-Удэ">Улан-Удэ</option>
                    <option value="Иркутск">Иркутск</option>
                </select>

                {!!errors.city && (
                    <div className="text-red-500">{errors.city.message}</div>
                )}
            </label>


            {/* {!!errorString && <div className="text-red-500">{errorString}</div>} */}
            <button className="bg-green-500 p-2 rounded text-white">
                Оформить
            </button>
        </form>
        </div >
    );
};
