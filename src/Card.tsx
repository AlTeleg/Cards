const Card = ({children, title='Card title', text='Some quick example text to build on the card title and make up the bulk of the card\'s content.', btnText='Go somewhere', btnHref='#'}: any) => {
  return (
    <div className="card" style={{width: '18rem'}}>
       {children}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href={btnHref} className="btn btn-primary">{btnText}</a>
        </div>
    </div>
  )
}

export default Card



