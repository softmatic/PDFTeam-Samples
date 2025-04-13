import { base64 } from './base64.js';

const url = 'https://api.pdfteam.com/api/add/text';

let params = {
  job: '00012345',
  user: 'YOUR_USERNAME',
  key: 'YOUR_APIKEY',
  test: false,
  inputOptions: {
    source: 'https://pdfteam.com/samples/coyote_report.pdf',
    dat: base64,
  },
  outputOptions: {
    storage: true,
    file: 'addtext.pdf',
  },
  overlays: [
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
    {
      position: {
        x: 'center',
        y: '270mm',
      },
      firstPageOnly: true,
      type: 'text',
      config: {
        data: 'Send comments and suggestions to fatalon@coyoteduty.com. Deadline is April 10.',
        font: 'Helvetica Bold',
        size: 12,
        color: '#0000FF',
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
