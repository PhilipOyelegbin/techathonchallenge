const Features = () => {
  return (
    <section className="bg-[url(./assets/illustration-laptop-desktop.svg)] bg-no-repeat bg-[position:-30%] bg-[length:50%] text-Dark-blue p-[100px] mt-10">
        <div className="flex items-center py-10">
            <div className="w-1/2"></div>
            <div className="w-1/2">
                <h3>Free, open, simple</h3>
                <p className="my-5">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

                <h3 className='mt-20'>Powerful tooling</h3>
                <p className="my-5">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
            </div>
        </div>
    </section>
  )
}

export default Features