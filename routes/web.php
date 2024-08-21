<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Members Route
Route::get('/members', function () {
    return Inertia::render('admin/Member/Members');
})->middleware(['auth', 'verified'])->name('members');

Route::get('/add-member', function () {
    return Inertia::render('admin/Member/AddMember');
})->middleware(['auth', 'verified'])->name('add-member');

Route::get('/dropped-members', function () {
    return Inertia::render('admin/Member/DroppedMembers');
})->middleware(['auth', 'verified'])->name('droped-members');


require __DIR__.'/auth.php';
