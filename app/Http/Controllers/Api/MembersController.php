<?php

namespace App\Http\Controllers\Api;

#use App\Http\Controllers\Controller;

use App\Models\Member;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\MemberResource;
#use Illuminate\Http\Request;
use App\Http\Requests\Api\MemberRequest;
use Illuminate\Support\Facades\Validator;

class MembersController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $members = Member::latest()->paginate(10);

        // return inertia('Admin/Members', ['members' => $members] );

        // dd($members->total());

        if( $members -> total () > 0){
            return $this->sendResponse(MemberResource::collection(resource: $members),  'Member listed successfully.');
        }else{
            return $this->sendError("Member not found!", "");
        }

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MemberRequest $request)
    {
        $validator = Validator::make($request->all(), $request->rules());

        if (!$validator->fails()) {
            $member = Member::create([
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

                'status' => isset($request->status) ? $request->status:1,

                'hear_about'           => $request->hear_about,
                'emergency_phone'           => $request->emergency_phone,
                'emergency_relation'           => $request->emergency_relation,

                'trainer_id'           => $request->trainer_id,
                'membership_id'           => $request->membership_id,
            ]);

            return $this->sendResponse(  new MemberResource($member) ,'Member created successfully.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $member = Member::find($id);
        if(empty($member)){
            return $this->sendError("Member not founds!", "");
        }else{
            return $this->sendResponse(new MemberResource($member), 'Member shows successfully.');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MemberRequest $request, string $id)
    {
        $validator = Validator::make($request->all(), $request->rules());

        if (!$validator->fails()) {
            $member = Member::find($id);
            if(empty($member))
            {
                $this->sendError('Member not found.');
            }


            $member->update([
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

                'status' => isset($request->status) ? $request->status:1,

                'hear_about'           => $request->hear_about,
                'emergency_phone'           => $request->emergency_phone,
                'emergency_relation'           => $request->emergency_relation,

                'trainer_id'           => $request->trainer_id,
                'membership_id'           => $request->membership_id,
            ]);

            return $this->sendResponse(  new MemberResource($member) ,'Member updated successfully.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $member = Member::find($id);
        if(!empty($member)){
            $member->delete();
            $this->sendResponse(new MemberResource($member), "Member deleted successfully.");
        }else{
            $this->sendError('Member not found.');
        }
    }
}
