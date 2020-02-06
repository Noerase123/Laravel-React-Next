<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\tenantInfo\Tenant;
use App\Models\tenantInfo\Company;
use App\Models\tenantInfo\Rent;
use App\Models\Invoice;
use App\Models\tenantInfo\TenantContract;
use App\Models\tenantInfo\School;

class GenTenantController extends Controller
{
    private $tenant;
    private $company;
    private $rent;
    private $invoice;
    private $tenantContract;
    private $school;
    
    public function __construct(Tenant $tenant, 
            Company $company, Rent $rent, Invoice $invoice, 
            TenantContract $tenantContract, School $school)
    {
        $this->tenant = $tenant;
        $this->company = $company;
        $this->rent = $rent;
        $this->invoice = $invoice;
        $this->tenantContract = $tenantContract;
        $this->school = $school;
    }

    public function getRenter($tenantId) 
    {
        $ten = $this->tenant->find($tenantId);
        if ($ten) {
            $com = $this->company->where('tenant_id',$ten->tenant_id)->first();
            $rent = $this->rent->where('tenant_id',$ten->tenant_id)->first();
            $invoice = $this->invoice->where('tenant_id', $ten->tenant_id)->orderBy('invoice_id', 'DESC')->get();
            $school = $this->school->where('tenant_id', $ten->tenant_id)->first();

            $data = [];
            foreach ($invoice as $key => $value) {
                $data[] = [
                    'invoice_id' => $value->invoice_id,
                    'ref_no' => $value->ref_no,
                    'billingDate' => $value->billingDate,
                    'dueDate' => $value->dueDate,
                    'amount' => $value->amount,
                    'remaining' => $value->remaining,
                    'payment_status' => $value->payment_status,
                    'datePosted' => $value->created_at->format('m/d/Y h:i a')
                ];
            }
        }

        if (is_null($ten)){
            return response()->json([
                'message' => 'Renter not found'
            ],404);
        }
        else {

            if ($ten->tenantType == 1) {

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
                            'contactNum' => $ten->contactNum,
                            'landline' => $ten->landline,
                            'primaryEmail' => $ten->primaryEmail
                        ],
                        'locationInfo' => [
                            'houseNumStr' => $ten->houseNumStr,
                            'city' => $ten->city,
                            'province' => $ten->province,
                            'country' => $ten->country
                        ],
                        'schoolInfo' => [
                            'name' => isset($school->schoolName) ? $school->schoolName : 'no data',
                            'location' => isset($school->schoolLocation) ? $school->schoolLocation : 'no data',
                            'course' => isset($school->course) ? $school->course : 'no data',
                            'batchYear' => isset($school->schoolYear) ? $school->schoolYear : 'no data',
                            'uaap' => isset($school->uaap) ? $school->uaap : 'no data',
                            'ncaa' => isset($school->ncaa) ? $school->ncaa : 'no data',
                            'weeklyOff' => isset($school->weeklyOff) ? $school->weeklyOff : 'no data',
                            'dept' => [
                                'deptHeadname' => isset($school->deptHeadname) ? $school->deptHeadname : 'no data',
                                'deptHeadnumber' => isset($school->deptHeadnumber) ? $school->deptHeadnumber : 'no data',
                            ],
                        ],
                        'rentInfo' => [
                            'building' => [
                                'name' => isset($rent->buildingName) ? $rent->buildingName : 'no data',
                                'room' => [
                                    'roomNumber' => isset($rent->roomNumber) ? $rent->roomNumber : 'no data',
                                    'bed' => isset($rent->bed) ? $rent->bed : 'no data',
                                    'roomType' => isset($rent->roomType) ? $rent->roomType : 'no data',
                                ],  
                            ],
                            'contractDuration' => isset($rent->contractDuration) ? $rent->contractDuration : 'no data',
                            'startDate' => isset($rent->startDate) ? $rent->startDate : 'no data',
                            'endDate' => isset($rent->endDate) ? $rent->endDate : 'no data',
                            'standardRate' => isset($rent->standardRate) ? $rent->standardRate : 'no data',
                            'monthlyDiscount' => isset($rent->monthlyDiscount) ? $rent->monthlyDiscount : 'no data'
                        ],
                        'invoicesInfo' => $data,
                ],200);
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
                                'room' => [
                                    'roomNumber' => isset($rent->roomNumber) ? $rent->roomNumber : 'no data',
                                    'bed' => isset($rent->bed) ? $rent->bed : 'no data',
                                    'roomType' => isset($rent->roomType) ? $rent->roomType : 'no data',
                                ],  
                            ],
                            'contractDuration' => isset($rent->contractDuration) ? $rent->contractDuration : 'no data',
                            'startDate' => isset($rent->startDate) ? $rent->startDate : 'no data',
                            'endDate' => isset($rent->endDate) ? $rent->endDate : 'no data',
                            'standardRate' => isset($rent->standardRate) ? $rent->standardRate : 'no data',
                            'monthlyDiscount' => isset($rent->monthlyDiscount) ? $rent->monthlyDiscount : 'no data'
                        ],
                        'invoicesInfo' => $data,
                ],200);

            }
        }
    }

    public function getContract($tenantId)
    {
        $ten = $this->tenant->find($tenantId);
        if ($ten) {
            $com = $this->company->where('tenant_id',$ten->tenant_id)->first();
            $rent = $this->rent->where('tenant_id',$ten->tenant_id)->first();
            $cont = $this->tenantContract->where('tenant_id', $ten->tenant_id)->first();
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
                        'firstname' => $ten->firstname,
                        'middlename' => $ten->middlename,
                        'lastname' => $ten->lastname,
                        'nickname' => $ten->nickname,
                        'gender' => $ten->gender,
                        'birthdate' => $ten->birthdate,
                        'birthplace' => $ten->birthplace,
                        'tenantType' => $ten->tenantType,
                        'profilePic' => $ten->profilePic,
                    ],
                    'contactInfo' => [
                        'contactNum' => $ten->contactNum,
                        'primaryEmail' => $ten->primaryEmail,
                        'workEmail' => isset($com->workEmail) ? $com->workEmail : 'no data',
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
                        'hrName' => isset($com->hrContactName) ? $com->hrContactName : 'no data',
                        'hrContactNum' => isset($com->hrContactNumber) ? $com->hrContactNumber : 'no data',
                        'workEmail' => isset($com->workEmail) ? $com->workEmail : 'no data',
                        'workingHours' => isset($com->workingHours) ? $com->workingHours : 'no data',
                    ],
                    'rentInfo' => [
                        'buildName' => isset($rent->buildingName) ? $rent->buildingName : 'no data',
                        'roomNumber' => isset($rent->roomNumber) ? $rent->roomNumber : 'no data',
                        'bed' => isset($rent->bed) ? $rent->bed : 'no data',
                        'roomType' => isset($rent->roomType) ? $rent->roomType : 'no data',
                        'contractDuration' => isset($rent->contractDuration) ? $rent->contractDuration : 'no data',
                        'startDate' => isset($rent->startDate) ? $rent->startDate : 'no data',
                        'endDate' => isset($rent->endDate) ? $rent->endDate : 'no data',
                        'standardRate' => isset($rent->standardRate) ? $rent->standardRate : 'no data',
                        'monthlyDiscount' => isset($rent->monthlyDiscount) ? $rent->monthlyDiscount : 'no data'
                    ],
                    'contract' => $cont
            ],200);
        }
    }
}
