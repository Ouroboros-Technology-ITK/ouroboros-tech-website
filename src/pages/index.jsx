import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ouroboros Tech | Home</title>
      </Head>
      <section className="flex h-[80vh] w-full flex-row items-center text-white lg:px-[120px]">
        <div className="lg:basis-1/2">
          <h1 className="my-4 text-heading-s md:text-heading-m lg:text-heading-l">
            Selamat Datang di UKM Blockchain Institut Teknologi Kalimantan
          </h1>
          <p className="my-4 text-m-medium">
            Unit Kegiatan Mahasiswa Institut Teknologi Kalimantan yang bergerak
            dibidang IT dan berfokus pada teknologi Blockchain
          </p>
          <div className="flex flex-row gap-4">
            <button
              type="button"
              className="rounded-full border-2 border-primary-active px-4 py-3"
            >
              Tentang Kami
            </button>
            <button
              type="button"
              className="rounded-full border-2 border-primary-active bg-primary-active px-4 py-3"
            >
              Project Kami
            </button>
          </div>
        </div>
        <div className="hidden lg:flex lg:basis-1/2">2</div>
      </section>
      <section className="flex flex-col items-center justify-center bg-primary-second text-white">
        <h1>Deskripsi UKM</h1>
        <p>Paragraph</p>
      </section>
      <section className="flex flex-col items-center justify-center text-white">
        <h1>Heading</h1>
        <p>Paragraph</p>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center bg-primary-second text-white">
        <h1>Kegiatan UKM</h1>
        <p>Paragraph</p>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <button type="button">Lihat Selengkapnya</button>
      </section>
    </>
  );
}
