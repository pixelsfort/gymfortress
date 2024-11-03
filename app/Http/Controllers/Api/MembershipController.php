<?php

namespace App\Http\Controllers\Api;

use App\Models\Membership;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\MembershipResource;
use App\Http\Controllers\Api\BaseController;
use App\Http\Requests\Api\MembershipRequest;

class MembershipController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $memberships = Membership::latest()->paginate(10);
        return $this->sendResponse(MembershipResource::collection(resource: $memberships),  'Membership listed successfully.');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MembershipRequest $request)
    {
        $validator = Validator::make($request->all(), $request->rules());

        if (!$validator->fails()) {
            $membership = Membership::create([
                'title' => $request->title,
                'slug' => Str::slug($request->slug?$request->slug:$request->title),
                'subtitle' => $request->subtitle,
                'description' => $request->description,
                'price' => $request->price,
                'discount' => isset($request->discount)?$request->discount:0,
                'dicounttype' => $request->dicounttype?$request->dicounttype:"percentage",
                'status' => isset($request->status) ? $request->status:1
            ]);
            return $this->sendResponse(  new MembershipResource($membership) ,'Membership created successfully.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $membership = Membership::find($id);
        if(empty($membership)){
            return $this->sendError("Membership not founds!", "");
        }else{
            return $this->sendResponse(new MembershipResource($membership), 'Membership shows successfully.');
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(MembershipRequest $request, string $id)
    {
        $validator = Validator::make($request->all(), $request->rules());

        if (!$validator->fails()) {
            $membership = Membership::find($id);
            if(empty($membership))
            {
                $this->sendError('Membership not found.');
            }
            if($request->slug == null){
                $slug = Str::slug($request->title);
            }else{
                $slug = Str::slug( $request->slug);
            }

            $membership->update([
                'title' => $request->title,
                'slug'  => $slug,
                'subtitle' => $request->subtitle,
                'description'   => $request->description,
                'price' => $request->price,
                'discount' => isset($request->discount)?$request->discount:0,
                'dicounttype' => $request->dicounttype?$request->dicounttype:"percentage",
                'status' => isset($request->status) ? $request->status:1
            ]);


            return $this->sendResponse(  new MembershipResource($membership) ,'Membership updated successfully.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $membership = Membership::find($id);
        if(!empty($membership)){
            $membership->delete();
            $this->sendResponse(new MembershipResource($membership), "Membership deleted successfully.");
        }
    }
}
