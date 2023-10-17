import { useNavigate } from "react-router-dom";

const NewRequirements  = () => {
  const navigate = useNavigate();

  const setMoul = (string) => {
    navigate(`/createIssue/form/${string}`)
  }

  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="w-3/4 flex items-center justify-center flex-wrap gap-14">
        <button className="w-1/3 h-16 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMoul("softland")}>Softland</button>
        <button className="w-1/3 h-16 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMoul("taller")}>Taller</button>
        <button className="w-1/3 h-16 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMoul("circuitoCompras")}>Circuito de Compras</button>
        <button className="w-1/3 h-16 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMoul("hardware")}>Hardware</button>
        <button className="w-1/3 h-16 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMoul("choferes")}>Choferes</button>
        <button className="w-1/3 h-16 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMoul("bussinesInteligent")}>Bussines Inteligent</button>
        <button className="w-1/3 h-16 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => setMoul("nuevosRequerimientos")}>Nuevos requerimientos</button>
      </div>
    </div>
  )
}

export default NewRequirements;