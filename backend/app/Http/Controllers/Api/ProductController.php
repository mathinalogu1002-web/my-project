<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // GET /api/products
    public function index()
    {
        // return all products, you can paginate if many rows
        return response()->json(Product::orderBy('id', 'desc')->get());
    }
}
