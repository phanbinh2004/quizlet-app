import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const FlashCards = () => {
    const params = useParams();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return (
      <div className="text-3xl font-bold underline bg-white dark:bg-black">
        <button onClick={() => changeLanguage("en")}>English</button>
        <br />
        <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
        <br />
        {t("greeting")}: {params?.folderName}
      </div>
    );
}
 
export default FlashCards;