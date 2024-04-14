import { CheckIcon } from '@heroicons/react/20/solid'
import Header from '@/componets/navbar'
import Footer from '@/componets/footer'
import ScrollToTopButton from '../Scroll/scroll'

const includedFeatures = [
  'Cash',
  'Mpamba',
  'Airtel Money ',
  'Medical Scheme',
]

export default function Example() {
  return (
    <>
     <Header/>
     <div className='bg-green-400 w-full h-400 justify-center  py-24 sm:py-32' style={{backgroundImage:'url(https://i.pinimg.com/564x/bd/bc/0b/bdbc0bda70405b998e163ad879a429f1.jpg)',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover'
    }}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
      <div className='mx-auto max-w-2xl sm:text-center'>
      <h1 className='mt-60 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl' >Liwonde Private Pharmacy service</h1>
      </div>
        
      </div>
     
     </div>
     <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">Liwond Private Hospital Pharmacy</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
            in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
         
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-green-900 ">Buy Medicine</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Payment Methods</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">We Treat, God Heals</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">MWK00</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">kwacha</span>
                </p>
                <a
                  href="BuyNow"
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy Now
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Note: Collection is at the LPH pharmacy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <ScrollToTopButton/>
    <Footer/>
    </>
   
  )
}
