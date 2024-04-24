import React from "react";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
async function fetchPrivacy() {
  try {
    const res = await fetch(`https://cms.anahataaconnections.com/api/privacy-policy?populate=*`);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
const Privacy = async () => {
  const item = await fetchPrivacy();
  // console.log(item.data.attributes.policy[0].children[0].text); 
  return (
    <main>
    <Navbar/>
    <div className="bg-home-page-back">
        <div className="bg-grey-gradient mx-40 py-20 px-10">
    <div className="font-Pattaya my-4  text-3xl text-[#094C3B]">Privacy Policy</div>
    <p className="font-nota py-2">{item.data.attributes.policy[0].children[0].text}</p>
    <h1 className="font-nota font-bold text-l py-2">Collection of your Information</h1>
    <p className="font-nota py-2">{item.data.attributes.policy[1].children[0].text}</p>
    <p className="font-nota py-2">{item.data.attributes.policy[1].children[0].text}</p>
    <p className="font-nota py-2">{item.data.attributes.policy[1].children[0].text}</p>

    <h1 className="font-nota font-bold text-l py-2">Use of Demographic / Profile Data / Your Information</h1>
    <p className="font-nota py-2">{item.data.attributes.policy[2].children[0].text}</p>
    <p className="font-nota py-2">{item.data.attributes.policy[2].children[0].text}</p>
    <p className="font-nota py-2">{item.data.attributes.policy[2].children[0].text}</p>
    <p className="font-nota py-2">{item.data.attributes.policy[2].children[0].text}</p>

    <h1 className="font-nota font-bold text-l py-5">Cookies</h1>
    <p className="font-nota py-2">{item.data.attributes.policy[2].children[0].text}</p>
    <p className="font-nota py-2">{item.data.attributes.policy[2].children[0].text}</p>

    </div>
    </div>
    <div className='bg-flower_back bg-no-repeat bg-cover pt-40'><Footer/></div>
    </main>
  )};
  export default Privacy;