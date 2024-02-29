import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link, router } from "@inertiajs/react";

export default function Index({ auth }) {
    const { clientes } = usePage().props;
    
    function destroy(e) {

     
        if (confirm("¿Estás seguro de que quieres eliminar a este usuario?")) {
            router.delete(route('cliente.destroy',e.currentTarget.id));
     

        }
    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    clientes
                </h2>
            }
        >
            <Head title="Fincade" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex items-center justify-center mb-5">
                           
                            <table className="table-auto w-full">
                                <thead>
                                    <tr className="bg-cyan-600">
                                        <th className="border text-white">ID</th>
                                        <th className="border text-white">Ci</th>
                                        <th className="border text-white">Nombres</th>
                                        <th className="border text-white">Apellidos</th>
                                        <th className="border text-white">Edad</th>
                                        <th className="border text-white">Telefono</th>
                                        <th className="border text-white">Dirección</th>
                                        <th className="border text-white">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  { clientes.map(({ id, ci, nombres, apellidos, edad, telefono, direccion }) =>
                                   (
                                    <tr className="px-4 py-2 w-20">
                                      <td className="border px-4 py-2 w-10">{ id }</td>
                                      <td className="border px-4 py-2 w-20">{ ci }</td>
                                      <td className="border px-4 py-2 w-30">{ nombres }</td>
                                      <td className="border px-4 py-2 w-50">{ apellidos }</td>
                                      <td className="border px-4 py-2 w-20">{ edad }</td>
                                      <td className="border px-4 py-2 w-20">{ telefono }</td>
                                      <td className="border px-4 py-2 w-90">{ direccion }</td>
                                      <td className="border px-4 py-2 w-25">
                                        <Link tabIndex='1' className="border px-2 py-1 bg-blue-500 text-white rounded" href={route('cliente.edit', id)}>
                                          Editar
                                        </Link>
                                        <button 
                                          onClick={ destroy } 
                                          id={ id } 
                                          tabIndex='-1'
                                          type="button" 
                                          className="border px-2 py-1 bg-orange-500 text-white rounded" >

                                          Eliminar

                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                            
                        </div>

                        <Link
                                className="px-6 py-2 text-white bg-green-700 rounded-md focus:outline-none"
                                href={route("cliente.create")}>
                                Crear cliente
                            </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
