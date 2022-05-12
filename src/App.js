import ThemeConfig from 'theme';
import Router from 'router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from 'store/slices/Auth/extraReducers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ThemeConfig>
        <Router />
      </ThemeConfig>
    </>
  );
}

export default App;
