"use client"

import { useState } from "react"

export default function WebDevelopment() {
  const [isShow, setShow] = useState(false)

  return (
    <section id="web-development" className="mt-24 lg:mt-32">
      <div className="text-center">
        <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Sejarah</h1>
        <p className={`${!isShow && 'line-clamp-6'} line-height-2 px-3 text-justify text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300`}>
          Universitas Darul Ulum Jombang (UNDAR) merupakan salah satu perguruan Tinggi yang dikelola oleh Lembaga Yayasan Universitas Darul Ulum. Keberadaannya tidak bisa dilepaskan dari misi besar pendirinya Dr. K.H. Mustain Romly, yaitu   sebagai gerakan Pendidikan yang melakukan pembaharuan diberbagai bidang antara lain ekonomi, sosial, dan keagamaan. Universitas Darul Ulum adalah lembaga pendikan modern yang melakukan kegiatan nyata dalam mencerdaskan kehidupan bangsa. Maka, pengembangan universitas ke depan harus memperhatikan dan memadukan secara terintegratif antara misi Universitas Darul Ulum dengan sistem pendidikan Nasional secara konsisten. Arah pengembangan tersebut setidaknya berdasarkan pada 3 (tiga) hal, yaitu pertama  eksistensi Universitas Darul Ulum tidak dapat dilepaskan dari  Sistem Pendidikan Nasional Republik Indonesia.  Kedua Universitas Darul Ulum adalah institusi penyelenggara pendidikan tinggi yang mempunyai tanggung jawab melahirkan (meluluskan),  sarjana S1 dan S2 yang mempunyai kemampuan menguasai dan mengembangkan ilmu dan kompetensi sesuai bidangnya secara etis dan Islami (berbasis pada nilai-nilai Islam) berdasarkan pada standar kurikulum dan harapan masyarakat sebagai  pengguna jasa lulusan pendidikan tinggi.  Ketiga  pengembangan pendidikan Universitas Darul Ulum harus dilakukan secara terintegrasi  antara misi Universitas Darul Ulum dengan Sistem pendidikan nasional sebagai penyedia jasa bagi masyarakat pengguna. Universitas Darul Ulum  ingin menjadikan kampus bukan sekedar sebagai tempat transformasi ilmu dari pihak dosen kepada mahasiswa yang berlangsung secara formal dan mekanis sifatnya, begitu pula tidak sekedar menyelenggarakan ujian-ujian untuk memperoleh sertifikat dan tanda lulus. Akan tetapi ingin menjadikan dirinya sebagai ”rumah ilmu” sesuai dengan namanya “Darul ‘Ulum”. Yakni sebagai rumah ilmu, penghuninya harus selalu memiliki ciri khas mengedepankan keberanian yang bertanggung jawab, kebebasan yang didasari kekuatan nalar yang kokoh serta keterbukaan dalam menerima segala informasi keilmuan yang diperlukan dengan dilandasi keimanan dan ketakwaan yang mantap. Universitas Darul Ulum terus melakukan pengembangan dan pembaharuan (develop and reform) memasuki usianya yang ke-49 saat ini. Terobosan strategi dan perbaikan berkelanjutan senantiasa dilakukan untuk mewujudkan misi universitas sebagai the miracle university yang memadukan antara kompetensi dan aplikasi keilmuan dan teknologi yang berbasis pada nilai-nilai dan etika islam sebagai landasan bagi perubahan sosial sebagaimana visi, misi, dan tujuan yang telah ditetapkan.
        </p>
      </div>
      <div className="w-full flex justify-center"> 
        <button type="button" onClick={() => setShow(!isShow)} className="py-3 px-6 text-sm bg-emerald-600 rounded-full mt-7">
          {isShow ? 'Baca Lebih Sedikit' : 'Baca Selengkapnya'}
        </button>
      </div>
    </section>
  )
}
