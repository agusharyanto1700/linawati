'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  LINAWATI
                </span>
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link href="/">
                <Button variant="outline" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-lg text-gray-600">Kebijakan Privasi LINAWATI</p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>

        <div className="space-y-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Di LINAWATI, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini 
                menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                Anda ketika menggunakan layanan akomodasi kami.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Dengan menggunakan layanan LINAWATI, Anda setuju dengan praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold">Data yang Kami Kumpulkan</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Informasi Pribadi</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon/WhatsApp</li>
                    <li>Alamat email</li>
                    <li>Alamat lengkap</li>
                    <li>Informasi identitas (KTP/SIM)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Informasi Layanan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Tipe akomodasi yang dipilih</li>
                    <li>Durasi sewa</li>
                    <li>Riwayat pembayaran</li>
                    <li>Preferensi kamar</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Informasi Teknis</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Alamat IP</li>
                    <li>Jenis perangkat</li>
                    <li>Browser yang digunakan</li>
                    <li>Waktu akses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">Keamanan Data</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk data pribadi</li>
                <li>Backup data secara teratur</li>
                <li>Update keamanan sistem berkala</li>
                <li>Pelatihan staf tentang keamanan data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Penggunaan Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Data pribadi Anda kami gunakan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses pemesanan akomodasi</li>
                <li>Memberikan konfirmasi dan notifikasi</li>
                <li>Menyediakan layanan pelanggan</li>
                <li>Meningkatkan kualitas layanan</li>
                <li>Mengirim informasi promosi (dengan persetujuan)</li>
                <li>Memenuhi kewajiban hukum</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Berbagi Data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga, 
                kecuali dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dengan persetujuan eksplisit Anda</li>
                <li>Untuk memenuhi layanan yang diminta</li>
                <li>Keamanan atau penegakan hukum</li>
                <li>Transfer bisnis (due diligence, merger, akuisisi)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Hak Anda</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pengguna layanan, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mengakses data pribadi Anda</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi (dalam batas tertentu)</li>
                <li>Menolak penggunaan data untuk marketing</li>
                <li>Meminta salinan data pribadi</li>
                <li>Mengajukan keluhan tentang penggunaan data</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Kontak Privasi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan atau keluhan tentang kebijakan privasi kami, 
                silakan hubungi:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">LINAWATI</p>
                <p className="text-gray-600">Email: privacy@linawati.com</p>
                <p className="text-gray-600">Telepon: 0877-2988-7778</p>
                <p className="text-gray-600">Alamat: KP. RIMPAK TENGAH, Sindangsono, Sindang Jaya, Tangerang</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau email. Penggunaan lanjutan layanan kami setelah 
                perubahan menunjukkan persetujuan Anda terhadap kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Link href="/">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-800 hover:from-blue-700 hover:to-indigo-900">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}