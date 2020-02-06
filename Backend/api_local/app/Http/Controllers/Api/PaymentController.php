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
        $all = $this->payment->all();

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
        $input = $request->all();

        $this->payment->create($input);

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
        $payment = $this->payment->find($id);

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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $payment = $this->payment->destroy($id);

        if (is_null($payment)) {
            return response()->json([
                'message' => 'Data not found'
            ],404);
        }
        else {
            return response()->json([
                'message' => 'payment Deleted'
            ],200);
        }
    }
}
