import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled: (value: Boolean) => void;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  // const handleOnClick = () => {
  //   setSelectedPage(lowerCasePage);
  // };
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-gray-400" : ""
      } transition duration-500 hover:text-gray-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
