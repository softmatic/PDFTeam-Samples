use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let params = std::fs::read_to_string("params.json").unwrap();
    let params_json: serde_json::Value = serde_json::from_str(&params).expect("Malformed JSON");
    let client = reqwest::Client::new();
    let res = client
        .post("https://api.pdfteam.com/api/add/barcode")
        .json(&params_json)
        .send()
        .await?
        .text()
        .await?;

    println!("{}", res);
    Ok(())
}