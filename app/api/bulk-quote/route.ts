import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      email,
      phone,
      businessType,
      quantity,
      products,
      privateLabel,
      message,
    } = body;

    // ==========================
    // SEND EMAIL TO YOU
    // ==========================

    const result = await resend.emails.send({
      from: "Veloura Quotes <quotes@velourabeyond.com>",
      to: ["therealveloura@gmail.com"],
      subject: `New Bulk Quote Request - ${company || name}`,
      replyTo: email,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:700px">
        <h2>New Bulk Quote Request</h2>

        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">

          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Company</strong></td>
            <td>${company}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><strong>Business Type</strong></td>
            <td>${businessType}</td>
          </tr>

          <tr>
            <td><strong>Estimated Quantity</strong></td>
            <td>${quantity}</td>
          </tr>

          <tr>
            <td><strong>Products</strong></td>
            <td>${products}</td>
          </tr>

          <tr>
            <td><strong>Private Label</strong></td>
            <td>${privateLabel}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>

        </table>
      </div>
      `,
    });

    console.log("========== RESEND RESULT ==========");
    console.log(result);
    console.log("===================================");

    if (result.error) {
      console.error("========== RESEND ERROR ==========");
      console.error(result.error);
      console.error("==================================");

      return NextResponse.json(
        {
          success: false,
          error: result.error,
        },
        {
          status: 500,
        }
      );
    }

    // ==========================
    // SEND CUSTOMER CONFIRMATION
    // ==========================

    await resend.emails.send({
      from: "Veloura Soaps <quotes@velourabeyond.com>",
      to: [email],
      subject: "We've received your quote request",

      html: `
      <div style="
        max-width:700px;
        margin:auto;
        font-family:Arial,sans-serif;
        background:#FCFAF6;
        padding:40px;
        border-radius:12px;
      ">

        <h1 style="
          color:#C5A572;
          margin-bottom:0;
        ">
          Veloura Soaps
        </h1>

        <p style="color:#777;margin-top:5px;">
          Luxury Handmade Soap • Hotels • Resorts • Airbnbs • Spas
        </p>

        <hr style="margin:30px 0;border:none;border-top:1px solid #ddd;">

        <h2>Thank you, ${name}!</h2>

        <p>
          We've successfully received your bulk quote request.
        </p>

        <p>
          Our team is already reviewing your request and will respond within
          <strong>24 hours.</strong>
        </p>

        <h3 style="margin-top:35px;color:#C5A572;">
          Your Request
        </h3>

        <table cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;">

          <tr>
            <td><strong>Company</strong></td>
            <td>${company}</td>
          </tr>

          <tr>
            <td><strong>Business Type</strong></td>
            <td>${businessType}</td>
          </tr>

          <tr>
            <td><strong>Estimated Quantity</strong></td>
            <td>${quantity}</td>
          </tr>

          <tr>
            <td><strong>Products</strong></td>
            <td>${products}</td>
          </tr>

          <tr>
            <td><strong>Private Label</strong></td>
            <td>${privateLabel}</td>
          </tr>

        </table>

        <p style="margin-top:35px;">
          If you'd like to add additional products or information, simply reply
          to this email and we'll include it in your quotation.
        </p>

        <div style="
          margin-top:40px;
          padding:20px;
          background:white;
          border-radius:10px;
          border:1px solid #eee;
        ">

          <strong>Veloura Soaps</strong><br>
          Luxury Handmade Soap<br><br>

          🌐 velourabeyond.com<br>
          📧 therealveloura@gmail.com<br>
          📞 +63 930 482 4079

        </div>

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully.",
      id: result.data?.id,
    });

  } catch (error) {
    console.error("========== SERVER ERROR ==========");
    console.error(error);
    console.error("==================================");

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 500,
      }
    );
  }
}