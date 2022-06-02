import { useState, useEffect } from "react";
import { t } from 'i18next';
import { useOutletContext, useParams } from 'react-router-dom';
import Error from '../../../../../Design/Alerts/Error';
import Succes from '../../../../../Design/Alerts/Succes';
import Button from '../../../../../Design/Button/Button';
import Container from '../../../../../Design/Container/Container';
import HeaderSpacer from '../../../../../Design/HeaderSpacer/HeaderSpacer';
import Input from '../../../../../Design/Input/Input';
import useMutation from "../../../../../../core/hooks/useMutation";
import { UserRoles } from "../../../../../../core/modules/users/constants";
import LoadingIndicator from "../../../../../Design/LoadingIndicator/LoadingIndicator";
import useFetch from '../../../../../../core/hooks/useFetch';
import { useAuthContext } from '../../../AuthProvider';
import { ApiRoutes } from "../../../../../../core/routing";
import Select from "../../../../../Design/Form/Select";

const UserEdit = () => {

  const { id } = useParams();

  const { auth } = useAuthContext();

  const { isLoading, data: user, error, invalidate } = useFetch(`${ApiRoutes.User}${id}`);

  console.log(`${ApiRoutes.User}${id}`);

  console.log(user);

  const { mutate } = useMutation();

  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    role: '',
  });

  const [succes, setSucces] = useState(false);

  useEffect(() => {
    if (user) {
      setData({
      name: user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
    });
    }
  }, [user]);

  const handleSubmit = (e) => {
      e.preventDefault();

      mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.User}${id}`, {
          method: "PATCH",
          data,
          onSuccess: (data) => {
            invalidate();
            setSucces(true);
            console.log(data);
          },
      });
  };

  const handleChange = (e) => {
      setData({
          ...data,
          [e.target.name]: e.target.value,
      });
  };

  if(isLoading) {
    return (
        <LoadingIndicator />
    )
}

  if (error) {
    return <Error message={error} />;
  }

  const mode = isLoading ? "bg-blue-400 hover:bg-blue-400" : "";

  return (
    <>
      <HeaderSpacer />
      <Container>
        <form method="patch" onSubmit={handleSubmit} className="p-12 pt-0 md:p-18 rounded-xl flex flex-col">
              <div className="flex items-cente flex-col justify-between text-lg  sm:flex-row">
                <div className='w-full sm:w-5/12 mb-6'>
                  <label htmlFor="name" className='w-6/12'>{t('fields.name')}</label>
                  <Input placeholder='Name' name="name" value={data.name} onChange={handleChange} />
                </div>
                <div className='w-full sm:w-5/12 mb-6'>
                  <label htmlFor="surname" className='w-6/12'>{t('fields.surname')}</label>
                  <Input placeholder='Surname' name="surname" value={data.surname} onChange={handleChange} />
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 ">
                <div className='w-full'>
                  <label htmlFor="email" className='w-full'>{t('fields.email')}</label>
                  <Input type='email' placeholder='Email' name="email" value={data.email} onChange={handleChange} />
                </div>
              </div>
              <div className="flex items-center text-lg mb-6 ">
                <div className='w-full'>
                  <label htmlFor="role" className='w-full'>{t('fields.role')}</label>
                  <Select
                  name="role"
                  options = {Object.values(UserRoles)}
                  onChange = {handleChange}
                  value = {data.role}
                  error = {error}
                  disabled = {isLoading}
                  >
                  </Select>
                </div>
              </div>
              {error && <Error message={error} />}
              {succes &&  <Succes message={t('users.edit.success')} />}
              <Button color={'primary'} className={` m-auto bg-blue-500 ${mode}`} type="submit" disabled={isLoading}>
                {/* If isloading is true  */}
                {isLoading ?
                  <svg role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                : null}
                  {t('buttons.save changes')}
              </Button>
            </form>

      </Container>
    </>

  )
}

export default UserEdit