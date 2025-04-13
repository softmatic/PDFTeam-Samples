This C# sample demonstrates how to access the PDFTeam add/barcode API endpoint. The sample takes an existing PDF and adds two barcodes: A QR code is positioned in the top right, a Code 128 in the middle left. Both codes are created without human readable text, the Code 128 barcode is rotated 90 degrees. The resulting PDF will be stored in AWS S3, the permalink is returned to the caller.

POST parameters are in a separate file. The sample code expects the params-file to be in the same folder as the executable. Make sure to set a build action so that the file is copied to the output directory.
