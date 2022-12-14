<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Expr\FuncCall;

class MotherController extends Controller
{
    //

    public function index()
    {
        return Inertia::render('Familly/Home');
    }
}
