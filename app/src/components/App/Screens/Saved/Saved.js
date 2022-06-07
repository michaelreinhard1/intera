import { t } from 'i18next';
import { AuthRoutes } from '../../../../core/routing';
import Banner from '../../../Design/Alerts/Banner';
import Container from '../../../Design/Container/Container';
import { useAuthContext } from '../../Auth/AuthProvider';

const Saved = () => {

  const { auth } = useAuthContext();

  return (
    <>
    <Container className='pt-32'>

        {!auth &&
        <div className='m-auto rounded-lg flex justify-center'>
          <Banner title={t('banner.dont lose your saved properties')} message={t('banner.please login to make sure you dont lose your saved properties')}
          link={{ title: t('navigation.login here'), href: AuthRoutes.Login }}/>
        </div>
        }
      </Container>
    </>
  )
}

export default Saved