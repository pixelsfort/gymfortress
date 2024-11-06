<?php

use App\Http\Controllers\Api\MembersController;
use App\Http\Controllers\Api\MembershipController;
use App\Http\Controllers\Api\TrainerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//Route::get('memberships', [MembershipController::class, 'index']);

Route::apiResource('memberships', MembershipController::class);

Route::apiResource('members', MembersController::class);

Route::apiResource('trainers', TrainerController::class);
