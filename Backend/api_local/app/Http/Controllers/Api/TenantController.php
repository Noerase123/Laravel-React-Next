<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests\StoreTenantRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Transformers\TenantTransformer;
use App\Models\tenantInfo\Tenant;
use App\Models\tenantInfo\Rent;
use App\Models\Building;
use App\Models\User;
use Carbon\Carbon;

class TenantController extends Controller
{
    private $tenants;
    private $company;
    private $rent;
    private $tenRepo;
    private $user;

    public function __construct(Tenant $tenant, User $user) {
        $this->middleware('auth:api')->except('registerTokenfcm');
        $this->tenants = $tenant;
        $this->user = $user;
    }

    public function registerTokenfcm(Request $request, $id) {
        
        $validatedData = $request->validate([
            'push_token' => 'required',
        ]);

        $input = $this->tenants->where(['is_deleted'=> 0, 'tenant_id' => $id]);

        if (is_null($input)) {
            return response()->json([
                'message' => 'No tenant Data'
            ],404);
        }
        else {

            $input->update([
                'push_token' => $request->push_token
            ]);

            return response()->json([
                'message' => 'tenant token updated successfully'
            ],200);
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->tenants->where('is_deleted', 0)->paginate(10);

        return fractal($all, new TenantTransformer)
            ->serializeWith(new ArraySerializer)
            // ->paginateWith(new IlluminatePaginatorAdapter($all))
            ->respond(200);
    }

    public function accessMembership($id) 
    {
        $rent = Rent::where(['is_deleted' => 0, 'tenant_id' => $id])->first();

        if (is_null($rent)) {
            
            return response()->json([
                'message' => 'Not Found'
            ],404);
        } 
        else {

            $build = Building::where(['is_deleted' => 0, 'buildingName' => $rent->buildingName])->first();
            $access = [];
    
            if ($build->category == 'First Class') {
                $access['validAccess'] = 1;
                $access['message'] = $build->category;
                $access['payment'] = 0;
            } else {
                $access['validAccess'] = 0;
                $access['message'] = $build->category;
                $access['payment'] = 250;
            }
            return response()->json($access,200);
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTenantRequest $request)
    {
        $input = new Tenant;
        $input->profilePic = $request->profilePic;
        $input->push_token = "";
        $input->firstname = $request->firstname;
        $input->middlename = $request->middlename;
        $input->lastname = $request->lastname;
        $input->nickname = $request->nickname;
        $input->contactNum = $request->contactNum;
        $input->landline = $request->landline;
        $input->birthdate = $request->birthdate;
        $input->birthplace = $request->birthplace;
        $input->tenantType = $request->tenantType;
        $input->primaryEmail = $request->primaryEmail;
        $input->gender = $request->gender;
        $input->country = $request->country;
        $input->province = $request->province;
        $input->city = $request->city;
        $input->houseNumStr = $request->houseNumStr;
        $input->slug = Carbon::now()->timestamp;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'tenant added successfully'
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tenant = $this->tenants->where('is_deleted', 0)->find($id);

        if (is_null($tenant)) {
            return response()->json([
                'message' => 'Not found'
            ],404);
        }
        else {
            return response()->json($tenant,200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreTenantRequest $request, $id)
    {
        $input = $this->tenants->where('is_deleted', 0)->find($id);

        if (is_null($input)) {
            return response()->json([
                'message' => 'No tenant Data'
            ],404);
        }
        else {

            $input->profilePic = $request->profilePic;
            $input->firstname = $request->firstname;
            $input->middlename = $request->middlename;
            $input->lastname = $request->lastname;
            $input->nickname = $request->nickname;
            $input->contactNum = $request->contactNum;
            $input->landline = $request->landline;
            $input->birthdate = $request->birthdate;
            $input->birthplace = $request->birthplace;
            $input->tenantType = $request->tenantType;
            $input->primaryEmail = $request->primaryEmail;
            $input->gender = $request->gender;
            $input->country = $request->country;
            $input->province = $request->province;
            $input->city = $request->city;
            $input->houseNumStr = $request->houseNumStr;
            $input->save();

            return response()->json([
                'message' => 'tenant updated successfully'
            ],200);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // $this->tenants->destroy($id);

        $tenant = $this->tenants->where('is_deleted', 0)->find($id);

        if (is_null($tenant)) {
            return response()->json([
                'message' => 'tenant not exist'
            ],404);
        }

        $tenant->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'tenant has been removed'
        ],200);
    }
}
