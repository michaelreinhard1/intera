import { t } from "i18next";
import * as yup from "yup";
import useForm from "../../../../../core/hooks/useForm";
import { UserRoles } from "../../../../../core/modules/users/constants";
import Button from "../../../../Design/Button/Button";
import PasswordInput from "../../../../Design/Form/PasswordInput";
import Input from "../../../../Design/Input/Input";

const getSchema = (isUpdate) => {
  return yup.object().shape({
      name: yup.string().required(),
      surname: yup.string().required(),
      email: yup.string().email().required(),
      password: isUpdate ? yup.string() : yup.string().required(),
  });
};

const transformValues = (values) => {
  // don't send password if it's empty
  if (values.password.length === 0) {
      const { password, ...rest } = values; // or use "delete" keyword
      values = rest;
  }
  return values;
};

const UserForm = ({ initialData = {}, disabled, onSubmit, label }) => {
  const isUpdate = !!initialData.id;
  const { values, errors, handleChange, handleSubmit } = useForm(
      getSchema(isUpdate),
      {
          name: "",
          surname: "",
          email: "",
          password: "",
          ...initialData,
      }
  );

  const handleData = (values) => {
      onSubmit(transformValues(values));
  };

  const mode = disabled ? "bg-blue-400 hover:bg-blue-400" : "";

  return (
      <form onSubmit={handleSubmit(handleData)} noValidate={true} className="p-12 pt-0 md:p-18 rounded-xl flex flex-col">
          <div className='w-full  mb-6'>
              <label htmlFor="name" className='w-6/12'>{t('fields.name')}</label>
              <Input
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              />
          </div>
          <div className='w-full  mb-6'>
              <label htmlFor="surname" className='w-6/12'>{t('fields.surname')}</label>
              <Input
              name="surname"
              value={values.surname}
              onChange={handleChange}
              error={errors.surname}
              />
          </div>
          <div className='w-full  mb-6'>
              <label htmlFor="email" className='w-6/12'>{t('fields.email')}</label>
              <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              />
          </div>
          <div className='w-full  mb-6'>
              <label htmlFor="password" className='w-6/12'>{t('fields.password')}</label>
              <PasswordInput
                  name="password"
                  value={values.password}
                  disabled={disabled}
                  onChange={handleChange}
                  error={errors.password}
              />
              {isUpdate && (
                  <p className="text-muted">
                      {t("users.edit.password_print")}
                  </p>
              )}
          </div>
          <Button className={` m-auto bg-blue-500 ${mode}`} color={'primary'} type="submit" disabled={disabled}>
              {label}
          </Button>
      </form>
  );
};

export default UserForm;
