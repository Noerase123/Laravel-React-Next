<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
<<<<<<< HEAD
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use App\Models\Tenant;
use Carbon\Carbon;
=======
use App\Http\Requests\StoreTenantRequest;
use App\Transformers\TenantTransformer;
use App\Transformers\TenantOneTransformer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Repositories\Eloquent\EloquentTenantRepository;

use App\Models\Tenant;
use App\Models\Company;
use App\Models\Rent;
>>>>>>> e9f134187e5ef7768505c5a7d792242e0769be07

class TenantController extends Controller
{
    private $tenants;
    private $company;
    private $rent;
    private $tenRepo;

    public function __construct(Tenant $tenant, 
                    Company $company, Rent $rent,
                    EloquentTenantRepository $tenRepo) {
        $this->tenants = $tenant;
        $this->company = $company;
        $this->rent = $rent;
        $this->tenRepo = $tenRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->tenants->paginate(10);

        return fractal($all, new TenantTransformer)
            ->serializeWith(new ArraySerializer)
            // ->paginateWith(new IlluminatePaginatorAdapter($all))
            ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTenantRequest $request)
    {
        $input = $request->all();

        $this->tenants->create($input);

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
        $tenant = $this->tenants->find($id);

        if (is_null($tenant)) {
            return response()->json([
                'message' => 'Not found'
            ],404);
        }
        else {
<<<<<<< HEAD
            return response()->json($tenant,200);
=======
            return response()->json([
                'tenantID' => $val->tenant_id,
                'created_at' => $val->created_at,
                'updated_at' => $val->updated_at,
                'fullname' => $val->firstname . ' ' . strtoupper(substr($val->middlename, 0, 1)) . '. ' . $val->lastname,
                'name' => [
                    'firstname' => $val->firstname,
                    'middlename' => $val->middlename,
                    'lastname' => $val->lastname,
                    'nickname' => $val->nickname,
                ],
                'gender' => $val->gender,
                'birthdate' => $val->birthdate,
                'birthplace' => $val->birthplace,
                'tenantType' => $val->tenantType,
                'profilePic' => $val->profilePic,
                'contactInfo' => [
                    'personal' => [
                        'contactNum' => $val->contactNum,
                        'landline' => $val->landline,
                        'primaryEmail' => $val->primaryEmail
                    ],
                    'company' => [
                        'workEmail' => $com->workEmail,
                        'workContactNum' => $com->hrContactNumber
                    ]
                ],
                'locationInfo' => [
                    'houseNumStr' => $val->houseNumStr,
                    'city' => $val->city,
                    'province' => $val->province,
                    'country' => $val->country
                ],
<<<<<<< HEAD

=======
                'companyInfo' => [
                    'name' => $com->companyName,
                    'location' => $com->companyLocation,
                    'industry' => $com->industry,
                    'position' => $com->position,
                    'monthlySalary' => $com->monthlySalary,
                    'hr' => [
                        'Name' => $com->hrContactName,
                        'ContactNum' => $com->hrContactNumber,
                    ],
                    'workEmail' => $com->workEmail,
                    'workingHours' => $com->workingHours,
                ],
                'rentInfo' => [
                    'building' => [
                        'name' => $rent->buildingName,
                        'bedNum' => $rent->bedNumber,
                    ],
                    'room' => [
                        'price' => $rent->roomPrice,
                        'type' => $rent->roomType,
                    ],
                    'startDate' => $rent->startDate,
                    'endDate' => $rent->endDate,
                    'standardRate' => $rent->standardRate,
                    'monthlyDiscount' => $rent->monthlyDiscount
                ]
                
>>>>>>> e9f134187e5ef7768505c5a7d792242e0769be07
            ],200);
>>>>>>> acdc544595231a0241a4032fdc4d53ed46716742
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tenant = Tenant::findOrFail($id);

        $input = $request->all();

        $tenant->fill($input)->save();

        return response()->json([
            'message' => 'tenant updated successfully'
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->tenants->destroy($id);

        return response()->json([
            'message' => 'tenant has been removed'
        ],200);
    }
}
