<?php

namespace Database\Factories;

<<<<<<< HEAD

use App\Models\Membership;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class MembershipFactory extends Factory
{

=======
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Membership>
 */
class MembershipFactory extends Factory
{
>>>>>>> 4025960 (changes files over ]s)
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
<<<<<<< HEAD
        
        $title = $this->faker->sentence(3);

        return [
            'title'         => $title,
            'slug'          => Str::slug($title),
            'subtitle'      => $this->faker->sentence,
            'description'   => $this->faker->paragraph,
            'price'         => $this->faker->randomFloat(2, 10, 1000),
            'discount'      => $this->faker->randomElement([0, 5, 10, 15, 20]),
            'dicounttype'   => $this->faker->randomElement(['percentage', 'fixed']),
            'status'        => $this->faker->randomElement([0, 1]),
=======
        return [
            //
>>>>>>> 4025960 (changes files over ]s)
        ];
    }
}
