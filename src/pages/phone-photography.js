import Head from 'next/head';
import { Image } from 'antd';

export default function Phone() {

  return (
    <>
      <Head>
        <title>Phone Photography / from phone to film</title>
      </Head>

      <main className={`wrap-phone`}>
        <div className={`phone-hero`}>
          <h1>Phone Photography</h1>
          <p>&quot;I think that&apos;s the strength of photography - to decide the decisive moment, to click in the moment to come up with a picture that never comes back again.&quot; - René Burri</p>
        </div>

        <div className="phone-container">
          <div className={`phone-content-1`}>
            <h2>Penang - Butterfly Farm</h2>

            <div className={`phone-1-item`}>
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
              >
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-01.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-02.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-03.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-04.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-05.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-06.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-07.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2018-08.png" className={`phone-photo-item`}
                />
              </Image.PreviewGroup>
            </div>
          </div>

          <div className={`phone-content-1`}>
            <h2>Taiwan - Sakura</h2>

            <div className={`phone-1-item`}>
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
              >
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-01-01.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-01-02.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-01-03.png" className={`phone-photo-item`}
                />
              </Image.PreviewGroup>
            </div>
          </div>

          <div className={`phone-content-1`}>
            <h2>Taiwan - Random</h2>

            <div className={`phone-1-item`}>
              <Image.PreviewGroup
                preview={{
                  onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
              >
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-01.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-02.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-03.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-04.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-05.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-06.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-07.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-08.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-09.png" className={`phone-photo-item`}
                />
                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-10.png" className={`phone-photo-item`}
                />

                <Image alt="pucceu / phone photography" //width={300} 
                  src="/assets/photography/2019-02-11.png" className={`phone-photo-item`}
                />
              </Image.PreviewGroup>
            </div>
          </div>

        </div>
      </main>
    </>
    
  )
}
