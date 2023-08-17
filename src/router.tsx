import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import { Routes } from './constants/routes';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import {Main} from "./components/pages/Main/Main";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={Routes.ROOT} element={<MainLayout />}>
        <Route index element={<Main/>} />
      </Route>

      <Route path={Routes.NOT_FOUND} element={<></>} />
    </>
  )
);

export { router };
