<<<<<<< HEAD
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaCube, FaColumns, FaMicrophone, FaShapes, FaCalculator, FaRuler, FaKey, FaMouse, FaList, FaDiceSix, FaShoppingCart, FaStar, FaUserPlus } from "react-icons/fa";
=======
import { NavLink } from "react-router-dom";
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a

interface SidebarItem {
  label: string;
  route: string;
<<<<<<< HEAD
  icon?: React.ReactNode;
}

const mainItems: SidebarItem[] = [
  { label: "Inicio", route: "/", icon: <FaHome /> },
  { label: "Three.js Demo", route: "/three", icon: <FaCube /> },
  { label: "Responsive Layouts", route: "/layouts", icon: <FaColumns /> },
  { label: "Text-to-Speech", route: "/tts", icon: <FaMicrophone /> },
  { label: "Figuras Geometricas", route: "/three_2", icon: <FaShapes /> },
];

const exerciseItems: SidebarItem[] = [
  { label: "Tablas de Multiplicar", route: "/tablasmul", icon: <FaCalculator /> },
  { label: "Conversor de Unidades", route: "/conversorunid", icon: <FaRuler /> },
  { label: "Validadador de Contraseñas", route: "/validcontrasena", icon: <FaKey /> },
  { label: "Contador de Clics con Almacenamiento", route: "/contadorclics", icon: <FaMouse /> },
  { label: "Lista de Tareas", route: "/listareas", icon: <FaList /> },
  { label: "Generador de Números Aleatorios", route: "/numaleatorio", icon: <FaDiceSix /> },
  { label: "Carrito de Compras", route: "/shoppingcart", icon: <FaShoppingCart /> },
  { label: "Encuesta de Satisfacción", route: "/survey", icon: <FaStar /> },
  { label: "Formulario de Registro", route: "/register", icon: <FaUserPlus /> },
];

export default function Sidebar() {
  const [openMain, setOpenMain] = useState(false);
  const [openExercises, setOpenExercises] = useState(true);

  const renderNavItem = ({ label, route, icon }: SidebarItem) => (
    <NavLink
      key={route}
      to={route}
      className={({ isActive }) =>
        `w-full text-left flex items-center gap-2 justify-between rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100
         hover:bg-slate-50 dark:hover:bg-slate-800
         ${isActive ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300" : ""}`
      }
    >
      <div className="flex items-center gap-2">{icon} {label}</div>
    </NavLink>
  );

  return (
    <aside className="hidden md:block w-full md:w-[240px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="p-3 space-y-1">

        {/* Acordeón Main Items */}
        <button
          onClick={() => setOpenMain(!openMain)}
          className="w-full text-left flex items-center justify-between rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100
                     hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
        >
          Menú Principal
          <span>{openMain ? "▲" : "▼"}</span>
        </button>
        {openMain && <div className="pl-4 space-y-1">{mainItems.map(renderNavItem)}</div>}

        {/* Acordeón Exercises */}
        <button
          onClick={() => setOpenExercises(!openExercises)}
          className="w-full text-left flex items-center justify-between rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100
                     hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
        >
          Ejercicios - Jtest
          <span>{openExercises ? "▲" : "▼"}</span>
        </button>
        {openExercises && <div className="pl-4 space-y-1">{exerciseItems.map(renderNavItem)}</div>}

      </div>
    </aside>
  );
}
=======
}

const items: SidebarItem[] = [
  { label: "Inicio", route: "/" },
  { label: "Three.js Demo", route: "/three" },
  { label: "Responsive Layouts", route: "/layouts" },
  { label: "Text-to-Speech", route: "/tts" },
  { label: "Figuras Geometricas", route: "/three_2" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-full md:w-[240px] border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="p-3 space-y-1">
        {items.map(({ label, route }) => (
          <NavLink
            key={route}
            to={route}
            className={({ isActive }) =>
              `w-full text-left flex items-center justify-between rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 
               hover:bg-slate-50 dark:hover:bg-slate-800 
               ${isActive ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
