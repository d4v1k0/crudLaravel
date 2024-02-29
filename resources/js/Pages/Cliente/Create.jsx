import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';



export default function Create({ auth }) {
    const { data, setData, errors, post } = useForm({
        ci:'',
        nombres:'',
        apellidos:'',
        edad:'',        
        telefono:'',
        direccion:''
    })

    function handleSubmit(e){
        e.preventDefault()
        post(route('cliente.store'))
    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crear cliente</h2>}
        >
            <Head title="Crear" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className='p-6'>
                            <div>
                            <Link
                                className="px-6 py-2 text-white bg-red-500 rounded-md "
                                href={route('cliente.index') } >
                                Atras
                            </Link>
                            </div>

                            <form className='py-12' name='createForm' onSubmit={ handleSubmit }>
                                
                                <div className='flex flex-col py-1'>
                                    <div className='mb-4'>
                                        <label className=''>Ci</label>
                                        <input 
                                            type='number' 
                                            className='w-full px-4 py-2' 
                                            label='Ci' 
                                            name='Ci' 
                                            value={ data.ci }
                                            onChange={ (e) => setData('ci', e.target.value) } />

                                            <span className='text-red-600'>
                                              { errors.ci }
                                            </span>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col py-1'>
                                    <div className='mb-4'>
                                        <label className=''>Nombres</label>
                                        <input 
                                            type='text' 
                                            className='w-full px-4 py-2' 
                                            label='Nombres' 
                                            name='Nombres' 
                                            value={ data.nombres }
                                            onChange={ (e) => setData('nombres', e.target.value) } />

                                            <span className='text-red-600'>
                                              { errors.nombres }
                                            </span>
                                    </div>
                                </div>

                                <div className='flex flex-col py-1'>
                                    <div className='mb-4'>
                                        <label className=''>Apellidos</label>
                                        <input 
                                            type='text' 
                                            className='w-full px-4 py-2' 
                                            label='Apellidos' 
                                            name='Apellidos' 
                                            value={ data.apellidos }
                                            onChange={ (e) => setData('apellidos', e.target.value) } />

                                            <span className='text-red-600'>
                                              { errors.apellidos }
                                            </span>
                                    </div>
                                </div>

                                <div className='flex flex-col py-1'>
                                    <div className='mb-4'>
                                        <label className=''>Edad</label>
                                        <input 
                                            type='number' 
                                            className='w-full px-4 py-2' 
                                            label='Edad' 
                                            name='Edad' 
                                            value={ data.edad }
                                            onChange={ (e) => setData('edad', e.target.value) } />

                                            <span className='text-red-600'>
                                              { errors.edad }
                                            </span>
                                    </div>
                                </div>                               

                                <div className='flex flex-col py-1'>
                                    <div className='mb-4'>
                                        <label className=''>Telefono</label>
                                        <input 
                                            type='number' 
                                            className='w-full px-4 py-2' 
                                            label='Telefono' 
                                            name='Telefono' 
                                            value={ data.telefono }
                                            onChange={ (e) => setData('telefono', e.target.value) } />

                                            <span className='text-red-600'>
                                              { errors.telefono }
                                            </span>
                                    </div>
                                </div>

                                <div className='flex flex-col py-1'>
                                    <div className='mb-4'>
                                        <label className=''>Direccion</label>
                                        <input 
                                            type='text' 
                                            className='w-full px-4 py-2' 
                                            label='Direccion' 
                                            name='Direccion' 
                                            value={ data.direccion }
                                            onChange={ (e) => setData('direccion', e.target.value) } />

                                            <span className='text-red-600'>
                                              { errors.direccion }
                                            </span>
                                    </div>
                                </div>

                                <div className='mt-4'>
                                  <button type='submit' className='px-6 py-2 text-white bg-green-600 rounded' href={route('cliente.index') }>
                                    Guardar
                                  </button>
                                </div>

                            </form>

                        </div>

                        <div className="p-6 text-gray-900">iniciaste sesion!</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
