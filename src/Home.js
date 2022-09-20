import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="img not found" />

                <div className="home__row">
                    {/* products row wise*/}
                    <Product id='122200' title=' Smart Watch ' price={20} image="https://victoriaecommerce.com/wp-content/uploads/2018/05/fitbit-360-product.png" rating={5}/>
                    <Product id='122201' title=' Premium Pencil Colors ' image='https://5.imimg.com/data5/NC/IK/MY-50490048/colour-pencils-500x500.jpg' price={10} rating={3} />
                    
                </div>
                <div className="home__row">
                    {/* products row wise*/}
                    <Product id='122202' title=' DSLR Camera ' image='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' price={40} rating={4} />
                    <Product id='122203' title=' Smart Band ' image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' price={25} rating={5} />
                    <Product id='122204' title=' Echo Dot ' image='https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg' price={10} rating={4}  />

                </div>
                <div className="home__row">
                    {/* products row wise*/}
                    <Product id='122205' title=' Premium Make-Up Kit ' image='https://cdn.theatlantic.com/thumbor/rdSNR99SIzs_99ue9U1SB9JC5y4=/8x353:6016x3732/960x540/media/img/mt/2019/06/GettyImages_926168548/original.jpg' price={50} rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home