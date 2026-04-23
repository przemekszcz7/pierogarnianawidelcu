import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, Facebook, ChevronRight, Star, Heart, Instagram } from 'lucide-react';

const MENU_ITEMS = {
  portions: [
    { name: 'Pierogi tradycyjne (8 szt.)', price: '24 zł', extra: '+ surówka +4 zł' },
    { name: 'Pierogi tradycyjne (12 szt.)', price: '30 zł', extra: '+ surówka +4 zł' },
    { name: 'Pierogi na słodko (8 szt.)', price: '24 zł', info: 'z polewą i śmietanką' },
    { name: 'Pierogi na słodko (12 szt.)', price: '28 zł', info: 'z polewą i śmietanką' },
    { name: 'Pielmieni (20 szt.)', price: '30 zł' },
  ],
  savory_kg: [
    { name: 'Pierogi z Mięsem', price: '52 zł/kg' },
    { name: 'Pierogi z Mięsem i żurawiną', price: '53 zł/kg' },
    { name: 'Pierogi z kapustą i grzybami', price: '54 zł/kg' },
    { name: 'Pierogi Ruskie', price: '46 zł/kg' },
    { name: 'Pierogi Chłopskie', price: '48 zł/kg' },
    { name: 'Pierogi ze Szpinakiem', price: '48 zł/kg' },
    { name: 'Pierogi z Pomidorami', price: '46 zł/kg' },
    { name: 'Pierogi Wiejskie', price: '48 zł/kg' },
    { name: 'Pierogi z Pieczarkami i żółtym serem', price: '50 zł/kg' },
    { name: 'Pierogi z Suszonymi pomidorami i mozzarellą', price: '60 zł/kg' },
  ],
  sweet_kg: [
    { name: 'Pierogi Słodkie', price: '46 zł/kg' },
    { name: 'Pierogi z Owocami', price: '55 zł/kg' },
  ],
  sides: [
    { name: 'Kopytka', price: '32 zł/kg' },
    { name: 'Kluski śląskie', price: '32 zł/kg' },
    { name: 'Okrasa (cebula + boczek)', price: '8 zł' },
    { name: 'Surówka', price: '10 zł' },
    { name: 'Opakowanie na wynos', price: '1 zł' },
    { name: 'Reklamówka', price: '1 zł' },
  ]
};

