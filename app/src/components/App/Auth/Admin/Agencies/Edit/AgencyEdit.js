import { useNavigate, useOutletContext } from 'react-router-dom';
import Error from '../../../../../Design/Alerts/Error';
import Container from '../../../../../Design/Container/Container';
import HeaderSpacer from '../../../../../Design/HeaderSpacer/HeaderSpacer';
import useMutation from "../../../../../../core/hooks/useMutation";
import { AgencyRoutes, ApiRoutes, route } from "../../../../../../core/routing";
import { useTranslation } from "react-i18next";
import useTitle from "../../../../../../core/hooks/useTitle";
import AgencyForm from '../../../../Shared/Agencies/Form/AgencyForm';

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