const url = 'https://api.pdfteam.com/api/txt/2/pdf';

let params = {
  job: 'ACME ANALYSIS',
  user: 'YOUR_USERNAME',
  key: 'YOUR_APIKEY',
  test: true,
  style: {
    fixed: false,
    size: 10,
  },
  inputOptions: {
    source: 'https://pdfteam.com/samples/coyote_report.txt',
  },
  outputOptions: {
    storage: true,
    file: 'report.pdf',
  },
  pdfOptions: {
    format: 'A4',
    landscape: false,
    margin: {
      left: '2cm',
      top: '3cm',
      right: '2cm',
      bottom: '3cm',
    },
  },
  hfOption: {
    footer: '&nbsp;',
    header:
      '<div style="color:#0000ff;font-size: 12px;margin-left:auto;margin-right:auto;">TITLE: <span class="title"></span></div>',
  },
  overlay: [
    {
      firstPageOnly: true,
      rotate: 0,
      position: {
        x: '170mm',
        y: '270mm',
      },
      type: 'barcode',
      config: {
        margin: 0,
        type: 19,
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
        data: 'TOP SECRET',
        font: 'Helvetica Bold',
        size: 72,
        color: '#ff0000',
        opacity: 0.5,
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
