<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ProductController;



Route::get('/users', [UserController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
