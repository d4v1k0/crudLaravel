import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head , usePage, useForm, Link} from '@inertiajs/react';

export default function Dashboard({ auth }) {
    
    const {clientes}=usePage().props;
    const {data, setData, put, errors}=useForm({
      
      ci:clientes.ci||"",
      nombres:clientes.nombres || "",
      apellidos:clientes.apellidos||"",
      edad:clientes.edad||"",      
      telefono:clientes.telefono||"",
      direccion:clientes.direccion||"",
 
    });
    function handleSubmit(e)
    { e.preventDefault();
      {
           put(route("cliente.update", clientes.id));

      }  


    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">EDITAR CLIENTE</h2>}
        >
            <Head title="Editar clientes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='flex items-center justify-between mb-6'>
                          <Link
                            className='px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none'
                           href={route("cliente.index")}
                          >
                           ATRAS
                          </Link>    

                        </div>

                        <form name="crear" onSubmit={ handleSubmit }>
                            
                            <div className='mb-4'>
                                <label className=''> Ci</label>
                                <input type="number" className='w-full px-4 py2'
                                 label="Ci"
                                 name="Ci"
                                 errors={errors.ci}
                                 value={data.ci}
                                 onChange={(e)=>setData("ci",e.target.value)}
                                 
                                />
                                <span className='text-red-600'>
                                    {errors.ci}

                                </span>
                            </div>
                            
                            <div className='mb-4'>
                                <label className="">Nombres</label>
                                <input type="text" className='w-full px-4 py 2'
                                label="Nombres" 
                                name="Nombres"
                                value={data.nombres}
                                onChange={(e)=>setData("nombres",e.target.value)
                                }
                                />
                                <span className='text-red-600'>
                                    {errors.nombres}

                                </span>

                            </div>

                            <div className='mb-4'>
                                <label className=''>Apellidos</label>
                                <input type="text" className='w-full px-4 py2'
                                 label="Apellidos"
                                 name="Apellidos"
                                 value={data.apellidos}
                                 onChange={(e)=>setData("apellidos",e.target.value)}
                                 
                                />
                                <span className='text-red-600'>
                                    {errors.apellidos}

                                </span>
                            </div>

                            <div className='mb-4'>
                                <label className=''>Edad</label>
                                <input type="number" className='w-full px-4 py2'
                                 label="Edad"
                                 name="Edad"
                                 errors={errors.edad}
                                 value={data.edad}
                                 onChange={(e)=>setData("edad",e.target.value)}
                                 
                                />
                                <span className='text-red-600'>
                                    {errors.edad}

                                </span>
                            </div>                            

                            <div className='mb-4'>
                                <label className=''> Telefono</label>
                                <input type="text" className='w-full px-4 py2'
                                 label="Telefono"
                                 name="Telefono"
                                 errors={errors.telefono}
                                 value={data.telefono}
                                 onChange={(e)=>setData("telefono",e.target.value)}
                                 
                                />
                                <span className='text-red-600'>
                                    {errors.telefono}

                                </span>
                            </div>

                            <div className='mb-4'>
                                <label className=''> Direccion</label>
                                <input type="text" className='w-full px-4 py2'
                                 label="Direccion"
                                 name="Direccion"
                                 errors={errors.direccion}
                                 value={data.direccion}
                                 onChange={(e)=>setData("direccion",e.target.value)}
                                 
                                />
                                <span className='text-red-600'>
                                    {errors.direccion}

                                </span>
                            </div>

                           <div className='mt-4'>
                            <button type="submit" 
                            className='px-6 py-2 font-bold text-white bg-green-600 rounded'>
                                Guardar
                            </button>

                           </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}