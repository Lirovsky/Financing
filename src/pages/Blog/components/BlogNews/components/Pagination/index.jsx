import { PropTypes } from "prop-types";
export default function Pagination({ text, style }) {
  return <button className={`h-12 w-12 rounded-full ${style}`}>{text}</button>;
}

Pagination.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
};
