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
import { AgencyRoutes, ApiRoutes, route, UserRoutes } from "../../../../../../core/routing";
import Select from "../../../../../Design/Form/Select";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../../../core/hooks/useTitle";
import AgencyForm from "../AgencyForm";

const AgencyEdit = () => {

  const { t } = useTranslation();
  const { agency, onAgencyUpdate } = useOutletContext();
  const navigate = useNavigate();

  useTitle(t("users.edit.title"));

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
      mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.Agency}${agency.id}`, {
          method: "PATCH",
          data,
          onSuccess: () => {
              onAgencyUpdate();
              navigate(route(AgencyRoutes.Index, { id: agency.id }));
          },
      });
  };

  return (
    <>
      <HeaderSpacer />
      <Container>
          <AgencyForm
                label={t("buttons.save")}
                disabled={isLoading}
                onSubmit={handleSubmit}
                initialData={agency}
            />
            {error && <Error>{error}</Error>}
      </Container>
    </>

  )
}

export default AgencyEdit