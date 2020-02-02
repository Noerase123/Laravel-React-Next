<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tenant;
use App\Models\Company;
use App\Models\Rent;

class GenTenantController extends Controller
{
    private $tenant;
    private $company;
    private $rent;
    
    public function __construct(Tenant $tenant, Company $company, Rent $rent)
    {
        $this->tenant = $tenant;
        $this->company = $company;
        $this->rent = $rent;
    }

    public function getRenter($id) 
    {
        $ten = $this->tenant->find($id);
        if ($ten) {
            $com = $this->company->find($ten->tenant_id);
            $rent = $this->rent->find($ten->tenant_id);
        }

        if (is_null($ten)){
            return response()->json([
                'message' => 'Renter not found'
            ],404);
        }
        else {
            return response()->json([
                'tenantID' => $ten->getKey(),
                    'created_at' => $ten->created_at->format('Y/m/d h:i a'),
                    'updated_at' => $ten->updated_at->format('Y/m/d h:i a'),
                    'fullname' => $ten->firstname . ' ' . strtoupper(substr($ten->middlename, 0, 1)) . '. ' . $ten->lastname,
                    'basicInfo' => [
                        'name' => [
                            'firstname' => $ten->firstname,
                            'middlename' => $ten->middlename,
                            'lastname' => $ten->lastname,
                            'nickname' => $ten->nickname,
                        ],
                        'gender' => $ten->gender,
                        'birthdate' => $ten->birthdate,
                        'birthplace' => $ten->birthplace,
                        'tenantType' => $ten->tenantType,
                        'profilePic' => $ten->profilePic,
                    ],
                    'contactInfo' => [
                        'personal' => [
                            'contactNum' => $ten->contactNum,
                            'landline' => $ten->landline,
                            'primaryEmail' => $ten->primaryEmail
                        ],
                        'company' => [
                            'workEmail' => isset($com->workEmail) ? $com->workEmail : 'no data'
                        ]
                    ],
                    'locationInfo' => [
                        'houseNumStr' => $ten->houseNumStr,
                        'city' => $ten->city,
                        'province' => $ten->province,
                        'country' => $ten->country
                    ],
                    'companyInfo' => [
                        'name' => isset($com->companyName) ? $com->companyName : 'no data',
                        'location' => isset($com->companyLocation) ? $com->companyLocation : 'no data',
                        'industry' => isset($com->industry) ? $com->industry : 'no data',
                        'position' => isset($com->position) ? $com->position : 'no data',
                        'monthlySalary' => isset($com->monthlySalary) ? $com->monthlySalary : 'no data',
                        'hr' => [
                            'Name' => isset($com->hrContactName) ? $com->hrContactName : 'no data',
                            'ContactNum' => isset($com->hrContactNumber) ? $com->hrContactNumber : 'no data',
                        ],
                        'workEmail' => isset($com->workEmail) ? $com->workEmail : 'no data',
                        'workingHours' => isset($com->workingHours) ? $com->workingHours : 'no data',
                    ],
                    'rentInfo' => [
                        'building' => [
                            'name' => isset($rent->buildingName) ? $rent->buildingName : 'no data',
                            'bedNum' => isset($rent->bedNumber) ? $rent->bedNumber : 'no data',
                        ],
                        'room' => [
                            'price' => isset($rent->roomPrice) ? $rent->roomPrice : 'no data',
                            'type' => isset($rent->roomType) ? $rent->roomType : 'no data',
                        ],
                        'startDate' => isset($rent->startDate) ? $rent->startDate : 'no data',
                        'endDate' => isset($rent->endDate) ? $rent->endDate : 'no data',
                        'standardRate' => isset($rent->standardRate) ? $rent->standardRate : 'no data',
                        'monthlyDiscount' => isset($rent->monthlyDiscount) ? $rent->monthlyDiscount : 'no data'
                    ]
            ],200);
        }
    }
}
