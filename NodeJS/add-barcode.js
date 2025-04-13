import { base64 } from './base64.js';

const url = 'https://api.pdfteam.com/api/add/barcode';

let params = {
  job: '00012345',
  user: 'YOUR_USERNAME',
  key: 'YOUR_APIKEY',
  test: false,
  inputOptions: {
    source: 'https://pdfteam.com/samples/invoice.pdf',
    dat: base64,
  },
  outputOptions: {
    storage: true,
    file: 'addbarcode.pdf',
  },
  overlays: [
    {
      position: {
        x: '172mm',
        y: '228mm',
      },
      type: 'barcode',
      config: {
        data: 'https://pdfteam.com',
      },
    },
    {
      rotate: 90,
      position: {
        x: '15mm',
        y: 'middle',
      },
      type: 'barcode',
      config: {
        humanReadableText: false,
        type: 7,
        moduleHeight: 10,
        data: '00012345',
      },
    },
  ],
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((result) => {
  result.text().then((text) => {
    console.log(text);
  });
});
