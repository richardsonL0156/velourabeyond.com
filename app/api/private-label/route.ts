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
      brandName,
      businessType,
      soapType,
      packaging,
      quantity,
      logoDesign,
      launchDate,
      budget,
      message,
    } = body;

    // ==========================
    // SEND TO VELOURA
    // ==========================

    const result = await resend.emails.send({
      from: "Veloura Private Label <quotes@velourabeyond.com>",
      to: ["therealveloura@gmail.com"],
      replyTo: email,
      subject: `New Private Label Inquiry - ${brandName || company || name}`,

      html: `
      <div style="font-family:Arial,sans-serif;max-width:720px;margin:auto">

      <h2 style="color:#C5A572;">
      New Private Label Inquiry
      </h2>

      <table cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;">

      <tr><td><strong>Name</strong></td><td>${name}</td></tr>

      <tr><td><strong>Company</strong></td><td>${company}</td></tr>

      <tr><td><strong>Email</strong></td><td>${email}</td></tr>

      <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>

      <tr><td><strong>Brand Name</strong></td><td>${brandName}</td></tr>

      <tr><td><strong>Business Type</strong></td><td>${businessType}</td></tr>

      <tr><td><strong>Soap Type</strong></td><td>${soapType}</td></tr>

      <tr><td><strong>Packaging</strong></td><td>${packaging}</td></tr>

      <tr><td><strong>Estimated Quantity</strong></td><td>${quantity}</td></tr>

      <tr><td><strong>Logo Design</strong></td><td>${logoDesign}</td></tr>

      <tr><td><strong>Launch Date</strong></td><td>${launchDate}</td></tr>

      <tr><td><strong>Budget</strong></td><td>${budget}</td></tr>

      <tr><td><strong>Project Details</strong></td><td>${message}</td></tr>

      </table>

      </div>
      `,
    });

    if (result.error) {
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
    // CUSTOMER CONFIRMATION
    // ==========================

    await resend.emails.send({
      from: "Veloura Soaps <quotes@velourabeyond.com>",
      to: [email],
      subject: "Your Private Label Project Has Been Received",

      html: `
      <div style="
      max-width:700px;
      margin:auto;
      background:#FCFAF7;
      padding:40px;
      font-family:Arial,sans-serif;
      border-radius:12px;
      ">

      <h1 style="color:#C5A572;margin-bottom:0;">
      Veloura Soaps
      </h1>

      <p style="color:#888;margin-top:6px;">
      Luxury Handmade Soap Manufacturing
      </p>

      <hr style="margin:30px 0;">

      <h2>Hello ${name},</h2>

      <p>
      Thank you for contacting Veloura Soaps regarding your private label project.
      </p>

      <p>
      We've successfully received your inquiry and one of our specialists
      will review your project and prepare recommendations within
      <strong>24 business hours.</strong>
      </p>

      <h3 style="color:#C5A572;margin-top:35px;">
      Project Summary
      </h3>

      <table cellpadding="8" cellspacing="0" style="width:100%;border-collapse:collapse;">

      <tr><td><strong>Brand</strong></td><td>${brandName}</td></tr>

      <tr><td><strong>Business</strong></td><td>${businessType}</td></tr>

      <tr><td><strong>Soap Type</strong></td><td>${soapType}</td></tr>

      <tr><td><strong>Packaging</strong></td><td>${packaging}</td></tr>

      <tr><td><strong>Quantity</strong></td><td>${quantity}</td></tr>

      <tr><td><strong>Launch Date</strong></td><td>${launchDate}</td></tr>

      </table>

      <div style="
      margin-top:40px;
      background:white;
      border:1px solid #eee;
      padding:25px;
      border-radius:10px;
      ">

      <strong>What's Next?</strong>

      <ul>

      <li>We'll review your project.</li>

      <li>We'll recommend the best soap options.</li>

      <li>We'll prepare a customized quotation.</li>

      <li>We'll contact you within one business day.</li>

      </ul>

      </div>

      <p style="margin-top:35px;">
      If you have additional ideas or inspiration, simply reply to this email.
      We'd love to help bring your brand to life.
      </p>

      <hr style="margin:40px 0;">

      <strong>Veloura Soaps</strong><br>

      Luxury Handmade Soap Manufacturing<br><br>

      🌐 https://velourabeyond.com<br>

      📧 therealveloura@gmail.com<br>

      📞 +63 930 482 4079

      </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}