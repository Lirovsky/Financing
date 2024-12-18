import * as yup from "yup";

export const schema = yup
  .object({
    firstName: yup
      .string()
      .required("Nome é obrigatório")
      .min(3, "Minímo 3 caracteres"),
    lastName: yup
      .string()
      .required("Sobrenome é obrigatório")
      .min(3, "Minímo 3 caracteres"),
    email: yup.string().email().required("Email é obrigatório"),
    subject: yup
      .string()
      .required("Assunto é obrigatório")
      .min(10, "Minímo 10 caracteres"),
    message: yup
      .string()
      .required("Descrição é obrigatória")
      .min(10, "Minímo 10 caracteres"),
  })
  .shape();
