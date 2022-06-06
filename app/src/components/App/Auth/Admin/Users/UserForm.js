import { useTranslation } from "react-i18next";
import * as yup from "yup";
import useForm from "../../../../../core/hooks/useForm";
import { UserRoles } from "../../../../../core/modules/users/constants";
import Button from "../../../../Design/Button/Button";
import PasswordInput from "../../../../Design/Form/PasswordInput";
import SearchbarDropdown from "../../../../Design/Form/SearchbarDropdown";
import Select from "../../../../Design/Form/Select";
import Input from "../../../../Design/Input/Input";
import AgencySelect from "../../../Shared/Agencies/Select/AgencySelect";

const getSchema = (isUpdate) => {
  return yup.object().shape({
      name: yup.string().required(),
      surname: yup.string().required(),
      email: yup.string().email().required(),
      role: yup.string().required(),
      password: isUpdate ? yup.string() : yup.string().required(),
      agencyId: yup.number().nullable().required(),
  });
};
const transformInitialData = (initialData) => {
    if (initialData.agency) {
        initialData = {
            ...initialData,
            agencyId: initialData.agency.id,
        };
    }
    return initialData;
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
          agencyId: null,
          role: UserRoles.User,
          ...transformInitialData(initialData),
      }
  );

  const handleData = (values) => {
      onSubmit(transformValues(values));
  };

  console.log(values);
  const mode = disabled ? "bg-blue-400 hover:bg-blue-400" : "";
  const { t } = useTranslation();
  return (
      <form onSubmit={handleSubmit(handleData)} noValidate={true} className="p-12 pt-0 md:p-18 rounded-xl grid grid-cols-2 gap-x-5">
          <div className='w-full mr-3 mb-6'>
              <label htmlFor="name" className='w-6/12'>{t('fields.name')}</label>
              <Input
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              />
          </div>
          <div className='w-full mr-3 mb-6'>
              <label htmlFor="surname" className='w-6/12'>{t('fields.surname')}</label>
              <Input
              name="surname"
              value={values.surname}
              onChange={handleChange}
              error={errors.surname}
              />
          </div>
          <div className='w-full mr-3 mb-6'>
              <label htmlFor="email" className='w-6/12'>{t('fields.email')}</label>
              <Input
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              />
          </div>
          <div className='w-full mr-3 mb-6'>
              <label htmlFor="role" className='w-6/12'>{t('fields.role')}</label>
              <Select
              label="role"
                name="role"
                value={values.role}
                options={Object.values(UserRoles)}
                onChange={handleChange}
                error={errors.role}
              />
          </div>
          <div className='w-full mr-3 mb-6'>
              <label htmlFor="role" className='w-6/12'>{t('fields.agency')}</label>
              <AgencySelect
                    name="agencyId"
                    value={values.agencyId}
                    onChange={handleChange}
                    error={errors.agencyId}
                />

          </div>
          <div className='w-full mr-3 mb-6'>
              <label htmlFor="password" className='w-6/12'>{t('fields.password')}</label>
              <PasswordInput
                  name="password"
                  value={values.password}
                  disabled={disabled}
                  onChange={handleChange}
                  error={errors.password}
              />
              {isUpdate && (
                  <p className="text-muted mt-5 pl-2 ">
                      {t("users.edit.password_print")}
                  </p>
              )}
          </div>
          <Button className={` m-auto bg-blue-500 col-span-2 ${mode}`} color={'primary'} type="submit" disabled={disabled}>
              {label}
          </Button>
      </form>
  );
};

export default UserForm;
