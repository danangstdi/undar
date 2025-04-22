export default function Video() {
  return (
    <section id="web-development" className="mt-24 lg:mt-32">
      <div className="text-center">
        {/* <h1 className="text-3xl poppins-bold text-gray-800 dark:text-slate-100">Dengarkan Mars Undar</h1> */}
        <p className="line-height-2 px-3 text-xs text-gray-600 mt-2 lg:px-40 lg:text-base dark:text-slate-300">
          Dengarkan <strong>Mars Undar</strong>
        </p>
        <div className="bg-gray-100 p-4 grid gap-4 items-center my-2 lg:mx-24 lg:gap-x-3 lg:gap-y-8 xl:mx-72 dark:bg-transparent">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/iBSspDNq4D0?si=i3emccosKAeFL7nK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
