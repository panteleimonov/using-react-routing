import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        to="."
        end={true}
        style={({ isActive }) =>
          isActive ? { color: 'red', textTransform: 'uppercase' } : {}
        }
      >
        Home
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;
