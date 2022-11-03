import Head from 'next/head';
import Linka from './Linka';

const MainContainer = ({ children, keywords, title }) => {
  return (
    <>
      <Head>
        <meta keywords={'raaynoff' + keywords} />
        <title>{title ?? 'Главная страница'}</title>
      </Head>
      <nav className="navbar">
        <Linka href={'/'} title={'Главная'} />
        <Linka href={'/users'} title={'Пользователи'} />
      </nav>
      <main>{children}</main>
    </>
  );
};

export default MainContainer;
