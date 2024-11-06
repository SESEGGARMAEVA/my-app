import { z } from "zod";

export const checkoutFormShema = z.object({
    name: z.string().min(2, "Имя должно быть длиннее 1 символа"),
    phone: z.string().length(11, "Номер телефона должен состоять из 11 символов"),
    city: z.string().min(1, "Выберите город"),
});