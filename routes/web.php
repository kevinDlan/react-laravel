<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/counter', function(){
    return Inertia::render('Counter');
});

Route::get('/cars',[App\Http\Controllers\CarController::class, 'index'])->name('cars.index');

Route::get('/cars-create', function(){
    return Inertia::render('Cars/CreateCar');
})->name('cars.create');

Route::delete('cars/{id}', [App\Http\Controllers\CarController::class, 'delete'])->name('cars.delete');
Route::post('/create',[App\Http\Controllers\CarController::class,'store']);

Route::get('/destructuring',fn()=> Inertia::render('Destruct/Index'));


Route::get('context', function()
{
    return Inertia::render('Context/Index');
});

Route::get('/lifecycle', function(){
    return Inertia::render('Lifecycle/Index');
});

Route::get('todos', function(){
  return Inertia::render('Todo/Index');
});

Route::get('hooks', function () {
    return Inertia::render('Hooks/UseEffect');
});

route::get('dbz', function () {
    return Inertia::render('Dbz/Index');
});

Route::get('mother',[App\Http\Controllers\MotherController::class, 'index'])->name('mother');

require __DIR__.'/auth.php';
