import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Views
import HomePage from "../views/HomePage";
import ThreeDemoView from "../views/ThreeDemoView";
import LayoutsView from "../views/LayoutsView";
import SpeechDemoView from "../views/SpeechDemoView";
import GeometryExplorer from "../views/GeometryExplorer";
import SettingsView from "../views/SettingsView";
<<<<<<< HEAD
import TablasMul from "../views/TablasMul";
import ConversorUnid from "../views/ConversorUnid";
import ValidContrasena from "../views/ValidContrasena";
import ContadorClics from "../views/ContadorClics";
import ListaTareas from "../views/ListaTareas";
import NumAleatorioView from "../views/NumAleatorioView";
import ShoppingCartView from "../views/ShoppingCartView";
import SurveyView from "../views/SurveyView";
import RegisterView from "../views/RegisterView";
=======
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="three" element={<ThreeDemoView />} />
        <Route path="layouts" element={<LayoutsView />} />
        <Route path="tts" element={<SpeechDemoView />} />
        <Route path="three_2" element={<GeometryExplorer />} />
        <Route path="settings" element={<SettingsView />} />
<<<<<<< HEAD
        <Route path="tablasmul" element={<TablasMul />} />
        <Route path="conversorunid" element={<ConversorUnid />} />
        <Route path="validcontrasena" element={<ValidContrasena />} />
        <Route path="contadorclics" element={<ContadorClics />} />
        <Route path="listareas" element={<ListaTareas />} />
        <Route path="numaleatorio" element={<NumAleatorioView />} />
        <Route path="shoppingcart" element={<ShoppingCartView />} />
        <Route path="survey" element={<SurveyView />} />
        <Route path="register" element={<RegisterView />} />
=======
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
      </Route>
    </Routes>
  );
}