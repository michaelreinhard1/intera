import { useTranslation } from 'react-i18next';
import { useNavigate, useOutletContext } from 'react-router-dom';
import useMutation from '../../../../../../core/hooks/useMutation';
import useTitle from '../../../../../../core/hooks/useTitle';
import { UserRoles } from '../../../../../../core/modules/users/constants';
import { ApiRoutes, UserRoutes } from '../../../../../../core/routing';
import Error from '../../../../../Design/Alerts/Error';
import Container from '../../../../../Design/Container/Container';
import HeaderSpacer from '../../../../../Design/HeaderSpacer/HeaderSpacer';
import UserForm from '../../../../Shared/Users/Form/UserForm';

const UserEdit = () => {

  const { t } = useTranslation();
  const { user, onUserUpdate } = useOutletContext();

  const navigate = useNavigate();

  useTitle(t("users.edit.title"));

  const { isLoading, error, mutate } = useMutation();

  const handleSubmit = (data) => {
    // If data.role is user, then set agency id to null
    if (data.role === UserRoles.User) {
      data.agencyId = null;
    }
      mutate(`${process.env.REACT_APP_API_URL}${ApiRoutes.User}${user.id}`, {
          method: "PATCH",
          data,
          onSuccess: () => {
              onUserUpdate();
              navigate(UserRoutes.Index);
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
            {error && <Error message={error} />}
      </Container>
    </>

  )
}

export default UserEdit