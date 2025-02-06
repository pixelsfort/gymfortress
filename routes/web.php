<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'canMemberLogin' => Route::has('members/login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Members Route
Route::get('/members', function () {
    return Inertia::render('Admin/Member/Members');
})->middleware(['auth', 'verified'])->name('members');

Route::get('/add-member', function () {
    return Inertia::render('Admin/Member/AddMember');
})->middleware(['auth', 'verified'])->name('add-member');

Route::get('/dropped-members', function () {
    return Inertia::render('Admin/Member/DroppedMembers');
})->middleware(['auth', 'verified'])->name('droped-members');


// Membership Route
Route::get('/membership', function () {
    return Inertia::render('Admin/Membership/Memberships');
})->middleware(['auth', 'verified'])->name('members');


// Trainers Route
Route::get('/trainers', function () {
    return Inertia::render('Admin/Trainer/Trainers');
})->middleware(['auth', 'verified'])->name('trainers');

require __DIR__.'/auth.php';
