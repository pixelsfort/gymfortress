<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    use HasFactory;
    protected $fillable = ['firstname', 'lastname', 'gender', 'email', 'phone', 'dob', 'street_address', 'city', 'state', 'zip', 'country', 'password'];
}
