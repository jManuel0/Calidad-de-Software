import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
<<<<<<< HEAD
import Footer from "./Footer";
=======
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1">
        {/* Navbar arriba */}
        <Navbar />

        {/* Contenido dinámico (cada vista) */}
<<<<<<< HEAD
        <main className="flex-1 overflow-y-auto p-4 bg-white dark:bg-slate-900">
          <Outlet />
        </main>

        {/* Footer abajo */}
        <Footer />
      </div>
    </div>
  );
}
=======
        <main className="flex-1 overflow-y-auto p-4 bg-slate-50 dark:bg-slate-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
>>>>>>> 7cccc09a9aeb243f39e689741e8c48b54818139a
