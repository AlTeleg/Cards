const CardImg = ({src, alt='Image cap'}: {src: string, alt?: string}) => {
  return (
    <img className='card-img-top' src={src} alt={alt}></img>
  )
}

export default CardImg