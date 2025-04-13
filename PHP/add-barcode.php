<?php 
    $params = array(
        "job" => "ACME ANALYTICS",
        "user" => "YOUR_USERNAME",
        "key" =>  "YOUR_APIKEY",
        "inputOptions" => array (
            "source" => "https://pdfteam.com/samples/invoice.pdf"
        ),
        "outputOptions" => array(
            "storage" => true,
            "file" => "addbarcode.pdf"
        ),
        "overlays" => array(
            array(
                "position" => array(
                    "x" => "179mm",
                    "y" => "237mm"
                ),
                "type" => "barcode",
                "type" => 19,
                "config" => array(
                    "data" => "https://pdfteam.com"
                )
            ),
            array(
                "rotate" => 90,
                "position" => array(
                    "x" => "10mm",
                    "y" => "middle"
                ),
                "type" => "barcode",
                "config" => array(
                    "humanReadableText" => false,
                    "type" => 7,
                    "moduleHeight" => 10,
                    "data" => "00012345"
                )
            )  
        )
    );

    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "https://api.pdfteam.com/api/add/barcode",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => json_encode($params),
        CURLOPT_HTTPHEADER => [
            "content-type: application/json",
        ],
    ]);

    $response = curl_exec($curl);
    echo($response);
    curl_close($curl);
?>