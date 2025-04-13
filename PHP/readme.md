This PHP sample demonstrates how to access the PDFTeam add/barcode API endpoint. The sample takes an existing PDF and adds two barcodes: A QR code (type: 19) is positioned in the top right, a Code 128 (type: 7) at the left margin. Both codes are created without human readable text, the Code 128 barcode is rotated 90 degrees. The resulting PDF will be stored in AWS S3, link to the document is then returned in the response.

Sample code assumes PHP 8.x, cURL is used for accessing the API. Verify with phpinfo() that cURL support is enabled.
