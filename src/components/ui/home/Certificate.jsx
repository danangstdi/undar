"use client"

import { useState } from "react";
import Link from "next/link";

export default function Certificate() {
  const [popupOpen, setPopupOpen] = useState(false);

  const ListCertif = [
    {title: 'Siswa SMA Darul ‘Ulum Agung (DUA) Malang Kunjungi Universitas Darul ‘Ulum Jombang dalam Rangka Studi Ekskursi', date:'1 February 2025', desc: 'Jombang, 1 Februari 2025 –SMA Darul ‘Ulum Agung (DUA) Malang melakukan kunjungan studi ekskursi ke Universitas Darul ‘Ulum (UNDAR) Jombang', img: 'https://undar.ac.id/wp-content/uploads/2025/02/IMG_20250201_121807-800x445.jpg', link: 'https://undar.ac.id/2025/02/01/siswa-sma-darul-ulum-agung-dua-malang-kunjungi-universitas-darul-ulum-jombang-dalam-rangka-studi-ekskursi/'},
    {title: 'UKM KSR PMI Unit UNDAR Jombang Gelar Pelatihan Pertolongan Pertama, Siapkan Generasi Siaga Bencana', date:'26 January 2025', desc: 'Undar Jombang, Unit Kegiatan Mahasiswa KSR PMI Unit Universitas Darul ‘Ulum (UNDAR) Jombang berhasil menyelenggarakan pelatihan pertolongan pertama dasar dengan', img: 'https://undar.ac.id/wp-content/uploads/2025/01/UKM-PMI-1-800x445.jpg', link: 'https://undar.ac.id/2025/01/26/ukm-ksr-pmi-unit-undar-jombang-gelar-pelatihan-pertolongan-pertama-siapkan-generasi-siaga-bencana/'},
    {title: 'FKIP UNDAR Jombang Gelar Pameran Inovasi, Tampilkan Solusi Kreatif dalam Bimbingan dan Konseling', date:'5 January 2025', desc: 'Jombang, 5 Januari 2025 – Fakultas Keguruan dan Ilmu Pendidikan (FKIP) Universitas Darul ‘Ulum Jombang (UNDAR JOMBANG) sukses menggelar Pameran', img: 'https://undar.ac.id/wp-content/uploads/2025/01/DSC01437-scaled-e1736654143347-800x445.jpg', link: 'https://undar.ac.id/2025/01/05/fkip-undar-jombang-gelar-pameran-inovasi-tampilkan-solusi-kreatif-dalam-bimbingan-dan-konseling/'},
    {title: 'Universitas Darul ‘Ulum Gelar FGD, Kolaborasi Aktif Atasi Pengangguran di Jombang', date:'19 December 2024', desc: 'Jombang, 19 Desember 2024 – Universitas Darul ‘Ulum (Undar) Jombang, melalui Program Pascasarjana, menginisiasi sebuah langkah strategis dalam upaya mengatasi', img: 'https://undar.ac.id/wp-content/uploads/2024/12/IMG-20241220-WA0015-800x445.jpg', link: 'https://undar.ac.id/2024/12/19/universitas-darul-ulum-gelar-fgd-kolaborasi-aktif-atasi-pengangguran-di-jombang/'}
  ]

  return (
    <section id="web-development" className="mt-24 lg:mt-32">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Artikel</h1>
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300">
          Dapatkan berita terbaru <strong>UNDAR Jombang</strong>.
        </p>
        <div className="bg-gray-100 p-4 grid gap-4 items-center my-10 lg:grid-cols-2 lg:mx-24 lg:gap-x-3 lg:gap-y-8 xl:mx-72 dark:bg-transparent">
          {ListCertif.map((post, index) => (
            <Link key={index} href='https://undar.ac.id/2025/02/01/siswa-sma-darul-ulum-agung-dua-malang-kunjungi-universitas-darul-ulum-jombang-dalam-rangka-studi-ekskursi/' className="card-animate group text-start">
              <div className="aspect-[4/2.5] overflow-hidden rounded-xl">
                <img src={post.img} loading="lazy" alt={post.title} className="h-full w-full object-cover group-hover:scale-110 group-hover:duration-300 group-hover:ease-in-out"/>
              </div>
              <div className="card-body px-2">
                <p className="text-[0.8rem] text-gray-400 mt-3">
                  Diterbitkan pada {post.date}
                </p>
                <h4 className="mt-1 font-semibold line-clamp-2 md:text-lg group-hover:underline group-hover:underline-offset-4">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 md:text-sm">
                  {post.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full flex justify-center"> 
          <a href='https://undar.ac.id/category/berita-2/' target="_blank" className="py-3 px-6 text-sm text-white bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full">
            Lihat Lebih Banyak
          </a>
        </div>
      </div>
    </section>
  );
}
