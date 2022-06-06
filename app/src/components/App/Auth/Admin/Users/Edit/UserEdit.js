import { useState, useEffect } from "react";
import { t } from 'i18next';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
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
import { ApiRoutes, route, UserRoutes } from "../../../../../../core/routing";
import Select from "../../../../../Design/Form/Select";
import UserForm from "../UserForm";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../../../core/hooks/useTitle";

const UserEdit = () => {

  const { t } = useTranslation();
  const { user, onUserUpdate } = useOutletContext();
  const navigate = useNavigate();

  useTitle(t("users.edit.title"));

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    console.log(data);
      mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.User}${user.id}`, {
          method: "PATCH",
          data,
          onSuccess: () => {
              onUserUpdate();
              navigate(route(UserRoutes.Detail, { id: user.id }));
          },
      });
  };

  return (
    <>
      <HeaderSpacer />
      <Container>
          <UserForm
                label={t("buttons.save")}
                disabled={isLoading}
                onSubmit={handleSubmit}
                initialData={user}
            />
            {error && <Error>{error}</Error>}
      </Container>
    </>

  )
}

export default UserEdit