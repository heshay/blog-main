function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20 pt-12">

          {/* CTA box */}
          <div className="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Try out a case today!</h3>
                <p className="text-white text-lg opacity-75">Want to personalise it for your industry and department? Reach out to us at <a className="underline" href="mailto:hello@exec.coach">hello@exec.coach</a></p>
              </div>

              {/* CTA button */}
              <div>
                <a className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white w-36" href="mailto:hello@exec.coach?subject=Can%20I%20start%20my%20trial%3F&body=Hi%20team%2C%0D%0A%0D%0ACould%20you%20please%20start%20my%20trial%20for%20the%20Exec.Coach%3F%0D%0A%0D%0AThanks%2C%0D%0A">Free Trial</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
