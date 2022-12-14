<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CarController extends Controller
{
    //

    public function index()
    {
        $cars = Car::all();
        return Inertia::render('Cars/Car',['cars'=>$cars]);
    }


    public function Store(Request $request)
    {
        $this->validate($request, [
            'brand' => 'required|string|min:10',
            'color' => 'required|string'
        ]);

        Car::create($request->all());

        return Redirect::route('cars.index');
    }

    public function delete($id)
    {
        $car = Car::findOrFail($id);

        $car->delete();

        return Redirect::route('cars.index');
    }
}
