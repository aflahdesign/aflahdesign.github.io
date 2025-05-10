fetch("data.json")
  .then(response => response.json())
  .then(data => {
    // Data Mempelai
    document.getElementById("mempelai-lengkap").innerHTML = data.mempelai_lengkap;
    document.getElementById("nama-pria").innerHTML = data.nama_mempelai_pria;
    document.getElementById("nama-wanita").innerHTML = data.nama_mempelai_wanita;

    // Tanggal Acara Cover
    document.getElementById("tanggal-acara").innerHTML = data.tanggal_acara;

    // Nama Lengkap & Ortu
    document.getElementById("nama-panggilan-pria").innerHTML = data.nama_mempelai_pria;
    document.getElementById("nama-lengkap-pria").innerHTML = data.nama_lengkap_pria;
    document.getElementById("ortu-pria").innerHTML = data.ortu_pria;
    document.getElementById("nama-panggilan-wanita").innerHTML = data.nama_mempelai_wanita;
    document.getElementById("nama-lengkap-wanita").innerHTML = data.nama_lengkap_wanita;
    document.getElementById("ortu-wanita").innerHTML = data.ortu_wanita;

    // Data Akad Nikah
    document.getElementById("akad-hari").innerHTML = data.akad_hari;
    document.getElementById("akad-tanggal").innerHTML = data.akad_tanggal;
    document.getElementById("akad-jam").innerHTML = data.akad_jam;
    document.getElementById("akad-keterangan").innerHTML = data.akad_keterangan;
    document.getElementById("akad-alamat").innerHTML = data.akad_alamat;
    
    // Data Resepsi
    document.getElementById("resepsi-hari").innerHTML = data.resepsi_hari;
    document.getElementById("resepsi-tanggal").innerHTML = data.resepsi_tanggal;
    document.getElementById("resepsi-jam").innerHTML = data.resepsi_jam;
    document.getElementById("resepsi-keterangan").innerHTML = data.resepsi_keterangan;
    document.getElementById("resepsi-alamat").innerHTML = data.resepsi_alamat;

    // Cerita Awal
    document.getElementById("cerita-awal").innerHTML = data.cerita_awal;

    // Cerita Lanjutan 1
    document.getElementById("cerita-tahun1").innerHTML = data.cerita_tahun1;
    document.getElementById("cerita-lanjutan1").innerHTML = data.cerita_lanjutan1;

    // Cerita Lanjutan 2
    document.getElementById("cerita-tahun2").innerHTML = data.cerita_tahun2;
    document.getElementById("cerita-lanjutan2").innerHTML = data.cerita_lanjutan2;

    // Rekening
    document.getElementById("rekening-nama").innerHTML = data.rekening_nama;
    document.getElementById("rekening-nomor").innerHTML = data.rekening_nomor;

    // Cover Web
    document.getElementById("cover-nama").innerHTML = data.mempelai_lengkap;
    document.getElementById("cover-tanggal").innerHTML = data.cover_tanggal;

    // Alamat Kado
    document.getElementById("alamat-kado").innerHTML = data.alamat_kado;

    // Mempelai
    document.getElementById("mempelai-lengkap1").innerHTML = data.mempelai_lengkap;
  })
  .catch(error => console.error("Gagal memuat data JSON:", error));
