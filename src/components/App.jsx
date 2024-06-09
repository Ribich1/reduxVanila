import { useSelector } from 'react-redux';
import { Account } from './Account2';
import { LangSwitcher } from './LangSwitcher';

export const App = () => {
  const lang = useSelector(state => state.locale.lang);
  return (
    <>
      <LangSwitcher />
      <hr />
      <Account />
      <hr />
      <b>Selected lang: {lang.toUpperCase()}</b>
    </>
  );
};
