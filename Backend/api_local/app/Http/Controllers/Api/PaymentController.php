<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Payment;
use League\Fractal\Serializer\ArraySerializer;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use App\Http\Requests\StorePaymentRequest;

class PaymentController extends Controller
{
    private $payment;
    public function __construct(Payment $payment)
    {
        $this->payment = $payment;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all = $this->payment->where('is_deleted', 0)->all();

        return response()->json($all, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePaymentRequest $request)
    {
        $input = new Payment;
        $input->tenant_id = $request->tenant_id;
        $input->invoice_id = $request->invoice_id;
        $input->paymentSlip = $request->paymentSlip;
        $input->amount = $request->amount;
        $input->amountByFinance = $request->amountByFinance;
        $input->approved = 0;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'Tenant\'s Payment Received'
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
        $payment = $this->payment->where('is_deleted', 0)->find($id);

        if (is_null($payment)) {
            return response()->json([
                'message' => 'Data not found'
            ],404);
        } else {
            return response()->json($payment,200);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StorePaymentRequest $request, $id)
    {
        $input = $this->payment->where('is_deleted', 0)->find($id);

        if (is_null($input)) {
            return response()->json([
                'message' => 'not found'
            ],404);
        }

        $input->tenant_id = $request->tenant_id;
        $input->invoice_id = $request->invoice_id;
        $input->paymentSlip = $request->paymentSlip;
        $input->amount = $request->amount;
        $input->amountByFinance = $request->amountByFinance;
        $input->approved = $request->approved;
        $input->is_deleted = 0;
        $input->save();

        return response()->json([
            'message' => 'payment Updated Successfully'
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
        // $payment = $this->payment->destroy($id);
        $payment = $this->payment->where('is_deleted', 0)->find($id);

        if (is_null($payment)) {
            return response()->json([
                'message' => 'Data not found'
            ],404);
        }
        else {

            $payment->update([
                'is_deleted' => 1
            ]);

            return response()->json([
                'message' => 'payment Deleted'
            ],200);
        }
    }
}
