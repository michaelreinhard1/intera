import { useTranslation } from "react-i18next";
import * as yup from "yup";
import useForm from "../../../../../core/hooks/useForm";
import { PropertyTypes, TransactionTypes } from "../../../../../core/modules/properties/constants";
import { convertObjectToArrayForSelect } from "../../../../../core/modules/properties/utils";
import Button from "../../../../Design/Button/Button";
import FileInput from "../../../../Design/Form/FileInput";
import Select from "../../../../Design/Form/Select";
import Textarea from "../../../../Design/Form/Textarea";
import Input from "../../../../Design/Input/Input";
import AgencySelect from "../../../Shared/Agencies/Select/AgencySelect";


const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    type: yup.string().required(),
    rooms: yup.number().typeError('rooms must be a number').required(),
    bedrooms: yup.number().typeError('bedrooms must be a number').required(),
    bathrooms: yup.number().typeError('bathrooms must be a number').required(),
    price: yup.number().typeError('price must be a number. eg: 350000').required(),
    area: yup.number().typeError('area must be a number').required(),
    floor: yup.number().typeError('floor must be a number').required(),
    year: yup.number().typeError('year must be a number').required(),
    address: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    owner: yup.string().required(),
    city: yup.string().required(),
    zip: yup.string().required(),
    payment: yup.string().required(),
    province: yup.string().required(),
});

const PropertyForm = ({ initialData = {}, disabled, onSubmit, label }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    schema,
      {
        name: "",
        description: "",
        type: "",
        rooms: "",
        bedrooms: "",
        bathrooms: "",
        price: "",
        area: "",
        floor: "",
        year: "",
        address: "",
        phone: "",
        email: "",
        owner: "",
        city: "",
        zip: "",
        province: "",
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
          {
              !initialData ? (
                <div className='w-full mr-3 mb-6 '>
                    <label htmlFor="name" className='w-6/12'>{t('fields.name')}</label>
                    <FileInput
                        name="image"
                        value={values.image}
                        disabled={disabled}
                        onChange={handleChange}
                        error={errors.image}
                    />
                </div>
                ) : null
          }
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
              className="border mt-3 rounded-lg pl-6 md:py-2 focus:outline-none w-full"
              name="description"
              value={values.description}
              onChange={handleChange}
              error={errors.description} />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="price" className='w-6/12'>{t('fields.price')}</label>
              <Input
              name="price"
              type={'number'}
              value={values.price}
              onChange={handleChange}
              error={errors.price}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="year" className='w-6/12'>{t('fields.year')}</label>
              <Input
              name="year"
              type={'number'}
              value={values.year}
              onChange={handleChange}
              error={errors.year}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="area" className='w-6/12'>{t('fields.area')}</label>
              <Input
              name="area"
              type={'number'}
              value={values.area}
              onChange={handleChange}
              error={errors.area}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="floor" className='w-6/12'>{t('fields.floor')}</label>
              <Input
              name="floor"
              type={'number'}
              value={values.floor}
              onChange={handleChange}
              error={errors.floor}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="agency" className='w-6/12'>{t('fields.agency')}</label>
              <AgencySelect
                    name="agency"
                    value={values.agency}
                    onChange={handleChange}
                    error={errors.agency}
                />
          </div>
          <div className="w-6/7 mb-6  col-span-full flex justify-items-start mt-10">
                <p className="text-lg font-bold">
                    {t('fields.address')}
                </p>
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
              <label htmlFor="city" className='w-6/12'>{t('fields.city')}</label>
              <Input
              name="city"
              value={values.city}
              onChange={handleChange}
              error={errors.city}
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
              <label htmlFor="zip" className='w-6/12'>{t('fields.zip')}</label>
              <Input
              name="zip"
              value={values.zip}
              onChange={handleChange}
              error={errors.zip}
              />
          </div>
          <div className="w-6/7 mb-6  col-span-full flex justify-items-start mt-10">
                <p className="text-lg font-bold">
                    {t('fields.type of property')}
                </p>
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="type" className='w-6/12'>{t('fields.type')}</label>
              <Select
                label="type"
                name="type"
                value={values.type}
                options={convertObjectToArrayForSelect(PropertyTypes)}
                onChange={handleChange}
                error={errors.type}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="payment" className='w-6/12'>{t('fields.payment')}</label>
              <Select
                label="payment"
                name="payment"
                value={values.payment}
                options={convertObjectToArrayForSelect(TransactionTypes)}
                onChange={handleChange}
                error={errors.type}
              />

          </div>
          <div className="w-6/7 mb-6  col-span-full flex justify-items-start mt-10">
                <p className="text-lg font-bold">
                    {t('fields.rooms')}
                </p>
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="rooms" className='w-6/12'>{t('fields.total rooms')}</label>
              <Input
              name="rooms"
              type={'number'}
              value={values.rooms}
              onChange={handleChange}
              error={errors.rooms}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="bedrooms" className='w-6/12'>{t('fields.bedrooms')}</label>
              <Input
              name="bedrooms"
              type={'number'}
              value={values.bedrooms}
              onChange={handleChange}
              error={errors.bedrooms}
              />
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="bathrooms" className='w-6/12'>{t('fields.bathrooms')}</label>
              <Input
              name="bathrooms"
              type={'number'}
              value={values.bathrooms}
              onChange={handleChange}
              error={errors.bathrooms}
              />
          </div>
          <div className="w-6/7 mb-6  col-span-full flex justify-items-start mt-10">
                <p className="text-lg font-bold">
                    {t("fields.owner's contact details")}
                </p>
          </div>
          <div className='w-full mr-3 mb-6 '>
              <label htmlFor="owner" className='w-6/12'>{t('fields.name')}</label>
              <Input
              name="owner"
              value={values.owner}
              onChange={handleChange}
              error={errors.owner}
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

export default PropertyForm;
