'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
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
              Terms and Conditions
            </span>
          </h1>
          <p className="text-lg text-gray-600">Syarat dan Ketentuan Layanan LINAWATI</p>
          <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>

        <div className="space-y-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold">Pendahuluan</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di LINAWATI. Syarat dan Ketentuan ini mengatur penggunaan layanan akomodasi 
                yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan 
                ketentuan yang diuraikan di bawah ini.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>LINAWATI</strong> adalah bisnis penyediaan akomodasi yang berlokasi di KP. RIMPAK TENGAH, 
                Sindangsono, Kec. Sindang Jaya, Kab. Tangerang, Provinsi Banten 15561.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold">Definisi</h2>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold mb-1">"Layanan"</h3>
                  <p className="text-gray-600">Merujuk pada semua layanan akomodasi yang disediakan oleh LINAWATI.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">"Pengguna"</h3>
                  <p className="text-gray-600">Individu atau entitas yang menggunakan layanan LINAWATI.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">"Akomodasi"</h3>
                  <p className="text-gray-600">Ruang hunian yang disewakan termasuk kamar, fasilitas, dan area bersama.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-1">"Perjanjian"</h3>
                  <p className="text-gray-600">Kontrak sewa antara Pengguna dan LINAWATI.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-semibold">Kelayakan Pengguna</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Untuk menggunakan layanan LINAWATI, Anda harus:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Berusia minimal 17 tahun atau memiliki persetujuan orang tua/wali</li>
                <li>Memiliki identitas yang sah (KTP/SIM/Paspor)</li>
                <li>Mampu membayar biaya sewa sesuai perjanjian</li>
                <li>Menyediakan informasi yang akurat dan lengkap</li>
                <li>Setuju untuk mematuhi semua peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Pemesanan dan Pembayaran</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Proses Pemesanan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pemesanan dapat dilakukan secara online, telepon, atau langsung</li>
                    <li>Identitas lengkap harus diserahkan saat pemesanan</li>
                    <li>Uang muka minimal 30% diperlukan untuk konfirmasi</li>
                    <li>Pemesanan dikonfirmasi setelah pembayaran uang muka diterima</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Metode Pembayaran</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Transfer bank ke rekening LINAWATI</li>
                    <li>Pembayaran tunai (langsung)</li>
                    <li>E-wallet (jika tersedia)</li>
                    <li>Semua pembayaran harus menggunakan mata uang Rupiah</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kebijakan Pembatalan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Pembatalan 7+ hari sebelum check-in: pengembalian 100% uang muka</li>
                    <li>Pembatalan 3-6 hari sebelum check-in: pengembalian 50% uang muka</li>
                    <li>Pembatalan kurang dari 3 hari: uang muka tidak dikembalikan</li>
                    <li>Pembatalan saat check-in: tidak ada pengembalian</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Peraturan Penghuni</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Semua pengguna wajib mematuhi peraturan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Membayar sewa tepat waktu sesuai jadwal yang ditentukan</li>
                <li>Menjaga kebersihan kamar dan area bersama</li>
                <li>Tidak membawa penghuni ilegal atau tamu yang menginap tanpa izin</li>
                <li>Tidak menggunakan narkoba atau melakukan aktivitas ilegal</li>
                <li>Mematuhi jam malam jika berlaku (biasanya pukul 22:00)</li>
                <li>Tidak merusak fasilitas atau properti LINAWATI</li>
                <li>Mematikan listrik dan air saat tidak digunakan</li>
                <li>Menghormati privasi dan kenyamanan penghuni lain</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-semibold">Pelanggaran dan Sanksi</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Pelanggaran Ringan</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Terlambat membayar sewa (1-3 hari): denda 2% per hari</li>
                    <li>Kebisingan: peringatan tertulis</li>
                    <li>Tidak menjaga kebersihan: peringatan dan biaya cleaning</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Pelanggaran Berat</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Narkoba/alcohol: pemutusan kontrak tanpa pengembalian</li>
                    <li>Kriminalitas: pelaporan ke pihak berwajib</li>
                    <li>Merusak properti: ganti rugi dan pemutusan kontrak</li>
                    <li>Membawa penghuni ilegal: denda dan pemutusan kontrak</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Hak dan Kewajiban LINAWATI</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hak LINAWATI</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Menerima pembayaran sewa tepat waktu</li>
                    <li>Memeriksa kamar dengan pemberitahuan terlebih dahulu</li>
                    <li>Meminta penghuni yang melanggar peraturan untuk pergi</li>
                    <li>Menolak calon penghuni yang tidak memenuhi syarat</li>
                    <li>Menyesuaikan harga sewa dengan pemberitahuan 30 hari</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kewajiban LINAWATI</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Menyediakan akomodasi sesuai deskripsi</li>
                    <li>Memastikan keamanan dan kenyamanan penghuni</li>
                    <li>Memperbaiki kerusakan fasilitas dalam waktu reasonable</li>
                    <li>Menjaga privasi penghuni</li>
                    <li>Memberikan pemberitahuan untuk perubahan penting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Fasilitas dan Layanan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Fasilitas yang tersedia dapat bervariasi tergantung tipe kamar:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Fasilitas Dasar:</strong> Kasur, lemari, meja belajar, kursi</li>
                <li><strong>Fasilitas Tambahan:</strong> AC, WiFi, kamar mandi dalam, TV</li>
                <li><strong>Area Bersama:</strong> Dapur, ruang tamu, jemuran, parkir</li>
                <li><strong>Utilitas:</strong> Listrik, air bersih, keamanan 24 jam</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Biaya tambahan mungkin berlaku untuk penggunaan listrik di atas batas tertentu 
                atau untuk layanan laundry (jika tersedia).
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Privasi dan Keamanan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LINAWATI berkomitmen untuk melindungi privasi dan keamanan penghuni:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Data pribadi akan disimpan sesuai kebijakan privasi kami</li>
                <li>Kunci kamar hanya diberikan kepada penghuni yang bersangkutan</li>
                <li>CCTV dipasang di area umum untuk keamanan bersama</li>
                <li>Staf tidak akan memasuki kamar tanpa izin (kecuali darurat)</li>
                <li>Penghuni bertanggung jawab atas keamanan barang pribadi</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Force Majeure</h2>
              <p className="text-gray-600 leading-relaxed">
                LINAWATI tidak bertanggung jawab atas kegagalan atau keterlambatan dalam pelaksanaan 
                kewajiban jika disebabkan oleh kejadian di luar kendali kami (force majeure), termasuk 
                tetapi tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Bencana alam (gempa bumi, banjir, tsunami)</li>
                <li>Perang, kerusuhan, atau terorisme</li>
                <li>Pemogokan umum</li>
                <li>Kebijakan pemerintah yang memaksa penutupan</li>
                <li>Pemadaman listrik atau air skala besar</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Penyelesaian Sengketa</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sengketa yang timbul dari penggunaan layanan LINAWATI akan diselesaikan melalui:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Musyawarah:</strong> Diskusi antara kedua belah pihak untuk mencari solusi damai</li>
                <li><strong>Mediasi:</strong> Menggunakan pihak ketiga netral untuk membantu penyelesaian</li>
                <li><strong>Litigasi:</strong> Penyelesaian melalui pengadilan di wilayah hukum Tangerang</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Hukum yang berlaku adalah hukum Republik Indonesia dan setiap sengketa akan 
                diselesaikan di Pengadilan Negeri Tangerang.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                LINAWATI berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan 
                diberitahukan melalui:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Pengumuman di lokasi akomodasi</li>
                <li>Website resmi LINAWATI</li>
                <li>Pemberitahuan langsung kepada penghuni</li>
                <li>Media komunikasi lainnya</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Penggunaan lanjutan layanan setelah perubahan menunjukkan persetujuan Anda 
                terhadap syarat dan ketentuan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Kontak dan Informasi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Untuk pertanyaan atau klarifikasi mengenai syarat dan ketentuan ini, hubungi:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold mb-2">LINAWATI</p>
                <p className="text-gray-600">📍 KP. RIMPAK TENGAH, Sindangsono, Sindang Jaya</p>
                <p className="text-gray-600">📍 Kab. Tangerang, Provinsi Banten 15561</p>
                <p className="text-gray-600">📞 0877-2988-7778</p>
                <p className="text-gray-600">✉️ info@linawati.com</p>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Jam Operasional:</strong> Senin - Sabtu (08:00 - 20:00), Minggu (09:00 - 17:00)
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