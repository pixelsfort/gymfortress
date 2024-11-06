<?php

namespace App\Http\Controllers\Api;

use App\Models\Trainer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\TrainerResource;
use App\Http\Requests\Api\TrainerRequest;
use Illuminate\Support\Facades\Validator;

class TrainerController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trainers = Trainer::latest()->paginate(10);
        return $this->sendResponse(TrainerResource::collection(resource: $trainers),  'Trainer listed successfully.');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TrainerRequest $request)
    {
        $validator = Validator::make($request->all(), $request->rules());

        if (!$validator->fails()) {
            $trainer = Trainer::create([
                'firstname'         => $request->firstname,
                'lastname'          => $request->lastname,
                'gender'            => $request->gender,
                'email'             => $request->email,
                'phone'             => $request->phone,
                'dob'               => $request->dob,

                'street_address'    => $request->street_address,
                'city'              => $request->city,
                'state'             => $request->state,
                'zip'               => $request->zip,
                'country'           => $request->country,

                'password'          => $request->password?Hash::make($request->password):'',

                'status' => isset($request->status) ? $request->status:1
            ]);
            return $this->sendResponse(  new TrainerResource($trainer) ,'Trainer created successfully.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $trainer = Trainer::find($id);
        if(empty($membership)){
            return $this->sendError("Trainer not founds!", "");
        }else{
            return $this->sendResponse(new TrainerResource($trainer), 'Trainer shows successfully.');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TrainerRequest $request, string $id)
    {
        $validator = Validator::make($request->all(), $request->rules());

        if (!$validator->fails()) {
            $trainer = Trainer::find($id);
            if(empty($trainer))
            {
                $this->sendError('Trainer not found.');
            }


            $trainer->update([
                'firstname'         => $request->firstname,
                'lastname'          => $request->lastname,
                'gender'            => $request->gender,
                'email'             => $request->email,
                'phone'             => $request->phone,
                'dob'               => $request->dob,

                'street_address'    => $request->street_address?$request->street_address:'',
                'city'              => $request->city?$request->city:'',
                'state'             => $request->state?$request->state:'',
                'zip'               => $request->zip?$request->zip:'',
                'country'           => $request->country?$request->country:'',

                'password'          => $request->password?Hash::make($request->password):'',

                'status' => isset($request->status) ? $request->status:1
            ]);


            return $this->sendResponse(  new TrainerResource($trainer) ,'Trainer updated successfully.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $trainer = Trainer::find($id);
        if(!empty($trainer)){
            $trainer->delete();
            $this->sendResponse(new TrainerResource($trainer), "Trainer deleted successfully.");
        }else{
            $this->sendError('Trainer not found.');
        }
    }
}
