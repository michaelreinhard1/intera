import React from 'react'
import Error from '../../Design/Alerts/Error'
import Button from '../../Design/Button/Button'
import Container from '../../Design/Container/Container'
import Form from '../../Design/Form/Form'
import FormGroup from '../../Design/Form/FormGroup'
import Icon from  '../../../assets/icons/Icon.svg';
import { useState } from "react";
import useMutation from '../../../core/hooks/useMutation'
import { t } from 'i18next';
import * as MaterialDesign from "react-icons/md";

const Contact = () => {

    const { isLoading, error, mutate } = useMutation();

    const [data, setData] = useState({
        email: "",
        password: "",
    });

      const handleSubmit = (e) => {
        e.preventDefault();

        mutate(`${process.env.REACT_APP_API_URL}/login`, {
          method: "POST",
          data,
          onSuccess: (data) => {
                //   login(data);
                },
              });
      };

      const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const contactDetails = [
        {
            icon: <MaterialDesign.MdOutlinePinDrop />,
            description: 'Oude Jetseweg 1',
            href: '#',
        },
        {
            icon: <MaterialDesign.MdOutlinePhone />,
            description: '+31 (0) 6 12345678',
            href: 'tel:+31612345678',
        },
        {
            icon: <MaterialDesign.MdMailOutline />,
            description: 'info@intera.com',
            href: 'mailto:info@intera.com'
        },

    ];

    const mode = isLoading ? "bg-blue-500" : "";

  return (
    <div className={"bg-slate-100"}>
    <Container className={"h-screen overflow-hidden flex items-center justify-center"}>

    <div className="relative bg-white shadow-3xl rounded-xl w-8/12">
      <div className="bg-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4">
        <img className='Logo' src={Icon} alt="Logo"/>
      </div>
      <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600 py-20 pb-8'>{t('fields.contact')}</h1>
        <Form onSubmit={handleSubmit}>
            <FormGroup
            label={t('fields.email')}
            name={t('fields.email')}
            type={t('fields.email')}
            placeholder={t('fields.email')}
            value={data.email}
            onChange={handleChange}
            />
            <FormGroup
            label={t('fields.subject')}
            name={t('fields.subject')}
            type='text'
            placeholder={t('fields.subject')}
            value={data.subject}
            onChange={handleChange}
            />
            <FormGroup
            label={t('fields.message')}
            name={t('fields.message')}
            type='textarea'
            placeholder={t('fields.write your message')}
            value={data.message}
            onChange={handleChange}
            />
            <Button color="primary" className={`w-full ${mode}`} disabled={isLoading}>{t('fields.send')}</Button>
        </Form>
        <hr className='w-10/12 mx-auto' />
        {error && <Error message={error} />}
        <div className='w-10/12 mx-auto'>
            {/* for each contactDetails */}
            <h1 className='text-2xl font-bold text-gray-700 my-10'>{t('fields.contact information')}</h1>
            {contactDetails.map((contactDetail, index) => (
                <div key={index} className='flex gap-8 my-6 items-center text-xl text-gray-500'>
                    {contactDetail.icon}
                    <a href={contactDetail.href} className='text-center '>{contactDetail.description}</a>
                </div>
            ))}
        </div>
        </div>
    </Container>
    </div>
)
}

export default Contact