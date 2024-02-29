<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cliente = Cliente::all();
        return inertia::render('Cliente/Index', ['clientes' => $cliente]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia::render('Cliente/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Validator::make($request -> all(), [
            'ci' => ['required'],
            'nombres' => ['required'],
            'apellidos' => ['required'],
            'edad' => ['required'],            
            'telefono' => ['required'],
            'direccion' => ['required'],
        ]) -> validate();
   
        Cliente::create($request -> all());
    
        return redirect()->route('cliente.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $cliente = Cliente::find($id);
        return inertia::render('Cliente/Editar', ['clientes' => $cliente]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Validator::make($request -> all(), [
            'ci' => ['required'],
            'nombres' => ['required'],
            'apellidos' => ['required'],
            'edad' => ['required'],            
            'telefono' => ['required'],
            'direccion' => ['required'],
        ]) -> validate();

        Cliente::find($id) -> update($request -> all());
        return redirect() -> route('cliente.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Cliente::find($id) -> delete();
        return redirect() -> route('cliente.index');
    }
}
