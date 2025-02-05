<?php

namespace Database\Factories;


use App\Models\Trainer;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class TrainerFactory extends Factory
{

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'firstname'         => $this->faker->firstName,
            'lastname'          => $this->faker->lastName,
            'gender'            => $this->faker->randomElement(['Male', 'Female', 'Other']),
            'email'             => $this->faker->unique()->safeEmail,
            'phone'             => $this->faker->phoneNumber,
            'dob'               => $this->faker->date('Y-m-d', '2000-01-01'),

            'street_address'    => $this->faker->streetAddress,
            'city'              => $this->faker->city,
            'state'             => $this->faker->state,
            'zip'               => $this->faker->postcode,
            'country'           => $this->faker->country,

            'password'          => Hash::make('password'),
            'status'            => $this->faker->randomElement([0, 1]),
        ];
    }
}
