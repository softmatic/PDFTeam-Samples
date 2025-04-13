This Rust sample demonstrates how to access the PDFTeam add/barcode API endpoint. The sample takes an existing PDF and adds two barcodes: A QR code is positioned in the top right, a Code 128 in the middle left. Both codes are created without text line, the Code 128 barcode is rotated 90 degrees. The resulting PDF will be stored in AWS S3, the permalink is returned to the caller.

We are using the reqwest-module with tokio. serde is used to parse the JSON parameters which are loaded from a separate file.
