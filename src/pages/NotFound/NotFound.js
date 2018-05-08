import './notFound.scss';

export const NotFound = () => {

    return (
      <React.Fragment>
          <div className="not-found">
              <p>Ooops...!!! This page not found!</p>
              <img src="/images/404.gif" alt="todo"/>
          </div>
      </React.Fragment>
    )
}