const GALLERY_IMAGES = [
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/666273919_122164366868896977_5450748876972174567_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Ntshvw-O76EQ7kNvwGV5Io1&_nc_oc=AdoRr2Nr2Y1sbIbR77cySvSFaamSBCZHmmShwAbOwSu89E3xTIIPP86gOtECpSbFHXU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=RWuQWUeLdaLMY4WDSLkdow&oh=00_Af3b8pumZmAsSL1ljjo4sBz1T16G_y9luQqmCXVKsX9C_Q&oe=69EF941B",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/645614765_122160615590896977_7089513113110387839_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=GI3zOE_Po-AQ7kNvwGhRSJ6&_nc_oc=AdqgAwcSfB7qSyK-TzfWjEDO5wYNl4dcpK30YNOKmXSxDQpZGOKcbKBklsN9qZz2AX4&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=PHEnMVEWmbICpUF9v_rdGw&oh=00_Af353cNR4xT7F7qBpfNvAxLkCQU9RZoPRthCKPZN0Pqifg&oe=69EFB6A3",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/641617960_122160008444896977_5243057087580369862_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=RA4-Efa2Ng4Q7kNvwFEQzPe&_nc_oc=Adp_DK478pzYfMU4XscA-aQqof5U1d8r5e0uXh75dgkbdGw9-35L8eU2oE75SZ6CwHc&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=eL1MbAK1GZhL27Lp2rarGQ&oh=00_Af2VxKPIXB5uzHYhkN_0sT2_EhXT7ZfJ22cy2UijS8ghGA&oe=69EFAF39",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/624880461_122156907242896977_611635476558241060_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=F-iT7TqQsycQ7kNvwG5ykSf&_nc_oc=Adrr2UHapW9TcL-BFC_Ay0mVky9FryxxEEqhFzOxfQGHY70fuI9Hj-8_ZSJkNDzz_7U&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=FuYbcSx8G4w2GzNdBQ3A6g&oh=00_Af12XRIh1YcHDOgrNMn4gBILa0WgaaSisOnLXRDjFRR-dQ&oe=69EF9834",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/623289277_122156570042896977_2937387856712318469_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_ohc=7Qh_MZmFp5YQ7kNvwFU9Khb&_nc_oc=Adp1hYRaTJz5ZyKUtF3cOwbL8UTtTyKLhU7_KG2yg3hmc7hSnTBpG0m1BFg09VbkqTI&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-1.xx&_nc_gid=ItTFzb768Rj-4DyoasDFKg&oh=00_Af3WRo3lPN8NlQAaDqTwAwKFOCB6FgXCo5_QjtA6_TSg6w&oe=69EFB40E",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/621814042_122156455580896977_1064227494312109082_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=V_fjrZyFExkQ7kNvwHBd89R&_nc_oc=AdoTavznQNNqlOIZGcIcAkfRJxl-HcBrj-QI_R6UeU6cChC5AyU9Wl9v6WFfApZfpxg&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=e2rYw0wmzGbpjH3C8NmvcQ&oh=00_Af1t8s8-9JwuJLwI6sskMioadJG6vMP_bKp5JYRvcf8sMg&oe=69EF9B71",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/556915502_122138651180896977_5695326214572579645_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MqbNiCZzAy0Q7kNvwGu_ExD&_nc_oc=AdpBEDRkjfHSQSQjim5plEYc_EaAKHl77tA9RH8YQM6ipxVcJrSYtSSOtUnPJlbU_8o&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=raHVcCySF342zxnGVre0Mw&oh=00_Af1Eq3WxzHX1c57kBFMfE4K23q44uJoQl7w6ke7GKRf8xg&oe=69EF9927",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/557630906_122138457722896977_2694623455709225603_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=UE7h9jONd6IQ7kNvwFZmhf-&_nc_oc=AdqN1t2OSl_2hqU6ZUPtxq6ykekkUJHu4-TIW574VHIGlHpAlESg51-5iqIp819udQs&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=3pJd-5Z7jQPJdfbJxxNrwg&oh=00_Af2VMeTvH85nUwZ7gU1UJMBQ1Y1g2EZAdu4HsWhnu-wS9g&oe=69EFB884",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/556817070_122138452916896977_774721579180766400_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=2jqjurEm94EQ7kNvwFTW53s&_nc_oc=AdohvU_SvBXC5CLTzZ3p5UE2SryYw_0-MxkEP1hwVHFPP51_EjypMJzXainiQvDCsnY&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=x4ieQYAi750KTD5JEXzBsA&oh=00_Af1A5Y0cib9WHvTFFZIdXYa3iytkx2P-1FQh-zrGJ2RsnQ&oe=69EF9D8C",
  "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/547025254_122135460962896977_871662592641465060_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hWBRXZHIZCwQ7kNvwHB9cUt&_nc_oc=Adro8STQkBwnLLwZ8W0n8gyD6g7MHi6f9FgO4936ud8rkLlOcijTM2D5aA_PVviZmpE&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=rOZQv-Tjz_StnL2212pxdA&oh=00_Af0-WNX3UCLpm7KvDhyOpPsz-okjFMYSOQek6DzegwXqoQ&oe=69EF8DAE",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/546644766_122134844462896977_5297364996822570903_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_ohc=u0TnHX_IbiEQ7kNvwGWwWyf&_nc_oc=Ador55dF18jyP-n4CilCj1UgEn5JTke7RC0NvcAkJEP7MK3AkDixTyTF9nfCXtwkp_o&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Xz1TcB5ym8QsKqiUF--xzQ&oh=00_Af3WyxSbMrO8tx4kBa2XxRamnI3IJv4Mjwn_nynmFO_DQw&oe=69EF91F4",
  "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/525757994_122125345784896977_341882764266807637_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Mz4aFAx3kGAQ7kNvwECmTaR&_nc_oc=Adof8ast3LOPJSqjWUxYhGfZunnH5rSPMuOO2sUMrZnAzOFdjIrLi3zqz8dYfgNS19g&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=iUt8YcVmM2WOiWF3wxpNJg&oh=00_Af2YcejMe6zdszsGhvldIZodcG73erYLiHFhXvj-xROVKQ&oe=69EF90D9"
];

