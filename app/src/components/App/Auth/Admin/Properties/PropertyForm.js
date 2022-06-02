import { t } from "i18next";
import * as yup from "yup";
import useForm from "../../../../../core/hooks/useForm";
import Button from "../../../../Design/Button/Button";
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

const PropertyForm = ({ initialData = {}, disabled, onSubmit, label }) => {
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
      <form onSubmit={handleSubmit(handleData)} noValidate={true} className="p-12 pt-0 md:p-18 rounded-xl grid grid-cols-2">
          <div className="w-ful mb-6 mx-auto">
                {/* Upload zone to upload multiple images */}


          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="name" className='w-6/12'>{t('fields.name')}</label>
              <Input
              name="name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="description" className='w-6/12'>{t('fields.description')}</label>
              <Input
              name="description"
              value={values.description}
              onChange={handleChange}
              error={errors.description}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="city" className='w-6/12'>{t('fields.city')}</label>
              <Input
              name="city"
              value={values.city}
              onChange={handleChange}
              error={errors.city}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="province" className='w-6/12'>{t('fields.province')}</label>
              <Input
              name="province"
              value={values.province}
              onChange={handleChange}
              error={errors.province}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="type" className='w-6/12'>{t('fields.type')}</label>
              <Input
              name="type"
              value={values.type}
              onChange={handleChange}
              error={errors.type}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="payment" className='w-6/12'>{t('fields.payment')}</label>
              <Input
              name="payment"
              value={values.payment}
              onChange={handleChange}
              error={errors.payment}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="price" className='w-6/12'>{t('fields.price')}</label>
              <Input
              name="price"
              type={'number'}
              value={values.price}
              onChange={handleChange}
              error={errors.price}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="rooms" className='w-6/12'>{t('fields.rooms')}</label>
              <Input
              name="rooms"
              type={'number'}
              value={values.rooms}
              onChange={handleChange}
              error={errors.rooms}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="bedrooms" className='w-6/12'>{t('fields.bedrooms')}</label>
              <Input
              name="bedrooms"
              type={'number'}
              value={values.bedrooms}
              onChange={handleChange}
              error={errors.bedrooms}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="bathrooms" className='w-6/12'>{t('fields.bathrooms')}</label>
              <Input
              name="bathrooms"
              type={'number'}
              value={values.bathrooms}
              onChange={handleChange}
              error={errors.bathrooms}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="area" className='w-6/12'>{t('fields.area')}</label>
              <Input
              name="area"
              type={'number'}
              value={values.area}
              onChange={handleChange}
              error={errors.area}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="floor" className='w-6/12'>{t('fields.floor')}</label>
              <Input
              name="floor"
              type={'number'}
              value={values.floor}
              onChange={handleChange}
              error={errors.floor}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="year" className='w-6/12'>{t('fields.year')}</label>
              <Input
              name="year"
              type={'number'}
              value={values.year}
              onChange={handleChange}
              error={errors.year}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="phone" className='w-6/12'>{t('fields.phone')}</label>
              <Input
              name="phone"
              type={'phone'}
              value={values.phone}
              onChange={handleChange}
              error={errors.phone}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="email" className='w-6/12'>{t('fields.email')}</label>
              <Input
              name="email"
              type={'email'}
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              />
          </div>
          <div className='w-4/5 mb-6 mx-auto'>
              <label htmlFor="owner" className='w-6/12'>{t('fields.owner')}</label>
              <Input
              name="owner"
              value={values.owner}
              onChange={handleChange}
              error={errors.owner}
              />
          </div>
          <Button className={` m-auto bg-blue-500 col-span-2 ${mode}`} color={'primary'} type="submit" disabled={disabled}>
              {label}
          </Button>
      </form>
  );
};

export default PropertyForm;
