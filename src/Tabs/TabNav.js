export const TabNav = ({ list, select, active }) => {
  const onClick = (e, id) => {
    select(id);
    e.preventDefault();
  };



  return (
    <nav className="nav-tab">
      <ul> {list.map((el, index) =>
        (<li
          key={index}
          className={active === index ? 'active' : null}
        >
          <a href="#"
             onClick={e => onClick(e, index)}>
            {el}
          </a>
        </li>)
      )}
      </ul>
    </nav> ); };