const FB_URL = "https://www.facebook.com/profile.php?id=61576909337741";
const FB_REVIEWS_URL = "https://www.facebook.com/profile.php?id=61576909337741&sk=reviews";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen font-['Inter'] text-stone-800">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/522640188_122124524516896977_2316736030540441471_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=6Lru9VtVoYIQ7kNvwGiAcwW&_nc_oc=AdoAvrXtGa450yI0ZTbUshYoPWf8hhYK09Gd9a54iKMszaMXcfdThmby0FYDmv45MhU&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Ue7tqqS_HA6Q7pjnTm8peg&oh=00_Af0EIr0Slj1FsrBRqZnYPyMhqIfxbyHK7TSF2uEivveWeQ&oe=69EF9B17" 
              className="w-12 h-12 rounded-full border-2 border-[#e63946]"
              alt="Logo"
            />
            <h1 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold tracking-tight text-stone-900">
              Pierogarnia <span className="text-[#e63946]">na widelcu</span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#e63946] transition-colors">O nas</a>
            <a href="#menu" className="hover:text-[#e63946] transition-colors">Menu</a>
            <a href="#gallery" className="hover:text-[#e63946] transition-colors">Galeria</a>
            <a href="#contact" className="hover:text-[#e63946] transition-colors">Kontakt</a>
          </nav>
          <a 
            href={`tel:663580745`} 
            className="hidden sm:flex items-center gap-2 bg-[#e63946] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#d62828] transition-colors shadow-lg shadow-red-500/20"
          >
            <Phone size={18} />
            663 580 745
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50"></div>
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-red-100 text-[#e63946] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
              <Heart size={16} fill="currentColor" />
              Ręcznie lepione z miłością
            </div>
            <h2 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold text-stone-900 leading-tight">
              Domowe smaki, <br />
              <span className="italic text-[#e63946]">naturalne</span> składniki.
            </h2>
            <p className="text-lg text-stone-600 max-w-md leading-relaxed">
              Odkryj prawdziwy smak tradycji w sercu Otwocka. Codziennie świeże, 
              ręcznie lepione pierogi według domowych receptur.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="px-8 py-4 bg-[#e63946] text-white rounded-xl font-bold hover:bg-[#d62828] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-500/30">
                Zobacz Menu
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border border-stone-200 text-stone-800 rounded-xl font-bold hover:border-[#e63946] hover:text-[#e63946] transition-all flex items-center gap-2">
                <Facebook size={20} />
                Facebook
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl skew-y-2 transform hover:skew-y-0 transition-transform duration-700">
              <img 
                src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/645614765_122160615590896977_7089513113110387839_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=GI3zOE_Po-AQ7kNvwGhRSJ6&_nc_oc=AdqgAwcSfB7qSyK-TzfWjEDO5wYNl4dcpK30YNOKmXSxDQpZGOKcbKBklsN9qZz2AX4&_nc_zt=23&se=-1&_nc_ht=scontent-waw2-2.xx&_nc_gid=PHEnMVEWmbICpUF9v_rdGw&oh=00_Af353cNR4xT7F7qBpfNvAxLkCQU9RZoPRthCKPZN0Pqifg&oe=69EFB6A3" 
                className="w-full h-full object-cover"
                alt="Smaczne pierogi"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-stone-100 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Star fill="currentColor" size={24} />
                </div>
                <div>
                  <p className="font-bold text-stone-900">Najlepsze w mieście</p>
                  <p className="text-sm text-stone-500">Według opinii na FB</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <img 
                src="https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/555540249_122139240644896977_7050065221200656184_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0MdhjuztZqMQ7kNvwFIJhre&_nc_oc=AdqUVdTahuB7jmO90eGslNIEQb416M7_OQeu8CBrEboorurdCqcJeirulxgIN-6B-UA&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=CgflCbpZVrytVK7NOAnCQw&oh=00_Af1MiXciJuXU4o4dcNT9XWm_JqG-zssXI04_G0QnlggLbQ&oe=69EF88F7" 
                className="w-full rounded-3xl shadow-xl"
                alt="O nas - Pierogarnia na widelcu"
              />
            </motion.div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-4xl font-['Playfair_Display'] font-bold text-stone-900 italic underline decoration-[#e63946] underline-offset-8">O nas</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                Pierogarnia na widelcu to miejsce, w którym czas się zatrzymał, a smak przywołuje najpiękniejsze wspomnienia z babcinej kuchni. 
                Naszą pasją jest tworzenie pierogów, które są nie tylko posiłkiem, ale prawdziwym doświadczeniem kulinarnym.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-stone-50 rounded-2xl border-l-4 border-[#e63946]">
                  <h4 className="font-bold text-stone-900 mb-1">Ręcznie lepione</h4>
                  <p className="text-sm text-stone-500">Każdy pieróg przechodzi przez troskliwe dłonie naszych kucharek.</p>
                </div>
                <div className="p-4 bg-stone-50 rounded-2xl border-l-4 border-[#e63946]">
                  <h4 className="font-bold text-stone-900 mb-1">Naturalne</h4>
                  <p className="text-sm text-stone-500">Bez sztucznych dodatków, tylko to, co daje nam polska wieś.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-[#fdfbf7]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-['Playfair_Display'] font-bold text-stone-900 uppercase tracking-tighter">Menu Pierogów</h2>
            <div className="w-24 h-1 bg-[#e63946] mx-auto"></div>
            <p className="text-stone-500">Świeże na miejscu lub na wagę do domu</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Portions */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100"
            >
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-stone-900 mb-8 border-b pb-4 flex items-center gap-2">
                <ChevronRight className="text-[#e63946]" /> 
                Porcje (Na miejscu/wynos)
              </h3>
              <div className="space-y-6">
                {MENU_ITEMS.portions.map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex justify-between items-start gap-4 group">
                    <div>
                      <p className="font-bold text-stone-900 group-hover:text-[#e63946] transition-colors">{item.name}</p>
                      {item.info && <p className="text-xs text-stone-400 mt-1">{item.info}</p>}
                      {item.extra && <p className="text-xs text-[#e63946] font-medium mt-1">{item.extra}</p>}
                    </div>
                    <span className="font-black text-stone-900 whitespace-nowrap">{item.price}</span>
                  </motion.div>
                ))}
              </div>
              
              <h3 className="text-2xl font-['Playfair_Display'] font-bold text-stone-900 mt-12 mb-8 border-b pb-4 flex items-center gap-2">
                <ChevronRight className="text-[#e63946]" /> 
                Dodatki
              </h3>
              <div className="space-y-6">
                {MENU_ITEMS.sides.map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex justify-between items-start gap-4">
                    <p className="font-bold text-stone-900">{item.name}</p>
                    <span className="font-black text-stone-900 whitespace-nowrap">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Per KG */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-stone-900 mb-8 border-b pb-4 flex items-center gap-2">
                  <ChevronRight className="text-[#e63946]" /> 
                  Pierogi Wytrawne (na wagę)
                </h3>
                <div className="grid sm:grid-cols-1 gap-6">
                  {MENU_ITEMS.savory_kg.map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex justify-between items-center group">
                      <p className="font-medium text-stone-700 group-hover:text-[#e63946] transition-colors">{item.name}</p>
                      <div className="flex-1 border-b border-dotted border-stone-200 mx-4 h-4"></div>
                      <span className="font-black text-stone-900">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
                <h3 className="text-2xl font-['Playfair_Display'] font-bold text-stone-900 mb-8 border-b pb-4 flex items-center gap-2">
                  <ChevronRight className="text-[#e63946]" /> 
                  Pierogi Słodkie (na wagę)
                </h3>
                <div className="space-y-6">
                  {MENU_ITEMS.sweet_kg.map((item, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="flex justify-between items-center group">
                      <p className="font-medium text-stone-700 group-hover:text-[#e63946] transition-colors">{item.name}</p>
                      <div className="flex-1 border-b border-dotted border-stone-200 mx-4 h-4"></div>
                      <span className="font-black text-stone-900">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-['Playfair_Display'] font-bold text-stone-900">Nasza Galeria</h2>
              <p className="text-stone-500 mt-2">Zapraszamy do oglądania naszych wyrobów</p>
            </div>
            <a 
              href={FB_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#e63946] font-bold flex items-center gap-2 hover:underline"
            >
              Więcej zdjęć na Facebooku <Facebook size={18} />
            </a>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={img} 
                  alt={`Pierogi ${idx}`} 
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Star className="text-white" fill="white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-24 bg-[#fdfbf7]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-['Playfair_Display'] font-bold text-stone-900">Zajrzyj za kulisy</h2>
            <div className="w-24 h-1 bg-[#e63946] mx-auto"></div>
            <p className="text-stone-500">Zobacz jak przygotowujemy nasze pyszności</p>
          </div>
          
          <div className="flex flex-wrap gap-10 justify-center items-start">
            {[
              { id: '1', url: "https://www.facebook.com/reel/876702771688730", title: "Nasze Pierogi" },
              { id: '2', url: "https://www.facebook.com/share/r/1KzDYFoL1R/", title: "Lepienie na żywo" },
              { id: '3', url: "https://www.facebook.com/reel/1955199395205222", title: "Domowa kuchnia" }
            ].map((reel, idx) => (
              <motion.div 
                key={reel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-100 border border-stone-200 w-[280px] h-[500px]">
                  {/* Invisible placeholder that shows if iframe fails or is blocked */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-stone-50 z-0">
                    <Facebook className="text-stone-300 mb-4" size={48} />
                    <p className="text-sm text-stone-400">Film z Facebooka</p>
                    <p className="text-xs text-stone-300 mt-2">Jeśli film nie jest widoczny,<br/>kliknij poniżej</p>
                  </div>
                  
                  <iframe 
                    src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(reel.url)}&show_text=false&width=280&t=0`} 
                    width="280" 
                    height="500" 
                    className="relative z-10 w-full h-full"
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title={reel.title}
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a 
                  href={reel.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#e63946] hover:underline flex items-center gap-2 bg-stone-50 px-4 py-2 rounded-full border border-stone-200 shadow-sm"
                >
                  <Facebook size={14} /> Otwórz na Facebooku
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-[#e63946] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Heart size={300} fill="currentColor" />
        </div>
        <div className="mx-auto max-w-7xl px-4 text-center relative z-10">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-8">Co mówią o nas goście?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12 italic">
            "Najlepsze pierogi jakie jadłam w życiu! Czuć, że lepione sercem i z najlepszych składników. Pielmieni to mistrzostwo świata!"
          </p>
          <a 
            href={FB_REVIEWS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#e63946] px-8 py-4 rounded-2xl font-bold hover:bg-stone-50 transition-colors shadow-2xl"
          >
            Sprawdź opinie na Facebooku
            <Facebook size={20} />
          </a>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-['Playfair_Display'] font-bold text-stone-900 mb-6">Zapraszamy do nas</h2>
                <p className="text-stone-500 mb-8">Odbierz osobiście lub zjedz na miejscu w samym centrum Otwocka.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 text-[#e63946] rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Adres</p>
                      <p className="text-stone-600">Ul. Sportowa 4/2, 05-400 Otwock</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 text-[#e63946] rounded-2xl flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">Telefon</p>
                      <a href="tel:663580745" className="text-stone-600 hover:text-[#e63946] transition-colors">663 580 745</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 text-[#e63946] rounded-2xl flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-stone-900">E-mail</p>
                      <a href="mailto:olszewska2280@gmail.com" className="text-stone-600 hover:text-[#e63946] transition-colors">olszewska2280@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-[#e63946]" />
                  <h3 className="text-xl font-bold text-stone-900">Godziny otwarcia</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { day: 'Poniedziałek', hours: '10:00 - 16:00' },
                    { day: 'Wtorek', hours: '10:00 - 16:00' },
                    { day: 'Środa', hours: '10:00 - 16:00' },
                    { day: 'Czwartek', hours: '10:00 - 16:00' },
                    { day: 'Piątek', hours: '10:00 - 16:00' },
                    { day: 'Sobota', hours: '12:00 - 16:00' },
                    { day: 'Niedziela', hours: 'ZAMKNIĘTE', closed: true },
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-stone-200 last:border-0">
                      <span className="font-medium text-stone-700">{h.day}</span>
                      <span className={`font-bold ${h.closed ? 'text-red-500' : 'text-stone-900'}`}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[500px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-xl border border-stone-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.0292646599087!2d21.265479912862176!3d52.097398971836384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192a632c1e46b5%3A0x990424f71b01643a!2sSportowa%204%2F2%2C%2005-400%20Otwock!5e0!3m2!1spl!2spl!4v1776929150100!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-['Playfair_Display'] font-bold">Pierogarnia <span className="text-[#e63946]">na widelcu</span></h2>
            <p className="text-stone-400 max-w-xs">Domowe smaki w tradycyjnym wydaniu. Zapraszamy serdecznie!</p>
          </div>
          
          <div className="flex gap-4">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-[#e63946] rounded-full flex items-center justify-center transition-all">
              <Facebook size={24} />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 hover:bg-[#e63946] rounded-full flex items-center justify-center transition-all">
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-stone-400 text-sm">
            <p>© {new Date().getFullYear()} Pierogarnia na widelcu.</p>
            <p className="mt-1">Zdjęcia pochodzą z profilu FB Firmy.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
