import { Link } from "react-router-dom";

export default function NavItem({ item }) {
  return <Link to={item.url}>{item.label}</Link>;
}
