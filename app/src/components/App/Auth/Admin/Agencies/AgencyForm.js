import { useTranslation } from "react-i18next";
import * as yup from "yup";
import useForm from "../../../../../core/hooks/useForm";
import Button from "../../../../Design/Button/Button";
import Textarea from "../../../../Design/Form/Textarea";
import Input from "../../../../Design/Input/Input";

const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    // image: yup.string().email().required(),
    address: yup.string().required(),
    province: yup.string().required(),
    city: yup.string().required(),
    zip: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
});

const AgencyForm = ({ initialData = {}, disabled, onSubmit, label }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    schema,
      {
        name: "",
        description: "",
        address: "",
        province: "",
        city: "",
        zip: "",
        email: "",
        phone: "",
          ...initialData,
      }
  );
  const handleData = (values) => {
    onSubmit(values);
};

  const mode = disabled ? "bg-blue-400 hover:bg-blue-400" : "";

  const { t } = useTranslation();

  return (
      <form onSubmit={handleSubmit(handleData)}  className="p-12 pt-0 md:p-18 rounded-xl grid grid-cols-2 gap-x-5">
          <div className="w-6/7 mb-6  col-span-full flex justify-items-start">
                <p className="text-lg font-bold">
                    {t('fields.general information')}
                </p>
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="name" className='w-6/12'>{t('fields.name')}</label>
              <Input
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              />
          </div>
          <div className='w-full mr-3 mb-6 col-span-full'>
              <label htmlFor="description" className='w-6/12'>{t('fields.description')}</label>
              <Textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              error={errors.description} />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="address" className='w-6/12'>{t('fields.street and number')}</label>
              <Input
              name="address"
              value={values.address}
              onChange={handleChange}
              error={errors.address}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="province" className='w-6/12'>{t('fields.province')}</label>
              <Input
              name="province"
              value={values.province}
              onChange={handleChange}
              error={errors.province}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="city" className='w-6/12'>{t('fields.city')}</label>
              <Input
              name="city"
              value={values.city}
              onChange={handleChange}
              error={errors.city}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="zip" className='w-6/12'>{t('fields.zip')}</label>
              <Input
              name="zip"
              value={values.zip}
              onChange={handleChange}
              error={errors.zip}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="email" className='w-6/12'>{t('fields.email')}</label>
              <Input
              name="email"
              type={'email'}
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="phone" className='w-6/12'>{t('fields.phone')}</label>
              <Input
              name="phone"
              type={'tel'}
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              />
          </div>
          <Button className={` m-auto bg-blue-500 col-span-2 ${mode}`} color={'primary'} type="submit" disabled={disabled}>
              {label}
          </Button>
      </form>
  );
};

export default AgencyForm;
