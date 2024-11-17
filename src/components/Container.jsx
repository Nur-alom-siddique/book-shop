function Container(props) {
  return (
    <div className={`max-w-screen-xl m-auto ${props.className}`}>{props.children}</div>
  )
}

export default Container;