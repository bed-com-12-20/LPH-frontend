
import Header from "@/componets/navbar"
import Footer from "@/componets/footer"
const people = [
    {
      name: 'Samson Zarila',
      role: 'Full-Stack Developer',
      imageUrl:
        'https://scontent.fblz2-1.fna.fbcdn.net/v/t39.30808-6/357734201_3397892850525582_1436579738853118720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8fsgODOUfdSmAx5ySDuShbmkLX9Ss_hNuaQtf1Kz-E1TPZ-TfVnYDfd_fOqRAJ9RbZfQCZcadnO8ou14fQ83O&_nc_ohc=_MPVU1xMCN4Ab5w3bJ4&_nc_zt=23&_nc_ht=scontent.fblz2-1.fna&oh=00_AfDSySLur5ySWS6F1_v_-40s5oUeT0y9vc4rL1a-cM7wAg&oe=661C9F46',
    },
    {
        name: 'Crossby Chilikumtima',
        role: 'Information system manager ',
        imageUrl:
          'https://scontent.fblz2-1.fna.fbcdn.net/v/t1.6435-9/74588507_950856858606381_4667126207903432704_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHX6zJjUuTjY9xbRuCj9qQN-F7RHr-g7WP4XtEev6DtY7mRYMLLbr3n-By3jckIF-EaBCPeN4CMEdli-GHerISY&_nc_ohc=X2BHIV7X7pwAb5kxR3F&_nc_ht=scontent.fblz2-1.fna&oh=00_AfDbmiOgA23xMV9Y-Ffdgltmqx_Zdvm9kx9N7wA5FPCu4g&oe=663E568A',
      },
      {
        name: 'Richard Mlambuzi',
        role: 'Full-Stack Developer',
        imageUrl:
          'https://scontent.fblz2-1.fna.fbcdn.net/v/t39.30808-6/407865931_1891544774575812_7388651972688331146_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEVVWWq9Q6W8a51Rgki-lOKG9MZ2OyVXNcb0xnY7JVc1yItsfy1G5ijoRIfmzO-LgKGrAAYxWWI18ERXp7rJwBN&_nc_ohc=ex7zQ5qNjsIAb6H2rQg&_nc_zt=23&_nc_ht=scontent.fblz2-1.fna&oh=00_AfB2GgS1rmffIeZm_wZHWFCpokJGIDjvAdk2yaAdlxx-gQ&oe=661C9679',
      },
      {
        name: 'Tafadzwa Gambiza',
        role: 'Front-End Developer',
        imageUrl:
          'https://scontent.fblz2-1.fna.fbcdn.net/v/t39.30808-1/275781291_499955221767178_1356201981530388921_n.jpg?stp=c0.33.200.200a_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzRYzJcwdGMT8-HkcmUnNfrVX1sFtR9aGtVfWwW1H1oalouyrnJfGQ1D42I7kotD7A_UaFagsM9WaieEkph92m&_nc_ohc=LaX8Z9FaW04Ab7mBpHh&_nc_ht=scontent.fblz2-1.fna&oh=00_AfCRrzwLCiYmSS8P_2mmZnO8k_-2A2HJBYymdamdohSWFw&oe=661CA34C',
      },
      {
        name: 'Peter kayira',
        role: 'UX Designer',
        imageUrl:
          'https://scontent.fblz2-1.fna.fbcdn.net/v/t39.30808-6/425297930_359602856978080_7032392020350021342_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuthHkmj5czO83-e7v5HrZmhdDChd4SS-aF0MKF3hJL38_AkjJ0PcsBUwYX7tOfNbz5R0Zkhcn6uXuV0Nllbr8&_nc_ohc=iM43CgluWQ0Ab5T-XfM&_nc_zt=23&_nc_ht=scontent.fblz2-1.fna&oh=00_AfC4RZHsWlHF9cotHLItsLIIKH2EDptGwVJH1SEQzBkKHA&oe=661C8AAF',
      },
    
  ]
  
  export default function Team() {
    return (
        <div>
            <Header/>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team of Developers</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             if you find our work interesting and amazing please contact us through <br/>+265887261094 <br/>
             +265886262527
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div> 
      <Footer></Footer>
        </div>
        


    )
  }
  