import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();

    // Validasi input
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Semua field harus diisi' },
        { status: 400 }
      );
    }

    // Simpan pesan (dalam aplikasi nyata, ini akan disimpan ke database)
    const contactMessage = {
      name,
      phone,
      message,
      timestamp: new Date().toISOString(),
      company: 'LINAWATI'
    };

    console.log('Contact message received:', contactMessage);

    // Kirim notifikasi menggunakan ZAI (opsional)
    try {
      const zai = await ZAI.create();
      
      const notification = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a notification assistant for LINAWATI accommodation business.'
          },
          {
            role: 'user',
            content: `New contact form submission:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}\n\nPlease acknowledge this message.`
          }
        ],
      });

      console.log('AI Notification sent:', notification.choices[0]?.message?.content);
    } catch (aiError) {
      console.error('Failed to send AI notification:', aiError);
      // Tetap lanjutkan meskipun AI notification gagal
    }

    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.',
      data: contactMessage
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}