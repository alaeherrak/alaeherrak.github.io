const SideLink = ({ link, logo }) => {
  return (
    <a href={link} target="_blank">
      <img src={logo} alt="sidelink" width="35px" />
    </a>
  );
};

export default SideLink;
