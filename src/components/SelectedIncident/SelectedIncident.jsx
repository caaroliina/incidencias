import { useNavigate } from "react-router-dom"

const SelectedIncident = () =>{
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    if (path == "softland") navigate("/createIssue/form/softland")
    if (path == "taller") navigate("/createIssue/form/taller")
    if (path == "sc") navigate("/createIssue/form/circuitoCompras")
    if (path == "harware") navigate("/createIssue/form/hardware")
    if (path == "choferes") navigate("/createIssue/form/choferes")
    if (path == "bussines-inteligent") navigate("/createIssue/form/bussinesInteligent")
    if (path == "create-new") navigate("/createIssue/form/nuevosRequerimientos")
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-6 3xl:p-![18px] undefined">
        <div className="w-full relative flex flex-row justify-center">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                      Seleccione módulo
                  </h4>
        </div>
        <div className="h-full w-full mt-5 flex flex-col gap-5"> 
            <button onClick={() => handleRedirect("softland")} className="rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              Softland
            </button>
            <button onClick={() => handleRedirect("taller")} className="rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              Taller
            </button> 
            <button onClick={() => handleRedirect("sc")} className="rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
                Circuito de Compras
            </button>
            <button onClick={() => handleRedirect("harware")} className="rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              Hardware
            </button>
            <button onClick={() => handleRedirect("choferes")} className="rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              Choferes
            </button>
            <button onClick={() => handleRedirect("bussines-inteligent")} className="rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              Bussines Inteligent
            </button>
            <button onClick={() => handleRedirect("create-new")} className="rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50">
              Crear nuevo desarrollo
            </button>
        </div>
      </div>
  </div>
  )
}

export default SelectedIncident