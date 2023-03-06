
import {InfoTitle,InfoDescription,InfoCopyright,InfoDate} from "./styled-info.jsx";

const PictureInfo = ({ picture }) => (
  <div>
      <InfoTitle>{picture.title}</InfoTitle>
      <InfoDate>{picture.date}</InfoDate>
      <InfoDescription>{picture.explanation}</InfoDescription>
      {
      picture.copyright &&
      <InfoCopyright>Copyright: {picture.copyright}</InfoCopyright>
      }
    </div>
);
export default PictureInfo;
