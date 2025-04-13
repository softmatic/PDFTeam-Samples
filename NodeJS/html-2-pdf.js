const url = 'https://api.pdfteam.com/api/html/2/pdf';

let params = {
  job: '00012345',
  user: 'YOUR_USERNAME',
  key: 'YOUR_APIKEY',
  test: false,
  inputOptions: {
    source: 'https://pdfteam.com/samples/invoice.html',
    data: '<html>PDFTeam API - Some text</html>',
  },
  outputOptions: {
    storage: true,
    file: '12345.pdf',
  },
  pdfOptions: {
    format: 'A4',
    landscape: false,
    margin: {
      left: '1.80cm',
    },
  },
  overlays: [
    {
      firstPageOnly: true,
      rotate: 0,
      position: {
        x: '165mm',
        y: '245mm',
      },
      type: 'barcode',
      config: {
        type: 19,
        moduleWidth: 0.5,
        data: 'https://pdfteam.com',
      },
    },
    {
      rotate: 45,
      position: {
        x: 'center',
        y: 'middle',
      },
      firstPageOnly: false,
      type: 'text',
      config: {
        data: 'PAST DUE',
        font: 'Helvetica Bold',
        size: 72,
        color: '#ff0000',
        opacity: 0.5,
      },
    },
    {
      rotate: 0,
      position: {
        x: '132mm',
        y: '228mm',
      },
      firstPageOnly: false,
      type: 'imag',
      config: {
        source: 'https://pdfteam.com/samples/acme_logo.png',
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
