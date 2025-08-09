
const NoResultDiv = () => {
  return (
    <div className="no-results">
        <img src="icons/no-result.svg" alt="No results found" className="icon" />
        <h3 className="title">Something went wrong</h3>
        <p className="message">We're unable to retrive thr weather details. Ensure you entered a valid city or try again</p>
    </div>
  )
}

export default NoResultDiv