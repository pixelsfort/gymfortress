<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Membership extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'slug', 'subtitle', 'description', 'price', 'discount', 'dicounttype', 'status'];
}
