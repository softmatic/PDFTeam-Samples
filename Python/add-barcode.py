# Sample code for accesssing the PDFTeam API, endpoint: add/barcode
# Code adds two barcode overlays (QR and Code 128) to a PDF
# Docs: https://pdfteam.com/docs/add-barcode

# Setting "test" to True will not consume any credits but the generated PDF
# carries a watermark.

import requests
import json

url = 'https://api.pdfteam.com/api/add/barcode'

payload = {
  "job":"00012345",
  "user":"YOUR_USERNAME",
  "key":"YOUR_APIKEY",
  "test": True,
  "inputOptions":{
    "source": "https://pdfteam.com/samples/invoice.pdf"
  },
  "outputOptions":{
    "storage":True,
    "file":"barcode_invoice.pdf"
  },
  "overlays":[
    {
      "position":{
        "x":"18mm",
        "y":"25mm"
      },
      "type":"barcode",
      "config":{
        "type":19,
        "data":"https://pdfteam.com"
      }
    },
    {
      "rotate": 90,
      "position":{
        "x":"15mm",
        "y":"middle"
      },
      "type":"barcode",
      "config":{
        "humanReadableText":False,
        "moduleHeight": 10,
        "type":7,
        "data":"00012345"
      }
    }
  ]
}

headers = {
  'content-type': 'application/json'
}

response = requests.request('POST', url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
  result = json.loads(response.text)
  print(result)
else:
  print('Error: ' + response.text)