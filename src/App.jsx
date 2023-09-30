import React from 'react';
import axios from 'axios';

const App = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obtén los valores del formulario
      // const usuario = e.target.elements['first-name'].value;
      // const email = e.target.elements['email'].value;
      // const descripcion = e.target.elements['textarea'].value;

      // Construye el objeto de datos para el cuerpo de la solicitud
      const bodyData = {
        fields: {
          project: {
            key: "ATATT3xFfGF0CQswdhmTGMWIqX_GmTW0IoHCvdR2Q36M-OoJf3m-aFZ6Q2jRa8R5TYLVGtusWS3radKRrznbnTP-INxFdsWR210iMUUmaU9kAxKya9_G1EkhxcuPAjyOtQNdIlb5k4_gf38UoBOg0ehoVKfbZyO5WOKZNDZOQGwu9-RWmb9JfMM=F7FC3EEE",
            id: "10010"
          },
          summary: "Incidencia desde Softland",
          issuetype: {
            id: "10039"
          },
          description: `algo`
          //Usuario: ${usuario}\nEmail: ${email}\nDescripción: ${descripcion}
        }
      };

      // Realiza la solicitud POST a la API de Atlassian
      const response = await axios.post('https://gpenna.atlassian.net/rest/api/3/issue', bodyData, {
        headers: {
          Authorization: "ATATT3xFfGF0CQswdhmTGMWIqX_GmTW0IoHCvdR2Q36M-OoJf3m-aFZ6Q2jRa8R5TYLVGtusWS3radKRrznbnTP-INxFdsWR210iMUUmaU9kAxKya9_G1EkhxcuPAjyOtQNdIlb5k4_gf38UoBOg0ehoVKfbZyO5WOKZNDZOQGwu9-RWmb9JfMM=F7FC3EEE",  // Reemplaza 'TU_TOKEN' con tu token de autorización de Atlassian
          'Content-Type': 'application/json',
        },
      });

      console.log('Respuesta de la API de Atlassian:', response.data);
      alert('¡Se envió el formulario correctamente!');
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
      alert('Ocurrió un error al enviar el formulario.');
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center">
        <div className='flex flex-col w-full'>
          <img src='https://softland.com.ar/wp-content/uploads/2020/09/logo-blanco-1.png' className='flex items-start w-36'></img>
          <h1 className="text-3xl font-bold flex">Notificar a Softland</h1>
        </div>
       <form onSubmit={handleSubmit}> {/* onSubmit={handleSubmit} action="/api/submit-form" method="post" */}
        <div className="space-y-12">
          <div className="pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Usuario
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className='sm:col-span-4 '>
            
              <textarea name="textarea" rows="10" cols="50" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Informar si se encontro alguna inconsistencia o si hay algun error</textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Subir archivo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                  </svg>
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Informar incidencia
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
