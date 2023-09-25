/* eslint-disable @typescript-eslint/no-explicit-any */
import Imgix from 'react-imgix'

function Image({
  src,
  alt,
  className,
  imgixParams
}: {
  src: string
  alt?: string
  className?: string
  imgixParams?: { [key: string]: any }
}) {
  const params = {
    // auto: 'format,compress',
    // fit: 'crop',
    // crop: 'faces,edges',
    // 'bg-remove': true,
    ...imgixParams
  }
  return (
    <Imgix
      imgixParams={params}
      src={src}
      className={className}
      htmlAttributes={{ alt }}
      // width={400}
      // height={400}
    />
  )
}

export default Image
