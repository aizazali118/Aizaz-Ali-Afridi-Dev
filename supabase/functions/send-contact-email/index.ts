import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.38.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    const supabase = createClient(supabaseUrl!, supabaseServiceRoleKey!);

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ]);

    if (error) {
      console.error("Database error:", error);
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to save submission",
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const emailBody = `
<html>
  <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
      <h2 style="color: #3b82f6; margin-top: 0;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
    </div>
    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
      <h3 style="color: #1f2937; margin-top: 0;">Message:</h3>
      <p style="line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</p>
    </div>
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
      <p style="color: #6b7280; font-size: 14px;">
        This email was sent from your portfolio contact form.<br>
        Reply directly to this email to respond to ${name}.
      </p>
    </div>
  </body>
</html>
    `;

    const autoReplyBody = `
<html>
  <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #3b82f6;">Thank You for Your Message!</h2>
    </div>
    <p style="font-size: 16px; line-height: 1.6; color: #374151;">Hi ${name},</p>
    <p style="font-size: 16px; line-height: 1.6; color: #374151;">
      Thank you for reaching out! I've received your message and will get back to you as soon as possible, usually within 24 hours.
    </p>
    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e5e7eb;">
      <h3 style="color: #1f2937; margin-top: 0;">Your Message Summary:</h3>
      <p><strong>Subject:</strong> ${subject}</p>
      <p style="white-space: pre-wrap;"><strong>Message:</strong> ${message}</p>
    </div>
    <p style="font-size: 16px; line-height: 1.6; color: #374151;">
      In the meantime, feel free to check out my portfolio or connect with me on social media.
    </p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://wa.me/923359574017" style="background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; display: inline-block; margin: 0 10px; font-weight: bold;">
        WhatsApp Me
      </a>
    </div>
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
      <p style="color: #6b7280; font-size: 14px;">
        Best regards,<br>
        <strong>Aizaz Ali</strong><br>
        Frontend Developer<br>
        aaizaz519@gmail.com
      </p>
    </div>
  </body>
</html>
    `;

    const resend = Deno.env.get("RESEND_API_KEY");

    if (resend) {
      try {
        await Promise.all([
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resend}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "contact@aizazali.dev",
              to: "aaizaz519@gmail.com",
              subject: `Portfolio Contact: ${subject}`,
              html: emailBody,
              replyTo: email,
            }),
          }),
          fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${resend}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "contact@aizazali.dev",
              to: email,
              subject: "Thank you for contacting me!",
              html: autoReplyBody,
            }),
          }),
        ]);
      } catch (emailError) {
        console.error("Email sending error:", emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Submission received successfully!",
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
