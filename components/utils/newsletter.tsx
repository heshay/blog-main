
export async function subscribeCustomerIo(email: String) {
  const resp = await fetch("https://hooks.airtable.com/workflows/v1/genericWebhook/appm0Sh6EQZ4NZXjL/wflEVQkL7spSPXecQ/wtr2HqH39AP7HX1Fd", {
    method: "POST",
    headers: {
      "Authorization": `Basic ${process.env.NEXT_PUBLIC_CUSTOMER_IO_FORM_AUTH}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "data" : {
        email,
        "newsletter_sub": "true"
      }
    })
  });
  return resp.ok;
}