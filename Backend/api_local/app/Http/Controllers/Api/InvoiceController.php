<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Transformers\invoice\InvoiceTransformer;
use App\Transformers\invoice\TenantInvoiceTransformer;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Http\Requests\StoreInvoiceRequest;
use App\Models\Invoice;
use App\Models\tenantInfo\Tenant;
use App\Models\tenantInfo\Rent;

class InvoiceController extends Controller
{
    private $invoice;
    private $tenant;
    private $rent;

    public function __construct(Invoice $invoice, Tenant $tenant, Rent $rent)
    {
        $this->invoice = $invoice;
        $this->tenant = $tenant;
        $this->rent = $rent;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->invoice->where('is_deleted', 0)->paginate(10);

        return fractal($all, new InvoiceTransformer)
            ->serializeWith(new ArraySerializer)
            ->respond(200);

    }

    public function getTenantInvoice($id)
    {
        $tenInvoice = $this->invoice->where(['is_deleted' => 0,'tenant_id' => $id])->get();

        return fractal($tenInvoice, new TenantInvoiceTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInvoiceRequest $request)
    {
        $ten = $this->tenant->find($request->tenant_id);
        $rent = $this->rent->where('tenant_id', $ten->tenant_id)->first();
        $amount = $request->amount - $rent->monthlyDiscount;

        $input = new Invoice;
        $input->tenant_id = $request->tenant_id;
        $input->ref_no = strtoupper(substr($rent->buildingName,0,3)).$rent->roomNumber.$rent->bed;
        $input->unit_no = $rent->buildingName.' '.$rent->roomNumber;
        $input->billingDate = $request->billingDate;
        $input->dueDate = $request->dueDate;
        $input->amount = $amount;
        $input->remaining = $amount;
        $input->payment_status = 0;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'invoice added successfully'
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
        $invoice = $this->invoice->where('is_deleted', 0)->find($id);

        if (is_null($invoice)) {
            return response()->json([
                'message' => 'invoice not found'
            ],404);
        }
        else {
            return fractal($invoice, new InvoiceTransformer)
                ->serializeWith(new ArraySerializer)
                ->respond(200);
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
        $input = $this->invoice->where('is_deleted', 0)->find($id);

        if (is_null($input)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }
        // $newInvoice->update($request->all());
        $ten = $this->tenant->find($request->tenant_id);
        $rent = $this->rent->where('tenant_id', $ten->tenant_id)->first();

        $input->tenant_id = $request->tenant_id;
        $input->ref_no = strtoupper(substr($rent->buildingName,0,3)).$rent->roomNumber.$rent->bed;
        $input->unit_no = $rent->buildingName.' '.$rent->roomNumber;
        $input->billingDate = $request->billingDate;
        $input->dueDate = $request->dueDate;
        $input->amount = $request->amount;
        $input->remaining = $request->remaining;
        $input->payment_status = $request->payment_status;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'Invoice Updated Successfully'
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
        $invoice = $this->invoice->where('is_deleted', 0)->find($id);

        if (is_null($invoice)) {
            return response()->json([
                'message' => 'not found'
            ]);
        }

        $invoice->update([
            'is_deleted' => 1
        ]);

        return response()->json([
            'message' => 'Invoice '.$id.' ID Deleted'
        ],200);
    }
}
