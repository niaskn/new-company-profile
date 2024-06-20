import Image from "next/image"
const AboutCompany = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-pink-800 mb-4">Our History</h2>
        <p className="text-lg text-brown-100">
        PT. Glamor Beauty Mart was founded in 2010 with a mission to 
        revolutionize the beauty industry. Over the years, 
        we have achieved numerous milestones, including launching innovative beauty 
        products and expanding our reach to a global market.
       </p>
      </section>
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-pink-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="team-member bg-white p-6 rounded-lg shadow-md mx-auto">
            <Image
             src={"https://mediacenter.longines.com/wp-content/uploads/2024/03/2731a293dc25efeb32396a28f03f24cc-2080x1170.jpg.webp"}
             width={500}
             height={400}
             alt={"Barbara Palvin"}
             className="mx-auto p-5"/>
            <h3 className="text-xl font-bold px-6 text-brown-100 mb-2"> Siti Kurnia</h3>
            <p className="text-brown-100 px-6 mb-2">CEO</p>
            <p className="text-brown-100 px-6">Siti has over 20 years of experience in the beauty industry 
              and leads the company with a vision for innovation and excellence.</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-md mx-auto">
            <Image
             src={"https://facts.net/wp-content/uploads/2023/07/46-facts-about-dylan-sprouse-1690299034.jpg"}
             width={500}
             height={400}
             alt={"Dylan Sprouse"}
             className="mx-auto p-5"/>
            <h3 className="text-xl font-bold px-6 text-brown-100 mb-2">Arif Nugraha</h3>
            <p className="text-brown-100 px-6 mb-2">COO</p>
            <p className="text-brown-100 px-6">Arif is an expert in operational 
              management with a proven track record of managing large retail networks efficiently.</p>
          </div>
          <div className="team-member bg-white p-6 rounded-lg shadow-md mx-auto">
            <Image
             src={"https://hips.hearstapps.com/hmg-prod/images/gigi-hadid-walks-the-runway-during-the-stella-mccartney-news-photo-1667839661.jpg?crop=1xw:0.375xh;center,top"}
             width={500}
             height={400}
             alt={"Gigi Hadid"}
             className="mx-auto p-5"/>
            <h3 className="text-xl font-bold px-6 text-brown-100 mb-2">Sarah Hadid</h3>
            <p className="text-brown-100 px-6 mb-2">CFO</p>
            <p className="text-brown-100 px-6">Sarah is a finance professional 
              with a successful history in managing the financial health of retail companies.</p>
          </div>          
        </div>
      </section>
      <section>
        <h2 className="text-4xl font-bold text-pink-800 mb-4">Our Culture</h2>
        <p className="text-brown-100 text-lg mb-4">
        At PT. Glamor Beauty Mart, we foster a culture of innovation, collaboration, and respect. 
        Our team is passionate about beauty and dedicated to delivering exceptional products and services. 
        We believe in creating a positive and inclusive work environment where every team member feels 
        valued and empowered to contribute to our success.
        </p>
        <p className="text-brown-100 text-lg">Our values include: </p>
        <ul className="list-disc list-inside ml-4">
          <li>Innovation: Continuously improving and innovating to meet the needs of our customers.</li>
          <li>Quality: Committing to the highest standards of quality in all our products and services.</li>
          <li>Integrity: Conducting our business with honesty and integrity.</li>
          <li>Customer Focus: Putting our customers at the heart of everything we do.</li>
          <li>Sustainability: Promoting sustainable practices in all aspects of our business.</li>
        </ul>
      </section>
    </main>
  )
}

export default AboutCompany