<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Building;
use App\Models\Room;
use App\Models\Bed;

class RoomTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(Room $room)
    {
        $build = Building::where('building_id', $room->building_id)->first();
        $bed = Bed::where('bed_id', $room->bed_id)->first();

        return [
            'roomID' => $room->getKey(),
            'buildingName' => $build->buildingName,
            'bedSpace' => $bed->bed_letter,
            'roomNum' => $room->roomNum,
            'roomPrice' => $room->roomPrice,
            'maxPerson' => $room->maxPerson,
        ];
    }
}
