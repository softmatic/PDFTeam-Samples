using System.Text;

namespace PDFTeam
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var uri = new Uri("https://api.pdfteam.com/api/add/barcode");

            using (var client = new HttpClient())
            {
                StreamReader sr = new StreamReader("params.json");
                string json = sr.ReadToEnd();
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Post,
                    RequestUri = uri,
                    Content = content
                };

                using (var response = await client.SendAsync(request))
                {
                    response.EnsureSuccessStatusCode();
                    var body = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(body);
                }
            }
        }
    }
}