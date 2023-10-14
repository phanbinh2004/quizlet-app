const Img = ({ src, alt, className, ...restProps }) => {
  return <img src={src} alt={alt} className={className} {...restProps} />;
};

export default Img;